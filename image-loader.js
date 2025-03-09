export default function customImageLoader({ src }) {
  const baseUrl = process.env.NODE_ENV === 'production' 
    ? `https://rohitdude10.github.io/portfolio_2025` 
    : '';
  return `${baseUrl}${src}`;
} 