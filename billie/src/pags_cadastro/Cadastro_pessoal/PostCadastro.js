import React, {useState, useEffect} from 'react';
import {fetchAllPost, createPost} from '../../services/postService';
import Cadastro from './index'

const initialFieldValues = {

  nome:'',
  sobrenome:'',
  email: '',
  telefone:'',
  senha:'',
};

const PostCadastro = (props) => {

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

    temp.nome = values.nome ? "" : "This field is required."
    temp.sobrenome = values.sobrenome ? "" : "This field is required."
    temp.email = values.email ? "" : "This field is required."
    temp.telefone = values.telefone ? "" : "This field is required."
    temp.senha = values.senha ? "" : "This field is required."

    setErrors({...temp})

    //returns true if all temp values are empty
    return !(temp.nome || temp.sobrenome || temp.email || temp.telefone || temp.senha )
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
    
        <Cadastro {...{values, handleSubmit,  handleInputChange, errors, validate}}/>     
    );
}

export default PostCadastro;