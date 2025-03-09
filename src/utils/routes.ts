export const getBasePath = () => {
  return process.env.NODE_ENV === 'production' ? '/portfolio_2025' : '';
};

export const createPath = (path: string) => {
  const basePath = getBasePath();
  // Remove leading slash from path if it exists
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  // Combine base path with clean path
  return cleanPath ? `${basePath}/${cleanPath}` : basePath || '/';
}; 