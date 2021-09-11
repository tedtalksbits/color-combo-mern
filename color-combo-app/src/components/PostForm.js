import React, { useState } from 'react';
import { PrimaryButton } from '../pages/Home';
import { Form, Input } from './PostFormElements';
import axios from 'axios'


const PostForm = ({ background, primary, color }) => {

   const [groupName, setGroupName] = useState("")
   const [col1, setCol1] = useState("")
   const [col2, setCol2] = useState("")
   const [col3, setCol3] = useState("")
   const [col4, setCol4] = useState("")
   const [col5, setCol5] = useState("")

   const clearFields = () => {
      setGroupName("")
      setCol1("");
      setCol2("");
      setCol3("");
      setCol4("");
      setCol5("");
   }

   const handleSave = (e) => {
      if (groupName === "" || col1 === "" || col2 === "" || col3 === "" || col4 === "" || col5 === "") {
         alert("fields can't be empty");
         return
      }
      const input = {
         groupName: groupName,
         groupColors: [col1, col2, col3, col4, col5]
      }
      // console.log(input);

      axios.post('http://localhost:5000/new', input);
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
                  onChange={(event) => setGroupName(event.target.value)}
                  name="groupname"
                  value={groupName}
               />
               <label className="input__label" >Group Name</label>
            </Input>

            <Input className="input">
               <input
                  className="input__input"
                  type="text"
                  placeholder=" "
                  onChange={(event) => setCol1(event.target.value)}
                  name="col1"
                  value={col1}
               />
               <label className="input__label" >Color #1</label>
            </Input>

            <Input className="input">
               <input
                  className="input__input"
                  type="text"
                  placeholder=" "
                  onChange={(event) => setCol2(event.target.value)}
                  name="col2"
                  value={col2}
               />
               <label className="input__label" >Color #2</label>
            </Input>

            <Input className="input">
               <input
                  className="input__input"
                  type="text"
                  placeholder=" "
                  onChange={(event) => setCol3(event.target.value)}
                  name="col3"
                  value={col3}
               />
               <label className="input__label" >Color #3</label>
            </Input>

            <Input className="input">
               <input
                  className="input__input"
                  type="text"
                  placeholder=" "
                  onChange={(event) => setCol4(event.target.value)}
                  name="col4"
                  value={col4}
               />
               <label className="input__label" >Color #4</label>
            </Input>
            <Input className="input">
               <input
                  className="input__input"
                  type="text"
                  placeholder=" "
                  onChange={(event) => setCol5(event.target.value)}
                  name="col5"
                  value={col5}
               />
               <label className="input__label" >Color #5</label>
            </Input>


            <PrimaryButton background={background} color={color} primary={primary} onClick={handleSave} type="submit">Save</PrimaryButton>

         </Form>
      </div>
   )
}

export default PostForm
