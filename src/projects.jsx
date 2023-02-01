import * as React from 'react';
import Box from '@mui/material/Box';
import { Link, Typography } from '@mui/material';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
// import { styled } from '@mui/material/styles';
// import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import { projectObj } from './projects-obj';

function ProjectCard(props) {
    return (
        <Card sx={{ maxWidth: 345 }}>
        <CardMedia
            sx={{ height: 140,
                minWidth: 345
            }}
            image={props.proj.pic}
            title={props.proj.title}
        />
        <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                {props.proj.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                {props.proj.description}
            </Typography>
            <br/>
            <Typography gutterBottom variant="h6" component="div">
                Technologies Used
            </Typography>
                <ul>{props.proj.tech}</ul>
        </CardContent>
        <CardActions>
            <Button size="small">
                <Link target='_blank' href={props.proj.link}>
                    Site
                </Link>
            </Button>
            <Button size="small">
                <Link target='_blank' href={props.proj.github}>
                    GitHub
                </Link>
            </Button>
        </CardActions>
        </Card>
    );
}

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
// }));

export default class Projects extends React.Component {
    getProjectCard(proj) {
        return <ProjectCard 
                    proj={proj}
                />;
    }
    testProjArray() {
        let projectCards = []
        for (let proj of projectObj) {
            projectCards.push(<Grid>{this.getProjectCard(proj)}</Grid>)
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
                            {this.testProjArray()}
                        </Grid>
                    </Box>
                </Box>
            </Container>
            </React.Fragment>
        );
    }
}