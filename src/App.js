// App.js
import React from "react";
import Routing from "./routes/Routing";
import './assets/css/custom.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ScrollToTop from "./modules/scrollToTop/ScrollToTop";
import { Provider } from 'react-redux';
import { store } from './config/store';
import Loading from "./components/loading/Loading";

const App = () => {
  return (
    <Provider store={store}>
      <Routing />
      <ScrollToTop />
      <Loading />
    </Provider>
  );
};

export default App;
