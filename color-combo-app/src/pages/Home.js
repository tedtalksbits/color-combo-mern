import React from 'react';
import Anime from 'react-anime';
import styled from 'styled-components'
import ColorItem from '../components/ColorItem';
import { GridContainer } from '../components/GridContainer';

export const Page = styled.main`
   
   display: grid;
   grid-template-columns: 1fr min(99ch, 100%) 1fr;
   background: ${props => props.background};
   color: ${props => props.color};
   transition: .3s all;
   width: 100%;
   padding: 1rem;

   > * input{
      color: ${props => props.color};
   }
   > * {
   grid-column: 2;
   }
   > * .full-bleed {
   width:100%;
   grid-column: 1 / 4;
   }

   @media screen and (min-width: 768px){
      height: 100%;
   }
`
export const PrimaryButton = styled.button`
   padding: 1rem 3rem;
   font-weight: bold;
   color: white;
   background: ${props => props.primary};
   border-radius: .3rem;
   border: none;
   outline: none;
   font-size: 1rem;
   cursor: pointer;
   transition: .2s all;

   &:active{
      transform: scale(1.2);
   }
   &:focus{
      background: #e52e71;
   }
`

const Home = ({ color, background, primary, container_bg }) => {
   return (
      <Page color={color}>
         <h1>Recent Colors</h1>
         <GridContainer>
            <Anime easing="easeOutElastic"
               duration={1000}
               loop={false}
               delay={(el, index) => index * 100}
               scale={[.9, 1]}>
               <ColorItem container_bg={container_bg} background="#ff5722" group_name="" hover="#ff5722" />
               <ColorItem container_bg={container_bg} background="#673ab7" group_name="" hover="#673ab7" />
               <ColorItem container_bg={container_bg} background="#e91e63" group_name="" hover="#e91e63" />
               <ColorItem container_bg={container_bg} background="#00bcd4" group_name="" hover="#00bcd4" />
            </Anime>
         </GridContainer>
         <PrimaryButton background={background} color={color} primary={primary}>A Rando Button</PrimaryButton>
      </Page>
   )
}

export default Home;
