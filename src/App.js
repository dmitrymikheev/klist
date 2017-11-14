import "./App.css";
import React, { Component } from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";

import reducers from "./reducers";
import progressMiddleware from "./middlewares/progress";

import ProgressContainer from "./containers/ProgressContainer";

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(progressMiddleware)
);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="app">
          <header className="app-header">Kinklist</header>
          <section className="app-body">
            <ProgressContainer />
          </section>
        </div>
      </Provider>
    );
  }
}

export default App;
