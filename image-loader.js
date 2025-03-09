export default function imageLoader({ src }) {
  const baseURL = process.env.NODE_ENV === 'production'
    ? process.env.NEXT_PUBLIC_BASE_PATH
    : '';
  
  // Remove any leading slash from src to avoid double slashes
  const normalizedSrc = src.startsWith('/') ? src.slice(1) : src;
  
  // Combine the base URL with the normalized source path
  return `${baseURL}/${normalizedSrc}`;
} 