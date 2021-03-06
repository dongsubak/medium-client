import React, { Component } from 'react';
import { connect } from 'react-redux'
import GoogleLogin from 'react-google-login'
import { 
    SignInUser,
    toggleClose,
    toggleOpen
 } from './../redux/actions/actions'

class SignInWith extends Component {

    render() {
    const clientId = '103020549439-77a5etpjv17obou3of3vb28tji5qb1eh.apps.googleusercontent.com'
    const responseGoogle = (res) => {
        let postData = {
            name: res.profileObj.name, //name: res.w3.ig,
            provider: 'google',
            email: res.profileObj.email, //email: res.w3.U3,
            provider_id: res.googleId,//provider_id: res.El,
            token: res.accessToken,//token: res.Zi.access_token,
            provider_pic: res.profileObj.imageUrl,//provider_pic: res.w3.Paa
        }
        console.log(postData)
        // build our user data
        this.props.SignInUser(postData)
        this.props.toggleClose()
    }

        return ( 
            <div>
                <div data-behavior="overlay" className={this.props.modalMode === true ? 'overlay overlay-hugeinc open' : 'overlay overlay-hugeinc'}>
        <button onClick={this.props.toggleClose} data-behavior="close-overlay" type="button" className="overlay-close"><span className="glyphicon glyphicon-remove"></span></button>
        <nav>
            <h2 className="grayed-heading center">Sign In</h2>
            <ul className="omniauth-button-group">

                <li className="omniauth-button google">
                    <GoogleLogin className="button google"
                    clientId={clientId}
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle} >
                        <i className="fa fa-google"></i><span> SignIn with Google</span>
                    </GoogleLogin>
                </li>

            </ul>
        </nav>
    </div>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        modalMode: state.common.modalMode
    }
}

export default connect(mapStateToProps, {
    toggleClose,
    toggleOpen,
    SignInUser
})(SignInWith);
