import React from 'react';
import Header from './header'
import { connect } from "react-redux";
import { authAPI } from '../../api/api';
import { setUserData } from '../../redux/auth-reducer';

class HeaderContainer extends React.Component {
    componentDidMount() {
        authAPI.getMe().
            then(data => {
                if (data.resultCode === 0) {
                    let { id, email, login } = data.data
                    this.props.setUserData(id, email, login);
                }
            });
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


export default connect(mapStatetoProps, { setUserData })(HeaderContainer);