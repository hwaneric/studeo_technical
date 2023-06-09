import MuiCard from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types'

export default function Card( { title, desc, image }) {
  return (
    <MuiCard sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={ image }
        title={ title }
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         { title }
        </Typography>
        <Typography variant="body2" color="text.secondary">
          { desc }
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" target="_blank" href={image}>See full image</Button>
      </CardActions>
    </MuiCard>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
}