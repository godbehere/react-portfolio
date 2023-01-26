import * as React from 'react';
import ReactDOM from 'react-dom/client'
import CssBaseline from '@mui/material/CssBaseline';
import NavBar from './nav-bar';
import LabelBottomNavigation from './bottom-nav';
import useMediaQuery from '@mui/material/useMediaQuery';
import { ThemeProvider, createTheme } from '@mui/material/styles';


export default function MyApp() {

  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? 'dark' : 'light',
        },
      }),
    [prefersDarkMode],
  );

  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <CssBaseline enableColorScheme />
        <NavBar />
        <LabelBottomNavigation />
      </ThemeProvider>
    </React.Fragment>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<MyApp />);
