import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ImageBox from "../../molecules/_image-box/_image-box";

const useStyles = makeStyles((theme) => ({
  main: {
    width: "inherit",
  },
  allImages: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    justifyItems: "center",
    gridRowGap: "50px",
    margin: "auto",
    padding: "40px 0",
  },
  '@media (minWidth: 650px)': {

  },
}));
 
export default function Gallery(props) {
  const classes = useStyles();
  return (
    <div className={classes.main}>
      <div style={props.style} className={classes.allImages}>
        {props.allImages.map((img, key) => (
          <ImageBox key={img.id} img={img} />
        ))}
      </div>
    </div>
  );
}
