interface YouTubeVideoResponse {
  items: Array<{
    snippet: {
      title: string;
      description?: string;
      thumbnails?: {
        maxres?: { url: string };
        high?: { url: string };
        medium?: { url: string };
        default?: { url: string };
      };
    };
  }>;
}

export class YouTubeApiError extends Error {
  constructor(message: string, public status?: number) {
    super(message);
    this.name = 'YouTubeApiError';
  }
}

export function extractVideoId(url: string): string | null {
  const patterns = [
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/,
    /youtube\.com\/watch\?.*v=([^&\n?#]+)/
  ];

  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match && match[1]) {
      return match[1];
    }
  }
  return null;
}

export function getThumbnailUrl(videoId: string, quality: 'maxresdefault' | 'hqdefault' | 'mqdefault' | 'default' = 'maxresdefault'): string {
  return `https://img.youtube.com/vi/${videoId}/${quality}.jpg`;
}

export async function getVideoTitle(videoId: string): Promise<string> {
  const apiKey = import.meta.env.VITE_YOUTUBE_API_KEY;
  
  if (!apiKey) {
    throw new YouTubeApiError('YouTube API key not configured. Please add VITE_YOUTUBE_API_KEY to your environment variables.');
  }

  const url = `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=${apiKey}`;

  try {
    const response = await fetch(url);
    
    if (!response.ok) {
      if (response.status === 403) {
        throw new YouTubeApiError('YouTube API quota exceeded or API key invalid', response.status);
      } else if (response.status === 404) {
        throw new YouTubeApiError('Video not found or is private', response.status);
      } else {
        throw new YouTubeApiError(`YouTube API error: ${response.statusText}`, response.status);
      }
    }

    const data: YouTubeVideoResponse = await response.json();
    
    if (!data.items || data.items.length === 0) {
      throw new YouTubeApiError('Video not found or is private');
    }

    const title = data.items[0].snippet.title;
    if (!title) {
      throw new YouTubeApiError('Video title not available');
    }

    return title;
  } catch (error) {
    if (error instanceof YouTubeApiError) {
      throw error;
    }
    
    // Network or other errors
    throw new YouTubeApiError(
      error instanceof Error 
        ? `Failed to fetch video data: ${error.message}`
        : 'Failed to fetch video data'
    );
  }
}

export async function fetchThumbnailAsBlob(thumbnailUrl: string): Promise<Blob> {
  try {
    const response = await fetch(thumbnailUrl);
    
    if (!response.ok) {
      throw new Error(`Failed to fetch thumbnail: ${response.statusText}`);
    }

    const blob = await response.blob();
    
    // Verify it's an image
    if (!blob.type.startsWith('image/')) {
      throw new Error('Fetched content is not an image');
    }

    return blob;
  } catch (error) {
    throw new YouTubeApiError(
      error instanceof Error 
        ? `Failed to fetch thumbnail: ${error.message}`
        : 'Failed to fetch thumbnail'
    );
  }
}

export async function convertBlobToBase64(blob: Blob): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      const result = reader.result as string;
      // Remove data URL prefix to get just the base64 data
      const base64Data = result.split(',')[1];
      resolve(base64Data);
    };
    reader.onerror = reject;
    reader.readAsDataURL(blob);
  });
}
