import React from "react";
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
} from "./NavbarElements";

const Navbar =()=>{
    return(
        <>
            <Nav>
            <Bars/>  
            <NavMenu>
                <NavLink to='/about' activeStyle>
                    About
                </NavLink>
                <NavLink to="/events" activestyle>
                    Events
                </NavLink>
                <NavLink to="/annual" activeStyle>
                    Annual Report    
                </NavLink>    
                <NavLink to="/team" activeStyle>
                    Teams
                </NavLink>
                <NavLink to="/blogs" activeStyle>
                    Blogs
                </NavLink>
                <NavLink to="signup" activeStyle>
                    Sign Up
                </NavLink>

            </NavMenu>
            <NavBtn>
                <NavBtnLink to='/signin'>Sign In</NavBtnLink>
            </NavBtn>
                
            </Nav>       
        </>
);
};

export default Navbar