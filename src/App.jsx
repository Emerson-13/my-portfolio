import WelcomePage from './Pages/WelcomePage';
import { ThemeProvider } from './Context/ThemeContext';
import DarkThemeLayout from './Layout/DarkThemeLayout';

function App() {
  return (
    <ThemeProvider>
    <DarkThemeLayout>
      <WelcomePage />
      </DarkThemeLayout>
      </ThemeProvider>
  );
}

export default App;
