import React, { useState, useEffect } from "react";
import { Heading } from "./components/Heading";
import { UnsplashImage } from "./components/UnsplashImage";
import { Loader } from "./components/Loader";
import { Video } from "./components/video";
import { AddMediaForm } from "./components/AddMediaForm";

import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";

import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

// Style
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: sans-serif;
  }
`;

const WrapperImages = styled.section`
  max-width: 70rem;
  margin: 4rem auto;
  display: grid;
  grid-row-gap: 5rem;
  grid-column-gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  grid-auto-rows: 300px;
`;

function App() {
  const [images, setImage] = useState([]);
  const [page, setPage] = useState(1);

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

  return (
    <div>
      <Heading />
      <GlobalStyle />

      <AddMediaForm />

      <InfiniteScroll
        dataLength={images.length}
        next={fetchImages}
        hasMore={true}
        loader={<Loader />}
      >
        <WrapperImages>
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
        </WrapperImages>
      </InfiniteScroll>
    </div>
  );
}

export default App;
