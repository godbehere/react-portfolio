import * as React from 'react';
import { Box, Link, Modal, Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};
  
function BasicModal(props) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  
    return (
      <div>
        <Button onClick={handleOpen}>[more]</Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h5" component="h2">
              {props.proj.title}
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              {props.proj.description}
            </Typography>
          </Box>
        </Modal>
      </div>
    );
}


export default class ProjectCard extends React.Component {

    handleDescription(description) {
        let desc = description;
        if (description.length > 150) {
            desc = desc.slice(0,150) + '...';
        }
        return desc;
    }

    render() {
        return (
            <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                sx={{ height: 140,
                    minWidth: 345
                }}
                image={this.props.proj.pic}
                title={this.props.proj.title}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {this.props.proj.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {this.handleDescription(this.props.proj.description)}
                </Typography>
                <BasicModal proj={this.props.proj}/>
                <br/>
                <Typography gutterBottom variant="h6" component="div">
                    Technologies Used
                </Typography>
                    <ul>{this.props.proj.tech}</ul>
            </CardContent>
            <CardActions>
                <Button size="small">
                    <Link target='_blank' href={this.props.proj.link}>
                        Site
                    </Link>
                </Button>
                <Button size="small">
                    <Link target='_blank' href={this.props.proj.github}>
                        GitHub
                    </Link>
                </Button>
            </CardActions>
            </Card>
        );
    }
}