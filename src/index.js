import * as React from 'react';
import ReactDOM from 'react-dom/client'
import CssBaseline from '@mui/material/CssBaseline';
import NavBar from './nav-bar';
import LabelBottomNavigation from './bottom-nav';

export default function MyApp() {
  return (
    <React.Fragment>
      <CssBaseline />
      <NavBar />
      <LabelBottomNavigation />
    </React.Fragment>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<MyApp />);
