import React, { Component } from 'react';
import NewsLetter from "./components/NewsLetter";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { withRouter } from "react-router-dom";
import * as subscribeActions from "./actionCreators/newsletter"
import { Provider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'
class App extends Component {
  handleInputChange = (p) => {
    const name = p.target.name;
    const value = p.target.value;
    const subscribeData = {};
    subscribeData[name] = value;
    this.props.actions.subscribeInput(subscribeData);
  }
  handleSubscribe = (data) => {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    mailformat.test(data.mail)?(data.name && (data.subscribe ? data.subscribe : data.subscribe = "off") ? 
    this.props.actions.subscribe(data) : ""):""
 }
  render() {
    const options = {
      position: 'bottom center',
      timeout: 4000,
      transition: 'fade',
      }
    return (
      <div className="App">
        <Switch>
          <Provider template={AlertTemplate} {...options}><Route exact path="/" render={props => <NewsLetter {...props}
            handleChangeInput={this.handleInputChange}
            handleSubscribeClick={this.handleSubscribe}
            subscribeDetails={this.props.details}
            successMessage={this.props.subscribe_Success}
          />
          } /></Provider>
        </Switch>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    details: state.data,
    subscribe_Success: state.subscribeSuccessMsg
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(subscribeActions, dispatch)
  };
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));

