import React, { useState } from 'react'
import styled from 'styled-components';

const ColorBox = styled.div`
   /* height: ${({ tallColor }) => tallColor ? '7.5rem' : '4.5rem'}; */
   height: ${({ small }) => small ? '5rem' : '8rem'};
   width: 100%;
   cursor: pointer;
   border-bottom: 1px #b4b4b41c solid;
   background-color: ${props => props.background || '#fff'};
`
const ColorContainer = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   border-radius: .5rem;
   overflow: hidden;
   /* background: #222732; */
   background-color: ${props => props.container_bg};
   box-shadow: 0px 2px 5px 1px rgba(255, 255, 255, 0.11) inset, 0px -14px 10px 0px #f021d415 inset, 0px 2px 4px -1px rgba(251, 180, 175, 0.2) inset;
   gap: .5rem;
   box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.13);
   border: 1px #f0f8ff07 solid;
   transition: .3s;

   :hover{
      box-shadow: ${props => props.hover} 0px 5px 15px 0px;
   }

`
const ColorText = styled.p`
   font-size: .9rem;
   font-weight: 600;
   text-transform: uppercase;
   user-select: all;
   margin: 0;
   cursor: pointer;
   color: ${props => props.color};

   :hover{
      background: linear-gradient(90deg,#ff8a00,#e52e71);
      text-shadow: none;
      -webkit-text-fill-color: transparent;
      -webkit-background-clip: text;
      background-clip: text;
}
`
const GroupName = styled.p`
   font-size: .7rem;
   color: #6a6d6fc7;
   text-transform: capitalize;
   margin-bottom: .3rem;
`
const CopiedText = styled.small`
   display: ${({ copied }) => copied ? 'block' : 'none'};
   position: absolute;
   font-weight: 700;
   background: #151925;
   padding: 3px;
   border-radius: .3rem;
   color: white;
`

const ColorItem = ({ background, group_name, container_bg, hover }) => {

   const [copy, setCopy] = useState(false)
   const handleCopy = (el) => {

      document.execCommand("copy")
      setCopy(!copy)

      setTimeout(function () {
         setCopy(false)
      }, 800);
   }
   return (
      <ColorContainer className="color-group" container_bg={container_bg} hover={hover}  >
         <ColorBox background={background} className="elcolor" />
         <ColorText onClick={handleCopy} className="color__val gradient-text">
            {background}
         </ColorText>
         <CopiedText className="copy-text" copied={copy}>
            copied!
         </CopiedText>
         <GroupName className="groupname">
            {group_name}
         </GroupName>
      </ColorContainer>
   )
}

export default ColorItem
