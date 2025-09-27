# Thumblytics - YouTube Thumbnail Analyzer

A powerful AI-powered tool for analyzing YouTube thumbnails and providing optimization insights.

## Features

- **Upload Analysis**: Upload thumbnail images directly for analysis
- **YouTube URL Analysis**: Analyze thumbnails directly from YouTube video URLs
- **AI-Powered Insights**: Get detailed feedback on visual appeal, clarity, and optimization tips
- **Modern UI**: Clean, responsive interface with smooth transitions

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- YouTube Data API v3 key (for YouTube URL analysis)
- Gemini API key (for AI analysis)

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   ```bash
   cp .env.example .env
   ```
   
   Add your API keys:
   ```
   VITE_GEMINI_API_KEY=your_gemini_api_key_here
   VITE_YOUTUBE_API_KEY=your_youtube_api_key_here
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

## API Keys Setup

### YouTube Data API v3

1. Go to the [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable the YouTube Data API v3
4. Create credentials (API key)
5. Add the API key to your `.env` file as `VITE_YOUTUBE_API_KEY`

### Gemini API

1. Get your API key from Google AI Studio
2. Add it to your `.env` file as `VITE_GEMINI_API_KEY`

## Usage

### Upload Mode
1. Select the "Upload Image" tab
2. Drag and drop or click to select a thumbnail image
3. Optionally add a video title for better context
4. Click "Analyze Thumbnail"

### YouTube URL Mode
1. Select the "YouTube URL" tab
2. Paste a YouTube video URL
3. Click "Analyze YouTube Thumbnail"
4. The system will automatically extract the thumbnail and video title

## Technologies Used

- React 18 with TypeScript
- Vite for build tooling
- Tailwind CSS for styling
- Lucide React for icons
- Google Gemini AI for analysis
- YouTube Data API v3 for video information

[Edit in StackBlitz next generation editor ⚡️](https://stackblitz.com/~/github.com/sandaruDevr/final-update01)