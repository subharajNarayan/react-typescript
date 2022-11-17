import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";

import store from "./store";
import App from "./App";
// import SimpleReactLightbox from "simple-react-lightbox"

ReactDOM.render(
  <React.Fragment>
    {/* <SimpleReactLightbox> */}
      <Provider store={store}>
        <HashRouter>
          <App />
        </HashRouter>
      </Provider>
    {/* </SimpleReactLightbox> */}
  </React.Fragment>,
  document.getElementById("root")
);
