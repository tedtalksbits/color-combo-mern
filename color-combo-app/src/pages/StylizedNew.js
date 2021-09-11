import React from 'react';
import AnimatedForm from '../components/AnimatedForm';
import { Page } from './Home';

const StylizedNew = ({ color, primary, background }) => {
   return (
      <Page color={color} primary={primary} >
         <h1>Click to add more fields</h1>
         <AnimatedForm color={color} background={background} primary={primary} />
      </Page>
   )
}

export default StylizedNew
