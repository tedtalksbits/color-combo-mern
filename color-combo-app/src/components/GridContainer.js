import styled from 'styled-components'


export const GridContainer = styled.div`

   margin: 2rem 0;
   display: grid;
   grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
   grid-gap: 1rem;
`