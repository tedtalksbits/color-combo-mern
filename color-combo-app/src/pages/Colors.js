import React, { useEffect, useState } from 'react'
import ColorItem from '../components/ColorItem'
import { Page } from './Home';
import Anime from 'react-anime';
import { GridContainer } from '../components/GridContainer';

import { Link } from 'react-router-dom';

const Colors = ({ primary, color, background, container_bg }) => {

   const [colors, setColors] = useState([])

   const fetchColorGroups = async () => {
      const response = await fetch("/colors", {
         method: 'GET'
      })
      const results = await response.json();

      setColors(results.sort(sortByDate));
      console.log(results.sort(sortByDate))
   }
   const sortByDate = (a, b) => {
      const itemA = a.createdAt;
      const itemB = b.crearedAt;

      let comparison = 0;

      itemA > itemB ? comparison = 1 : comparison = -1;

      return comparison * 1;
   }

   useEffect(() => {
      // setTimeout(fetchColorGroups, 3000)
      fetchColorGroups()
   }, [])

   const linkStyles = {
      color: "inherit",
      textDecoration: "none",
      appearance: "none"

   }


   return (
      <Page primary={primary} color={color} background={background}>
         {colors.map((color) => (
            <>
               <h1 key={color.groupName}>{color.groupName}</h1>
               <GridContainer key={color._id}>

                  {color.groupColors.map((col, index) => (
                     <Anime easing="easeOutElastic"
                        duration={1000}
                        loop={false}
                        delay={(el, index) => index * 100}
                        scale={[.9, 1]}>
                        {/* <Link to={`/colors/color/${color._id}`} style={linkStyles} > */}
                        <ColorItem hover={col} container_bg={container_bg} background={col} group_name={color.groupName} key={index} />
                        {/* </Link> */}
                     </Anime>
                  ))}

               </GridContainer>
            </>
         ))}

      </Page>
   )
}

export default Colors;
