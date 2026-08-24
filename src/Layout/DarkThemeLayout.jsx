// components/DarkThemeLayout.jsx
const DarkThemeLayout = ({ children }) => {
  return (
    // This main div now controls the background for the entire app
    <div className="min-h-screen bg-gray-100 dark:bg-gradient-to-br dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-gray-800 dark:text-gray-100 transition-colors duration-300">
      <div className='mx-auto max-w-7xl relative'>
        {/* The 'children' prop will render the actual page content */}
        <main>{children}</main>
      </div>
    </div>
  );
};

export default DarkThemeLayout;