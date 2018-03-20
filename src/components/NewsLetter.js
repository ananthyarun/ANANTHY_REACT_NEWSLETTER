import React, { Component } from 'react';
import "./NewsLetter.css";
import { withAlert } from 'react-alert'
class NewsLetter extends Component {
    handleSubmit = (e) => {
        e.preventDefault();
    }
   alertBox=()=>
   {
       setTimeout(() => {
        this.props.successMessage.status===200?this.props.alert.success("Successfully Subscribed!!"):""
        this.props.successMessage.status===440?this.props.alert.error("Email Already Exists!!"):""
       }, 300);
   }
    render() {
        return (
            <form data-toggle="validator" onSubmit={this.handleSubmit}>
                <div className="container form-group">
                    <h2>Subscribe to our Newsletter</h2>
                    <hr /><br />
                    <input type="text" className="form-control" placeholder="Name" name="name" required onChange={(p) => { this.props.handleChangeInput(p) }} />
                    <input type="email" className="form-control" placeholder="Email" name="mail" required onChange={(p) => { this.props.handleChangeInput(p) }} />
                    <label>
                        <input type="checkbox" name="subscribe" onChange={(p) => { this.props.handleChangeInput(p) }} /> Daily Newsletter
                    </label>
                    <button type="submit" value="Subscribe" onClick={() => { this.props.handleSubscribeClick(this.props.subscribeDetails),this.alertBox()}}>Subscribe</button>      
                </div>
            </form>
        )
    }
}
export default withAlert(NewsLetter);

