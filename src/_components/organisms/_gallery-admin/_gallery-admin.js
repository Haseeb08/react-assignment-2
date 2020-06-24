import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import ImageBox from "../../molecules/_image-box/_image-box";
import MyButton from "../../atoms/_button/_button";
import AddImageBox from "../../molecules/_add-image/_add-image";
import {myTheme} from "../../../theme";

const useStyles = makeStyles((theme) => ({
  main: {
    backgroundColor: myTheme.palette.background.default,
  },
  allImages: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    justifyItems: "center",
    width: "60%",
    gridRowGap: "50px",
    gridColumnGap: "10px",
    margin: "auto",
    padding: "40px 0",
  },
  addButton : {
    width: "fit-content",
    marginLeft: "auto",
    marginRight: "auto",
    paddingTop: "30px",
  },
 
  addImageBox: {
   
  },
}));

export default function GalleryAdmin({allImages, setAllImages}) {
  const classes = useStyles();
 //const [allImages, setAllImages] = useState([...imagesData.images]);
  const [addImage, setAddImage] = useState(false);
  const [imageUrl, setimageUrl] = useState("");
  const [imageTitle, setimageTitle] = useState("");

 

  const handleImageDelete = (img) => {
    console.log("Deleting image: ", img);

    var items = [...allImages];
    var pos = items.indexOf(img);
    items.splice(pos, 1);
    console.log("Items:", items);
    setAllImages(items);
  };

  const handleImageEdit = (img, newName) => {
    console.log("Editing image: ", img);

    var items = [...allImages];
    var pos = items.indexOf(img);
    items[pos].name = newName;
    console.log("Items:", items);
    setAllImages(items);
  };

  const handleImageAdd = () => {
    
    var newImage = {
      id: allImages.length +1+"",
      name: imageTitle,
      url: imageUrl,
    }
    console.log("Adding image  :",newImage);
    var items = [...allImages,newImage];
    console.log("Items:", items);
    setAllImages(items);
    setAddImage(false);
  };

  return (
    <div className={classes.main}>
     
     <div className={classes.addButton}> 
      <MyButton
        value={"Add image"}
        color="primary"
        onClick={() => {
          setAddImage(!addImage);
        }}
      />
      </div>
      {addImage && (
        <div className={classes.addImageBox}>
          <AddImageBox handleImageAdd={handleImageAdd} setimageUrl={setimageUrl} setimageTitle={setimageTitle} />
        </div>
      )}
      <div className={classes.allImages}>
        {allImages.map((img, key) => (
          <ImageBox
            key={img.id}
            img={img}
            handleImageDelete={handleImageDelete}
            handleImageEdit={handleImageEdit}
          />
        ))}
      </div>
    </div>
  );
}
