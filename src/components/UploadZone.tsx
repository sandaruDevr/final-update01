import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { Upload } from 'lucide-react';

interface UploadZoneProps {
  onFileSelect: (file: File) => void;
}

export function UploadZone({ onFileSelect }: UploadZoneProps) {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      onFileSelect(acceptedFiles[0]);
    }
  }, [onFileSelect]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.jpeg', '.jpg', '.png', '.webp']
    },
    maxFiles: 1,
    maxSize: 4 * 1024 * 1024 // 4MB
  });

  return (
    <div
      {...getRootProps()}
      className={`border-2 border-dashed rounded-3xl p-8 sm:p-12 text-center cursor-pointer transition-colors
        ${isDragActive ? 'border-primary-500 bg-primary-50' : 'border-gray-300 hover:border-primary-400'}`}
    >
      <input {...getInputProps()} />
      <Upload className="mx-auto h-12 w-12 sm:h-16 sm:w-16 text-primary-400" />
      <p className="mt-4 text-lg text-gray-600">
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