import React, { useState } from 'react';
import { PrimaryButton } from '../pages/Home';
import { AddButton, DeleteButton, Form, Input } from './PostFormElements';


const PostForm = ({ background, primary, color }) => {
   const [numInputs, setNumInputs] = useState([0]);

   const remove = (arr, item) => {
      const newArr = [...arr];
      newArr.splice(newArr.findIndex(i => i === item), 1);
      return newArr;
   };

   let newIndex = 0;
   const add = (arr) => {
      newIndex++;
      return [...arr, newIndex];
   };

   const [input, setInput] = useState({
      groupName: "",
      groupColors: ["", "", "", "", ""]
   })


   const clearFields = () => {
      setInput({
         groupName: "",
         groupColors: ["", "", "", "", ""]
      })
   }
   const handleSubmit = (e) => {
      e.preventDefault();
      console.log(input);
      clearFields()
   }

   return (
      <div>
         <Form onSubmit={e => e.preventDefault()} autoComplete="off">
            <Input className="input">
               <input
                  className="input__input"
                  type="text"
                  placeholder=" "
                  onChange={(event) => setInput({ ...input, groupName: event.target.value })}
                  name="groupname"
                  value={input.groupName}
               />
               <label className="input__label" >Group Name</label>
            </Input>
            {numInputs.map((id, index) => (
               <div key={index}>
                  <Input className="input">
                     <input
                        className="input__input"
                        type="text"
                        placeholder=" "
                        value={input.groupColors[index]}
                        onChange={event => {
                           const newGroupColors = [...input.groupColors];
                           newGroupColors[index] = event.target.value;
                           setInput({ ...input, groupColors: newGroupColors })
                        }}

                     />
                     <label className="input__label">Color{index + 1}</label>
                     {numInputs.length <= 1 ? null :

                        <DeleteButton onClick={() => setNumInputs(remove(numInputs, index))}>
                           <span></span>
                        </DeleteButton>
                     }
                  </Input>
               </div>
            ))}

            <PrimaryButton background={background} color={color} primary={primary} onClick={handleSubmit}>Submit</PrimaryButton>
         </Form>

         {numInputs.length >= 5 ? null :

            <AddButton onClick={() => setNumInputs(add(numInputs))}>
               <span></span>
               <span></span>
            </AddButton>
         }
      </div>
   )
}

export default PostForm
