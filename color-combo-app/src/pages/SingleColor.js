import React, { useEffect, useState } from 'react';

const SingleColor = ({ match }) => {
   console.log(match);
   const id = match.params.id;
   // const [color, setColor] = useState([])

   // const fetchColorGroup = async () => {
   //    const response = await fetch("/colors", {
   //       method: 'GET'
   //    })
   //    const results = await response.json();

   //    setColors(results);
   //    console.log(results)
   // }

   // useEffect(() => {
   //    // setTimeout(fetchColorGroups, 3000)
   //    fetchColorGroups()
   // }, [])
   return (
      <div>
         <h1>color</h1>
      </div>
   )
}

export default SingleColor
