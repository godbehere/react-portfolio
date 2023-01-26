import * as React from 'react';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import Container from '@mui/material/Container';

export default function AboutMe() {
  return (
    <React.Fragment>
      <Container maxWidth="sm">
        <Box>
            <Typography sx={{ textAlign: 'left' }} variant='h2'>
                Grant Godbehere
            </Typography>
            <Typography sx={{ textAlign: 'left' }} variant='h4'>
                Software Engineer
            </Typography>
            <br/>
            <Typography component={'span'} variant="body1" gutterBottom>
                I am a software engineer with over a year of experience in Java and a passion for solving complex problems and delivering high-quality code. I have experience with multiple programming languages such as Javascript, Python and have worked with databases like SQL and MongoDB. I am well-versed in Linux and familiar with containerization using Docker. I am familiar with Nginx, Flask, and SpringBoot. I am always looking for new challenges and opportunities to continue growing my skills in the software development field. 
                <br/>
                Before my current role, I have worked as a mechanical engineering technologist in research and development. This experience has helped me develop transferable skills such as troubleshooting and team building. Through this experience, I have learned how to approach complex problems, how to identify and solve the root cause of problems and how to work effectively in a team environment. 
                <br/>
                In my free time, I enjoy traveling and exploring new cultures. I love to capture my experiences through photography, which has become one of my favorite hobbies. I also enjoy hiking, reading and learning new things. My love for travel and photography has taught me adaptability, attention to detail and how to think outside the box. I believe that my diverse interests and experiences have made me a well-rounded individual and a valuable asset to any team. 
                <br/>
                I am a hardworking and dedicated individual who is passionate about what I do. I am confident that my technical skills and my ability to learn quickly, combined with my diverse interests and experiences, make me a great candidate for any software development role.
            </Typography>
        </Box>
      </Container>
    </React.Fragment>
  );
}