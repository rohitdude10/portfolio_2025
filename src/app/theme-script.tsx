export function ThemeScript() {
  const themeScript = `
    (function() {
      try {
        // Check if user has a theme preference in localStorage
        const theme = localStorage.getItem('theme');
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        
        if (theme === 'dark' || (!theme && prefersDark)) {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
      } catch (e) {
        // If localStorage is not available or any other error occurs, fallback to light mode
        console.error('Error accessing localStorage for theme:', e);
      }
    })()
  `;

  return <script dangerouslySetInnerHTML={{ __html: themeScript }} />;
} 