import * as React from 'react';
import Box from '@mui/material/Box';
import { Divider, Typography } from '@mui/material';
import Container from '@mui/material/Container';

export default function AboutMe() {
  return (
    <React.Fragment>
      <Container maxWidth="sm">
        <Box>
            <Typography variant='h2'>
                Grant Godbehere
            </Typography>
            <Typography variant='h4'>
                Software Engineer
            </Typography>
            <br/>
            <Typography align='justify' variant="body1" gutterBottom>
                I am a software engineer with over a year of 
                experience in Java and a passion for solving
                complex problems and delivering high-quality code.
                I have experience with a variety of programming languages
                including, JavaScript, Python, Java, and C#, and have also
                worked with both SQL and NoSQL databases. I am well-versed in
                Linux and familiar with containerization using Docker.
                I have deployed applications with Nginx, and Apache, and
                written REStful API with both Flask, and SpringBoot. I am
                always looking for new challenges and opportunities to
                continue growing my skills in the software development field.
            </Typography>
                <br/>
            <Typography align='justify' variant="body1" gutterBottom>
                Before my current role, I worked as a mechanical
                engineering technologist in research and development.
                This experience has helped me develop transferable
                skills such as troubleshooting and team building.
                Through this experience, I have learned how to approach
                complex problems, how to identify and solve the root
                cause of issues and how to work effectively in a
                team environment.
            </Typography>
                <br/>
            <Typography align='justify' variant="body1" gutterBottom>
                In my free time, I enjoy traveling and exploring new
                cultures. I love to capture my experiences through photography,
                which has become one of my favorite hobbies. I also enjoy hiking,
                reading and learning new things. My love for travel and
                photography has taught me adaptability, attention to detail
                and how to think outside the box. I believe that my diverse
                interests and experiences have made me a well-rounded individual
                and a valuable asset to any team.
            </Typography>
                <br/>
                <Divider variant="middle" />
                <br/>
            <Typography align='justify' variant="body1" gutterBottom>
                Thanks for taking the time to get to know about me. You can find
                a full list of languages, frameworks, and technologies that I am
                familiar with under the "Skills" tab.
                To get better acquainted with me and my work, check out the
                projects I have shared under the "Projects" tab. You can also find
                links to my GitHub and LinkedIn profiles below.
            </Typography>
        </Box>
      </Container>
    </React.Fragment>
  );
}