import styled from 'styled-components';


export const Form = styled.form`
   max-width: 768px;
   margin: auto;
`
export const Input = styled.div`

   padding: 18px 12px 8px;
   border: 1px ${props => props.color} solid;
   position: relative;
   border-radius: .3rem;
   margin-bottom: 2rem;
   transition: all ease-in-out .3s;
   animation: fadeIn .3s linear;

   @keyframes fadeIn {
      0% {
         opacity: 0;
         bottom: 0;
         transform: scale(1);
      }
      39% {
         opacity: 1;
         bottom: -12px;
         transform: scale(1.01);
      }
      100%{
         opacity: 1;
         bottom: 0;
         transform: scale(1);
      }
   } 
   
   .input__input{
      background: transparent;
      width: 100%;
      border: none;
      outline: none;
      outline-width: 0;
      font-size: 1.25rem;
      position: relative;
      z-index: 3;
      /* color is inherited from Page */

   }

   .input__label{
      font-size: 1rem;
      position: absolute;
      left: 1rem;
      bottom: .3rem;
      transition: .3s;
      z-index: 2;
   }

   .input__input:focus + .input__label, .input__input:not(:placeholder-shown) + .input__label{
      color: darkgray;
      font-size: 10px;
      transform: translateY(-30px);
   }

`
export const DeleteButton = styled.div`
   margin: 0;
   padding: 0;
   position: absolute;
   top: -11px;
   right: 4px;
   width: 24px;
   height: 24px;
   border-radius: 50%;
   background: #fd2964;
   cursor: pointer;
   display: flex;
   justify-content: center;
   align-items: center;

   &:active{
      transform: scale(1.2);
   }
   &:focus{
      background: #e52e71;
   }
   & > span{
      height: 12px;
      width: 3px;
      background: white;
      position: absolute;
      transform: rotate(90deg);
   }

`

export const AddButton = styled.div`
   margin: 0;
   padding: 0;
   width: 60px;
   height: 60px;
   border-radius: 50%;
   text-align: center;
   display: flex;
   align-items: center;
   justify-content: center;
   font-size: 2rem;
   background: white;
   cursor: pointer;
   box-shadow: rgba(0, 0, 0, 0.1) 2px 2px 2px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px -1px;

   &:active{
      transform: scale(1.2);
   }
   &:focus{
      background: #e52e71;
   }
   & :nth-child(1){
      height: 12px;
      width: 3px;
      background: #212121;
      position: absolute;
      transform: rotate(90deg);
   }
   & :nth-child(2){
      height: 12px;
      width: 3px;
      background: #212121;
      position: absolute;
   }

`