import React, { Component } from 'react';
import "./NewsLetter.css";
import { withAlert } from 'react-alert';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as subscribeActions from "../actionCreators/newsletter";
import { withRouter } from "react-router-dom";
class NewsLetter extends Component {
    handleChangeInput = (p) => {
        const name = p.target.name;
        const value = p.target.value;
        const subscribeData = {};
        subscribeData[name] = value;
        this.props.actions.subscribeInput(subscribeData);
    }
    handleSubscribeClick = (data) => {
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        mailformat.test(data.mail) ? 
        (data.name && (data.subscribe ? data.subscribe : data.subscribe = "off") ?
        this.props.actions.subscribe(data) : "") : ""
    }
    handleSubmit = (e) => {
        e.preventDefault();
    }
    alertBox = () => {
        setTimeout(() => {
            this.props.successMessage.status === 200 ? this.props.alert.success("Successfully Subscribed!!") : ""
            this.props.successMessage.status === 440 ? this.props.alert.error("Email Already Exists!!") : ""
        }, 300);
    }
    render() {
        return (
            <form data-toggle="validator" onSubmit={this.handleSubmit}>
                <div className="container form-group">
                    <h2>Subscribe to our Newsletter</h2>
                    <hr /><br />
                    <input type="text" className="form-control" placeholder="Name" name="name" required onChange={(p) => { this.handleChangeInput(p) }} />
                    <input type="email" className="form-control" placeholder="Email" name="mail" required onChange={(p) => { this.handleChangeInput(p) }} />
                    <label>
                        <input type="checkbox" name="subscribe" onChange={(p) => { this.handleChangeInput(p) }} /> Daily Newsletter
                    </label>
                    <button type="submit" value="Subscribe" onClick={() => { this.handleSubscribeClick(this.props.details), this.alertBox() }}>Subscribe</button>
                </div>
            </form>
        )
    }
}
function mapStateToProps(state) {
    return {
        details: state.data,
        successMessage: state.subscribeSuccessMsg
    };
}
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(subscribeActions, dispatch)
    };
}
export default withAlert(withRouter(connect(mapStateToProps, mapDispatchToProps)(NewsLetter)));

