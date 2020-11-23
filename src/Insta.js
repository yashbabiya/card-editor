import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import ChatBubbleOutlineOutlinedIcon from "@material-ui/icons/ChatBubbleOutlineOutlined";
import TurnedInNotOutlinedIcon from "@material-ui/icons/TurnedInNotOutlined";
import TurnedInOutlinedIcon from "@material-ui/icons/TurnedInOutlined";
import PersonOutlinedIcon from "@material-ui/icons/PersonOutlined";
import FavoriteIcon from "@material-ui/icons/Favorite";
import "./styles.css";
const useStyles = makeStyles({
  root: {
    maxWidth: 345
  }
});

export default function ImgMediaCard(props) {
  let [j, setj] = useState(<FavoriteBorderIcon />);
  let [l, setl] = useState(0);

  let [sa, setsa] = useState(<TurnedInNotOutlinedIcon />);
  const classes = useStyles();
  const dark = {
    backgroundColor: "black",
    color: "white",
    marginBottom: "0px",
    marginTop: "0px",
    width: "100%",
    paddingTop: "0px",
    boxShadow: "2px 2px 5px 2px grey",
    transition: "1.5s"
  };
  const light = {
    marginBottom: "0px",
    marginTop: "0px",
    width: "100%",
    paddingTop: "0px",
    boxShadow: "2px 2px 5px 2px grey",
    transition: "1.5s"
  };
  let m = [light, dark];
  function liked() {
    if (!l) {
      setj(<FavoriteIcon style={{ color: "rgb(235, 109, 109)" }} />);
      setl(1);
    } else {
      setj(<FavoriteBorderIcon />);
      setl(0);
    }
  }
  function saved() {
    setsa(<TurnedInOutlinedIcon />);
  }
  return (
    <div className="insta">
      <Card className={classes.root} style={m[props.thm]}>
        <Typography gutterBottom variant="h5" component="h2">
          <div className="top">
            <div className="centertop">
              <span>{props.name}</span>
            </div>
          </div>
        </Typography>

        <CardMedia
          component="img"
          alt="Add image url"
          height="250"
          image={props.url}
          title="Contemplative Reptile"
        />
        <Typography>
          <Typography gutterBottom variant="h5" component="h2">
            <div className="btm">
              <div className="leftbt">
                <span id="like" onClick={liked}>
                  {j}
                </span>

                <span>
                  <ChatBubbleOutlineOutlinedIcon />
                </span>
                <span>
                  <PersonOutlinedIcon />
                </span>
              </div>

              <div className="rightbt" onClick={saved}>
                {sa}
              </div>
            </div>
          </Typography>
          <Typography>
            <div className="type">
              <b>3.7M likes</b>
              <br />

              {props.des}
            </div>
            <br />
          </Typography>
        </Typography>
      </Card>
    </div>
  );
}
