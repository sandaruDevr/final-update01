import { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { Upload, Sparkles, X } from 'lucide-react';

interface UploadZoneProps {
  onAnalyze: (file: File, title?: string) => void;
  isAnalyzing?: boolean;
}

export function UploadZone({ onAnalyze, isAnalyzing = false }: UploadZoneProps) {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [title, setTitle] = useState<string>('');
  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      const file = acceptedFiles[0];
      setSelectedFile(file);
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.jpeg', '.jpg', '.png', '.webp']
    },
    maxFiles: 1,
    maxSize: 4 * 1024 * 1024 // 4MB
  });

  const handleAnalyze = () => {
    if (selectedFile) {
      onAnalyze(selectedFile, title.trim() || undefined);
    }
  };

  const handleRemoveFile = () => {
    setSelectedFile(null);
    if (previewUrl) {
      URL.revokeObjectURL(previewUrl);
      setPreviewUrl(null);
    }
    setTitle('');
  };

  if (selectedFile && previewUrl) {
    return (
      <div className="space-y-6">
        {/* Preview Section */}
        <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6">
          <button
            onClick={handleRemoveFile}
            className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow z-10"
          >
            <X className="h-5 w-5 text-gray-500" />
          </button>
          
          <div className="flex flex-col items-center">
            <div className="relative w-full max-w-md">
              <img
                src={previewUrl}
                alt="Thumbnail preview"
                className="w-full h-auto rounded-xl shadow-lg"
              />
            </div>
            <div className="mt-4 text-center">
              <p className="text-sm font-medium text-gray-700">{selectedFile.name}</p>
              <p className="text-xs text-gray-500">
                {(selectedFile.size / (1024 * 1024)).toFixed(1)} MB
              </p>
            </div>
          </div>
        </div>

        {/* Title Input */}
        <div className="space-y-3">
          <label htmlFor="video-title" className="block text-sm font-medium text-gray-700">
            Video Title <span className="text-gray-400">(Optional)</span>
          </label>
          <input
            id="video-title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter your video title for better analysis..."
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors text-sm placeholder-gray-400"
            maxLength={100}
          />
          <p className="text-xs text-gray-500">
            Adding a title helps our AI understand your content better and provide more relevant insights.
          </p>
        </div>

        {/* Analyze Button */}
        <button
          onClick={handleAnalyze}
          disabled={isAnalyzing}
          className="w-full bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 
                     disabled:from-gray-400 disabled:to-gray-500 text-white font-semibold py-4 px-6 rounded-xl 
                     transition-all duration-200 transform hover:scale-[1.02] disabled:hover:scale-100 
                     shadow-lg hover:shadow-xl disabled:shadow-md flex items-center justify-center gap-3"
        >
          {isAnalyzing ? (
            <>
              <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent" />
              Analyzing...
            </>
          ) : (
            <>
              <Sparkles className="h-5 w-5" />
              Analyze Thumbnail
            </>
          )}
        </button>
      </div>
    );
  }

  return (
    <div
      {...getRootProps()}
      className={`border-2 border-dashed rounded-3xl p-8 sm:p-12 text-center cursor-pointer transition-all duration-300
        ${isDragActive 
          ? 'border-primary-500 bg-primary-50 scale-[1.02]' 
          : 'border-gray-300 hover:border-primary-400 hover:bg-gray-50'}`}
    >
      <input {...getInputProps()} />
      <Upload className="mx-auto h-12 w-12 sm:h-16 sm:w-16 text-primary-400" />
      <p className="mt-4 text-lg text-gray-600 font-medium">
        {isDragActive
          ? "Drop your thumbnail here..."
          : "Drag and drop your thumbnail, or click to select"}
      </p>
      <p className="mt-2 text-sm text-gray-500">
        Supports JPG, PNG, and WebP (max 4MB)
      </p>
      <p className="mt-1 text-sm text-gray-500">
        Recommended size: 1280×720 pixels
      </p>
    </div>
  );
}