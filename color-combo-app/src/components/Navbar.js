import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Navigation = styled.nav`
   background: ${props => props.background || 'black'};
   transition: .3s all;
`
const ToggleContainer = styled.div`
   display: inline-block;
`
const ToggleGroove = styled.div`
    width: 44px;
   height: 22px;
   background: ${props => props.primary};
   border-radius: 999px;
   margin: 0;
   padding: 0;
   display: inline-block;
   position: relative;
`
const Toggle = styled.div`
   height: 27px;
   width: 27px;
   /* background: ${props => props.color || 'white'}; */
   background: white;
   border-radius: 50%;
   margin: 0;
   padding: 0;
   left: -1px;
   bottom: -3px;
   position: absolute;
   box-shadow: rgba(0, 0, 0, 0.1) 2px 2px 2px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px -1px;
   transition: all ease-in-out .3s;
   cursor: pointer;
   
   &.toggled{
      left: 18px;
      
   }
`
const NavContainer = styled.div`
   max-width: 1200px;
   margin: auto;
   display: flex;
   align-items: center;
   justify-content: space-between;
   padding: 1rem;
`
const LinksContainer = styled.div`
   white-space: nowrap;
   & > *{
      margin-right: 1rem;
   }
`
const NavLink = styled(Link)`
   color: ${props => props.color};
`

const Navbar = ({ color, primary, handleTheme, nav_background }) => {
   const toggled = () => {
      const toggle = document.getElementById("toggle");
      toggle.classList.toggle('toggled');
   }
   return (
      <Navigation color={color} background={nav_background} primary={primary}>
         <NavContainer>
            <LinksContainer>
               <NavLink to="/" color={color}>Home</NavLink>
               <NavLink color={color} to="/colors">Colors</NavLink>
               <NavLink color={color} to="/new">Normal Form</NavLink>
               <NavLink color={color} to="/stylized">Stylized Form</NavLink>
            </LinksContainer>

            <ToggleContainer>
               <ToggleGroove primary={primary}>
                  <Toggle className="new jongn" id="toggle" onClick={
                     () => {
                        handleTheme();
                        toggled()
                     }
                  }
                  />
               </ToggleGroove>
            </ToggleContainer>
         </NavContainer>
      </Navigation>
   )
}

export default Navbar
