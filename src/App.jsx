import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WelcomePage from './Pages/WelcomePage';
import PrivacyPolicy from './Pages/PrivacyPolicy'; // <-- add this
import { ThemeProvider } from './Context/ThemeContext';
import DarkThemeLayout from './Layout/DarkThemeLayout';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <DarkThemeLayout>
          <Routes>
            <Route path="/" element={<WelcomePage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          </Routes>
        </DarkThemeLayout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
