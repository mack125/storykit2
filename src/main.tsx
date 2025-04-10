import CssBaseline from '@mui/material/CssBaseline';
import { Experimental_CssVarsProvider as CssVarsProvider } from '@mui/material/styles';
import ClassificationBanner from '@storykit/react/ClassificationBanner';
import ReactDOM from 'react-dom/client';

import App from './App.tsx';
import Navbar from './components/Navbar.tsx';
import './index.css';
import theme from './theme';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <CssVarsProvider
    theme={theme}
    defaultMode="light"
    // Will get replaced with the project name
    modeStorageKey="mui-mode--~TODOSTORYTELLING~">
    <CssBaseline />
    <ClassificationBanner classification="Unclassified" />
    <Navbar />
    <App />
  </CssVarsProvider>,
);
