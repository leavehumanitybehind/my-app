import React from 'react';
import Header from './header'
import { connect } from "react-redux";
import { authThunk } from "../../redux/auth-reducer"

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.authThunk();
    }
    render() {
        return <Header {...this.props} />
    }
};
const mapStatetoProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
    }
}


export default connect(mapStatetoProps, { authThunk })(HeaderContainer);