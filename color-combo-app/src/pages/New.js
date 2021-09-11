import React from 'react'
import PostForm from '../components/PostForm'
import { Page } from './Home'

const New = ({ primary, color, background }) => {
   return (

      <Page primary={primary} color={color} >
         <h1>Add Colors</h1>
         <PostForm background={background} color={color} primary={primary} />
      </Page>
   )
}

export default New
