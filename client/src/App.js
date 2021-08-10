import "./App.css";
import React, { Component } from "react";
import NavBar from "./components/navbar";
import ShoppingList from "./components/ShoppingList";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import store from "./store";
import ItemModel from "./components/ItemModel";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <NavBar></NavBar>
          <ItemModel></ItemModel>
          <ShoppingList></ShoppingList>
        </Provider>
      </div>
    );
  }
}
export default App;

// npm i bootstrap reactstrap uuid react-transition-group
