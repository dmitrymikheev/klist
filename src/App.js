import "./App.css";
import React, { Component } from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";

import reducers from "./reducers";

import ProgressContainer from "./containers/ProgressContainer";

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
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
