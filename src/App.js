import React, { useState, useEffect } from "react";
import Masonry from "react-masonry-css";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";

// components
import { Heading } from "./components/Heading";
import { UnsplashImage } from "./components/UnsplashImage";
import { Loader } from "./components/Loader";
import { Video } from "./components/video";
import { AddMediaForm } from "./components/AddMediaForm";

// stylesheets
// import styled from "styled-components";
// import { createGlobalStyle } from "styled-components";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  container: {
    backgroundColor: "black",
    margin: "-1%"
  },
  scroll_container: {
    margin: "0",
    padding: "0",
    boxSizing: "border-box",
    fontFamily: "sans-serif"
  },
  img: {
    width: "100%",
    height: "100%",
    objectFit: "cover"
  },
  name: {
    fontSize: "14px",
    color: "dimgrey",
    lineHeight: "22px"
  },
  date: {
    fontWeight: "normal",
    fontSize: "12px",
    color: "lightgrey"
  },
  masonryGrid: {
    display: "-webkit-box" /* Not needed if autoprefixing */,
    display: "-ms-flexbox" /* Not needed if autoprefixing */,
    display: "flex",
    marginLeft: "-30px" /* gutter size offset */,
    width: "auto"
  },
  masonryGrid_column: {
    paddingLeft: "30px",
    backgroundClip: "padding-box"
  }
}));

// Style
// const GlobalStyle = createGlobalStyle`
//   * {
//     margin: 0;
//     padding: 0;
//     box-sizing: border-box;
//   }

//   body {
//     font-family: sans-serif;
//   }
// `;

// const WrapperImages = styled.section`
//   max-width: 70rem;
//   margin: 4rem auto;
//   display: grid;
//   grid-row-gap: 5rem;
//   grid-column-gap: 1rem;
//   grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
//   grid-auto-rows: 300px;
// `;

function App() {
  const classes = useStyles();
  const [images, setImage] = useState([]);
  const [page, setPage] = useState(1);
  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1
  };

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = (count = 10) => {
    // currently hardcoding page value. more optimised way would be to derive the dynamic image count based on the current screen size.
    const pageCount = page < 3 ? page + 1 : 1;
    console.log(pageCount);
    setPage(pageCount);
    // const apiRoot = "https://api.unsplash.com";
    const apiRoot =
      "https://38725317-d72a-45f3-9642-8371f0408604.mock.pstmn.io";

    const accessKey = process.env.REACT_APP_ACCESSKEY;

    axios
      // .get(`${apiRoot}/photos/random?client_id=${accessKey}&count=${count}`)
      //
      .get(`${apiRoot}/photos?page=${page}`)

      .then(res => {
        console.log(res.data);
        setImage([...images, ...res.data]);
      });
  };

  const handleUpdate = item => {
    let temp = [];
    images.forEach((el, num) => {
      if (el.id === item.id) {
        temp.push(item);
      } else {
        temp.push(el);
      }
    });
    setImage(temp);
  };
  const handleDelete = item => {
    let temp = images.filter(el => el.id !== item.id);
    console.log(temp);
    setImage(temp);
  };
  const handleAdd = item => {
    const temp = [...images];
    temp.push(item);
    console.log(temp);
    setImage(temp);
  };

  return (
    <div className={classes.container}>
      <Heading />
      <div className={classes.scroll_container}>
        <AddMediaForm onAdd={el => handleAdd(el)} />

        <InfiniteScroll
          dataLength={images.length}
          next={fetchImages}
          hasMore={true}
          loader={<Loader />}
          style={{ margin: "2em" }}
        >
          {
            <Masonry
              breakpointCols={breakpointColumnsObj}
              className={classes.masonryGrid}
              columnClassName={classes.masonryGrid_column}
            >
              {images.map(image => (
                <div>
                  {image.mediaType === "video" ? (
                    <Video url={image.url} {...image} />
                  ) : (
                    <UnsplashImage
                      url={image.urls.thumb}
                      name={image.alt_description}
                      key={image.id}
                      {...image}
                      handleUpdate={item => handleUpdate(item)}
                      handleDelete={item => handleDelete(item)}
                    />
                  )}
                </div>
              ))}
            </Masonry>
          }
          {/* <WrapperImages>
          {images.map(image => (
            <div>
              {image.id === "video" ? (
                <Video url={image.url} {...image} />
              ) : (
                <UnsplashImage
                  url={image.urls.thumb}
                  name={image.alt_description}
                  key={image.id}
                  {...image}
                />
              )}
            </div>
          ))}
        </WrapperImages> */}
        </InfiniteScroll>
      </div>
    </div>
  );
}

export default App;
