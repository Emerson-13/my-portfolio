import { useTheme } from '../Context/ThemeContext';

// Re-using the SVG icons from the previous example
const SunIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" /></svg> );
const MoonIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" /></svg> );

const DarkThemeLayout = ({ children }) => {
  // Use the custom hook to get theme context
  const { theme, toggleTheme } = useTheme();

  return (
    // This main div now controls the background for the entire app
    <div className="min-h-screen bg-gray-100 dark:bg-gradient-to-br dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-gray-800 dark:text-gray-100 transition-colors duration-300">
      <div className='mx-auto max-w-7xl relative'>

        {/* The theme toggle button is part of the layout */}
        <div className='absolute top-6 right-6 z-10'>
          <button
            onClick={toggleTheme}
            className='p-3 rounded-full bg-indigo-200/50 dark:bg-indigo-500/20 text-indigo-600 dark:text-indigo-300 hover:bg-indigo-200 dark:hover:bg-indigo-500/30 transition-all duration-300'
          >
            {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
          </button>
        </div>

        {/* The 'children' prop will render the actual page content */}
        <main>{children}</main>
        
      </div>
    </div>
  );
};

export default DarkThemeLayout;