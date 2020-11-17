import React from 'react';
import { connect } from "react-redux";
import Nav from './nav';


    const mapStatetoProps = (state) => {
        return {
            menus: state.sideBar.menus
        };
    }

    const NavContainer = connect(mapStatetoProps) (Nav);


export default NavContainer;