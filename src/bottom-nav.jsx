import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import { IconButton } from '@mui/material';


export default function LabelBottomNavigation() {

  return (
    <BottomNavigation sx={{ width: '100%' }}>
        <IconButton target='_blank' href='https://github.com/godbehere'>
            <GitHubIcon />
        </IconButton>
        <IconButton target='_blank' href='https://www.linkedin.com/in/grant-godbehere/'>
            <LinkedInIcon />
        </IconButton>
    </BottomNavigation>
  );
}