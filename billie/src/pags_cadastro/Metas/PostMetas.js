import React, {useState, useEffect} from 'react';
import {fetchAllPost, createPost} from '../../services/postService';
import Metas from './index'
import Meta from '../../pages/Meta'

const initialFieldValues = {

    meta1:'',
    meta2:'',
    meta3:'',
    valor1:'',
    valor2:'',
    valor3:'',
};

const PostMetas = (props) => {

  //array with all posts
  const [posts, setPosts] = useState([])

  //value of TextFields
  const [values, setValues] = useState(initialFieldValues)

  //validation errors
  const [errors, setErrors] = useState({})
	
  useEffect(() => { //component created or updated?
        
    fetchAllPost().then(setPosts)

  },[posts]); //dependency array, render the screen for each posts update

  const handleInputChange = e => {

    const {name, value} = e.target
    
    setValues({
        ...values,
        [name]: value
    })
  }

  const validate = () => {

    let temp = errors

    temp.meta1 = values.meta1 ? "" : "This field is required."
    temp.meta2 = values.meta2 ? "" : "This field is required."
    temp.meta3 = values.meta3 ? "" : "This field is required."

    temp.valor1 = values.valor1 ? "" : "This field is required."
    temp.valor2 = values.valor2 ? "" : "This field is required."
    temp.valor3 = values.valor3 ? "" : "This field is required."

    setErrors({...temp})

    //returns true if all temp values are empty
    return !(temp.meta1 || temp.meta2 || temp.meta3 || temp.valor1 || temp.valor2 || temp.valor3)
  }

  const handleSubmit = e =>{

    //prevent automatic reloads 
    e.preventDefault();

    if(validate()){

        //include new post		
        createPost(values)
        //clear form    
      setValues(initialFieldValues)
    }
}
  
    return( 
    
      <div>
      <Metas {...{values, handleSubmit,  handleInputChange, errors, validate}}/> 
      <Meta  {...{posts}}/>
      </div>
    );
}

export default PostMetas;