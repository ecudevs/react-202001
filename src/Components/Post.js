import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";

export default function Post({
  fotoUsuario,
  fotoPost,
  nombreUsuario,
  pieDeFoto,
  liked,
  onLike
}) {
  return (
    <Card>
      <CardHeader
        avatar={
          fotoUsuario ? (
            <Avatar aria-label="recipe" src={fotoUsuario}></Avatar>
          ) : (
            <Avatar aria-label="recipe">{nombreUsuario[0]}</Avatar>
          )
        }
        // action={
        //   <IconButton aria-label="settings">
        //     <MoreVertIcon />
        //   </IconButton>
        // }
        title={nombreUsuario}
        // subheader="September 14, 2016"
      />
      <CardMedia style={{ height: "200px" }} image={fotoPost} />
      <CardContent>
        <p>{pieDeFoto}</p>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites" onClick={onLike}>
          {liked ? <FavoriteIcon style={{ color: "red" }} /> : <FavoriteIcon />}
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton
          //   onClick={handleExpandClick}
          //   aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
