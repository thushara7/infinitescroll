# React Infinite Scroll

This project is created using react.
To Run:

- npm install
- npm start
- using mock server to load api (postman mock server)

## screenshot

![React Infinite Scroll](./Infinitescrool.png)

## Links

Unplash Developers : https://unsplash.com/developers <br/>
react-infinite-scroll-component : https://www.npmjs.com/package/react-infinite-scroll-component <br/>

## assumptions

Running on a mock server.
Only 3 page data supported since its a mock server.
upload, delete, add functionality for video files will be same as that of the image files.

## load images/videos faster?

1.)JPG images are generally of lower quality, but are faster to load
2.) A preloader before entering the view.
3.) load page by page.
4.) use placeholder assets during load ---> if the image/video is very huge.
