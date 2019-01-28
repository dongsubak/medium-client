import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

export default function (Components) {
  class Authenticate extends Component {
    componentWillMount() {
      if (!this.props.isAuth) {
        this.context.router.history.push('/')
      }
    }
    render() {
      return (
        <Components {...this.props} />
      )
    }
  }
  //Authenticate.contextTypes
  Authenticate.contextType = {
    router: PropTypes.object.isRequired
  }
  const mapStateToProps = (state) => {
    return {
      isAuth: state.authUser.isAuth
    }
  }

  return connect(mapStateToProps)(Authenticate)
}