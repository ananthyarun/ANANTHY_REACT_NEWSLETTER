import React, { Component } from 'react';
import NewsLetter from "./components/NewsLetter";
import { Route, Switch } from "react-router-dom";
import { Provider as AlertProvider} from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';
class App extends Component {
  render() {
    const options = {
      position: 'bottom center',
      timeout: 4000,
      transition: 'fade',
    }
    return (
      <div className="App">
        <Switch>
          <AlertProvider template={AlertTemplate} {...options}><Route exact path="/" render={props => <NewsLetter {...props}
           />
          } />
          </AlertProvider>
        </Switch>
      </div>
    );
  }
}
export default App;

