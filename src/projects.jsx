import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import { projectObj } from './projects-obj';
import ProjectCard from './project-card';

export default class Projects extends React.Component {

    getCards() {
        let projectCards = []
        for (let proj of projectObj) {
            projectCards.push(<Grid><ProjectCard proj={proj}></ProjectCard></Grid>)
        }
        return projectCards;
    }

    render() {
        return (
            <React.Fragment>
            <Container maxWidth="xl">
                <Box>
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={2}>
                            {this.getCards()}
                        </Grid>
                    </Box>
                </Box>
            </Container>
            </React.Fragment>
        );
    }
}