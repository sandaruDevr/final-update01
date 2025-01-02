import { ValidationError } from './errors';

export function validateImageFile(file: File): void {
  if (!file.type.startsWith('image/')) {
    throw new ValidationError('Invalid file type. Please upload an image.');
  }

  const maxSize = 4 * 1024 * 1024; // 4MB
  if (file.size > maxSize) {
    throw new ValidationError('Image size too large. Please upload an image smaller than 4MB.');
  }

  const allowedTypes = ['image/jpeg', 'image/png', 'image/webp'];
  if (!allowedTypes.includes(file.type)) {
    throw new ValidationError('Unsupported image format. Please use JPG, PNG, or WebP.');
  }
}