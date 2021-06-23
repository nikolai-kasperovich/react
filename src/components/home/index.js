import React from "react";
import { Link } from "react-router-dom";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import YouTube from "react-youtube";
import Rating from '@material-ui/lab/Rating';
import MenuAppBar from '../navbar/index'


const ImgMediaCarg = ({ content, opts, onReady }) => {

    return(
    <div>
      <div>
        <MenuAppBar />
      </div>
    <div className="flexMid" >
    <Card>
      <CardActionArea>
        <img  src={content.film.posterImage} alt="poster"/>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {content.film.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {content.film.additional}
          </Typography>
          <YouTube
            videoId={content.film.youtubeId}
            opts={opts}
            onReady={onReady}
          />
          ;
        </CardContent>
        <Rating name="hover-feedback" value={content.film.rating} />
      </CardActionArea>
    </Card>

</div>
     
<div  className="flexMid">
      <Link className="linkOne" to="/counter">
        Go to counter
      </Link>    
</div>
        
    </div>
    )
}


export default ImgMediaCarg



