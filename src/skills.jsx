import * as React from 'react';
import Box from '@mui/material/Box';
import { Grid, List, ListItem, ListItemText, Typography } from '@mui/material';
import Container from '@mui/material/Container';

export default function Skills() {
  return (
    <React.Fragment>
      <Container maxWidth="sm">
        <Box>
            <Typography variant='h2'>
                Skills
            </Typography>

        <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
                <Typography sx={{ mt: 4, mb: 2 }} variant="h5" component="div">
                    Languages
                </Typography>
          
                <List >

                    <ListItem>
                        <ListItemText
                            primary="Java"
                            // secondary={secondary ? 'Secondary text' : null}
                        />
                    </ListItem>
                    <ListItem>
                        <ListItemText
                            primary="Python"
                            // secondary={secondary ? 'Secondary text' : null}
                        />
                    </ListItem>
                    <ListItem>
                        <ListItemText
                            primary="JavaScript"
                            // secondary={secondary ? 'Secondary text' : null}
                        />
                    </ListItem>
                    <ListItem>
                        <ListItemText
                            primary="TypeScript"
                            // secondary={secondary ? 'Secondary text' : null}
                        />
                    </ListItem>
                    <ListItem>
                        <ListItemText
                            primary="C#"
                            // secondary={secondary ? 'Secondary text' : null}
                        />
                    </ListItem>
                    <ListItem>
                        <ListItemText
                            primary="HTML"
                            // secondary={secondary ? 'Secondary text' : null}
                        />
                    </ListItem>
                    <ListItem>
                        <ListItemText
                            primary="CSS"
                            // secondary={secondary ? 'Secondary text' : null}
                        />
                    </ListItem>


                </List>
          
            </Grid>


            <Grid item xs={12} md={6}>
                <Typography sx={{ mt: 4, mb: 2 }} variant="h5" component="div">
                    Utilities/Tools
                </Typography>
                
                    <List>
                    
                        <ListItem>
        
                            <ListItemText
                                primary="Linux"
                                // secondary={secondary ? 'Secondary text' : null}
                            />
                        </ListItem>
                        <ListItem>
        
                            <ListItemText
                                primary="Bash Scripting"
                                // secondary={secondary ? 'Secondary text' : null}
                            />
                        </ListItem>
                        <ListItem>
        
                            <ListItemText
                                primary="Docker"
                                // secondary={secondary ? 'Secondary text' : null}
                            />
                        </ListItem>
                        <ListItem>
        
                            <ListItemText
                                primary="Linode"
                                // secondary={secondary ? 'Secondary text' : null}
                            />
                        </ListItem>
                        <ListItem>
        
                            <ListItemText
                                primary="Apache"
                                // secondary={secondary ? 'Secondary text' : null}
                            />
                        </ListItem>
                        <ListItem>
        
                            <ListItemText
                                primary="Nginx"
                                // secondary={secondary ? 'Secondary text' : null}
                            />
                        </ListItem>
                        <ListItem>
        
                            <ListItemText
                                primary="Jupyter Notebook"
                                // secondary={secondary ? 'Secondary text' : null}
                            />
                        </ListItem>
                    </List>
                
            </Grid>


            
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Typography sx={{ mt: 4, mb: 2 }} variant="h5" component="div">
            Databases
          </Typography>
          
            <List>
              
                <ListItem>
  
                  <ListItemText
                    primary="MySQL"
                    // secondary={secondary ? 'Secondary text' : null}
                  />
                </ListItem>
                <ListItem>
  
                  <ListItemText
                    primary="OracleDB"
                    // secondary={secondary ? 'Secondary text' : null}
                  />
                </ListItem>
                <ListItem>
  
                  <ListItemText
                    primary="MongoDB"
                    // secondary={secondary ? 'Secondary text' : null}
                  />
                </ListItem>
                <ListItem>
  
                  <ListItemText
                    primary="PostgreSQL"
                    // secondary={secondary ? 'Secondary text' : null}
                  />
                </ListItem>
            </List>
          
        </Grid>
        

        <Grid item xs={12} md={6}>
                <Typography sx={{ mt: 4, mb: 2 }} variant="h5" component="div">
                    Frameworks
                </Typography>
          
                <List>
              
                    <ListItem>

                        <ListItemText
                            primary="React"
                            // secondary={secondary ? 'Secondary text' : null}
                        />
                    </ListItem>
                    <ListItem>

                        <ListItemText
                            primary="Flask"
                            // secondary={secondary ? 'Secondary text' : null}
                        />

                    </ListItem>
                    <ListItem>

                        <ListItemText
                            primary="Angular"
                            // secondary={secondary ? 'Secondary text' : null}
                        />

                    </ListItem>
                    <ListItem>

                        <ListItemText
                            primary="Spring/SpringBoot"
                            // secondary={secondary ? 'Secondary text' : null}
                        />

                    </ListItem>
                    
                    
                </List>
          
            </Grid>


        </Grid>
        <br/>
        <Typography variant="caption" display="block" gutterBottom>
            This list is not comprehensive, rather it tries to higlight
            my most relevant skills. Additionally, I am always excited
            to learn new skill sets.
        </Typography>

        </Box>
      </Container>
    </React.Fragment>
  );
}