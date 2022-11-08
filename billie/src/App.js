import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {fetchAllPost, createPost, updatePost} from './services/postService';
import { Link } from 'react-router-dom';

import Login from './Login'
import Rendas from './pags_cadastro/Rendas'
import Gastos from './pags_cadastro/Gastos'
import Metas from './pags_cadastro/Metas'
import Pag_informativa from './pags_cadastro/Pag_informativa'
import Cadastro from './pags_cadastro/Cadastro_pessoal'
import Pag_inicial from './pages/Pag_inicial'
import Meta from './pages/Meta'
import Extrato from './pages/Extrato'
import Limite from './pages/Limite'
import Estastistica from './pages/Estastistica'

import MyContext from './contexts/MyContext'

const ACTION_TYPES = {

  FETCH_ALL: 'FETCH_ALL',
  CREATE: 'CREATE',
  UPDATE: 'UPDATE',
  DELETE: 'DELETE',
}

const initialFieldValues = {

  nome:'',
  sobrenome:'',
  telefone:'',
  email:'',
  senha:'',
  
  meta1:'',
  meta2:'',
  meta3:'',
  valor1:'',
  valor2:'',
  valor3:'',

  metaNova:'',
  valorNovo:'',

  nomeNovoGanho: '',
  valorNovoGanho: '',
  categoriaNovoGanho: '',
  dataNovoGanho: '',
  metaNovoGanho: '',

  nomeNovoGasto: '',
  valorNovoGasto: '',
  categoriaNovoGasto: '',
  dataNovoGasto: '',
  metaNovoGasto: '',

  alimentacao: '',
  transporte: '',

  gastos: [],

};

const initialAction = {

  currentId: 0,
  type: ACTION_TYPES.FETCH_ALL
}


function App (){

  //array with all posts
  const [posts, setPosts] = useState([])

  //value of TextFields
  const [values, setValues] = useState(initialFieldValues)

  //validation errors
  const [errors, setErrors] = useState({})

  const [action, setAction] = useState(initialAction)
	
  useEffect(() => { //component created or updated?
        
    fetchAllPost().then(setPosts)

  },[posts]); //dependency array, render the screen for each posts update

  useEffect(() => {

    if (action.type === ACTION_TYPES.UPDATE){

     setValues({...posts.find(x => x._id === action.currentId)})
     setErrors({})
    }

    if (action.type === ACTION_TYPES.DELETE){

    }

  },[action]);

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
    return !(temp.meta1 || temp.meta2 || temp.meta3 || temp.valor1 || temp.valor2 || temp.valor3 )
  }

  const validate2 = () => {

    let temp = errors

    temp.nome = values.nome ? "" : "This field is required."
    temp.sobrenome = values.sobrenome ? "" : "This field is required."
    temp.telefone = values.telefone ? "" : "This field is required."
    temp.email = values.email ? "" : "This field is required."
    temp.senha = values.senha ? "" : "This field is required."

    setErrors({...temp})

    //returns true if all temp values are empty
    return !(temp.nome || temp.sobrenome || temp.telefone || temp.email || temp.senha )
  }

  const validate3 = () => {

    let temp = errors

    temp.metaNova = values.metaNova ? "" : "This field is required."
    temp.valorNovo = values.valorNovo ? "" : "This field is required."

    setErrors({...temp})

    //returns true if all temp values are empty
    return !(temp.metaNova || temp.valorNovo)
  }

  const validate4 = () => {

    let temp = errors

    temp.nomeNovoGanho = values.nomeNovoGanho ? "" : "This field is required."
    temp.valorNovoGanho = values.valorNovoGanho ? "" : "This field is required."
    temp.categoriaNovoGanho = values.categoriaNovoGanho ? "" : "This field is required."
    temp.dataNovoGanho = values.dataNovoGanho ? "" : "This field is required."
    temp.metaNovoGanho = values.metaNovoGanho ? "" : "This field is required."

    setErrors({...temp})

    //returns true if all temp values are empty
    return !(temp.nomeNovoGanho || temp.valorNovoGanho || temp.categoriaNovoGanho || temp.dataNovoGanho || temp.metaNovoGanho)
  }

  const validate5 = () => {

    let temp = errors

    temp.nomeNovoGasto = values.nomeNovoGasto ? "" : "This field is required."
    temp.valorNovoGasto = values.valorNovoGasto ? "" : "This field is required."
    temp.categoriaNovoGasto = values.categoriaNovoGasto ? "" : "This field is required."
    temp.dataNovoGasto = values.dataNovoGasto ? "" : "This field is required."
    temp.metaNovoGasto = values.metaNovoGasto ? "" : "This field is required."

    setErrors({...temp})

    //returns true if all temp values are empty
    return !(temp.nomeNovoGasto || temp.valorNovoGasto || temp.categoriaNovoGasto || temp.dataNovoGasto || temp.metaNovoGasto)
  }

   const handleSubmit = e =>{

    //prevent automatic reloads 
    e.preventDefault();

    if(validate()){

      if (action.type === ACTION_TYPES.UPDATE){

        updatePost(action.currentId, values)
      }else{

        //include new post		
        createPost(values)
      }
            
      //clear form    
      setValues(initialFieldValues)
    }

    if(validate2()){

      if (action.type === ACTION_TYPES.UPDATE){

        <Pag_informativa/>
        updatePost(action.currentId, values)

      }else{

        <Pag_informativa/>
        //include new post		
        createPost(values)
       
      }
      
      //clear form    
      setValues(initialFieldValues)
     
    }else{

     
    }

    if(validate3()){

      if (action.type === ACTION_TYPES.UPDATE){

        updatePost(action.currentId, values)
        
      }else{

        //include new post		
        createPost(values)
      }
            
      //clear form    
      setValues(initialFieldValues)
    }

    if(validate4()){

      if (action.type === ACTION_TYPES.UPDATE){

        updatePost(action.currentId, values)
        
      }else{

        //include new post		
        createPost(values)
      }
            
      //clear form    
      setValues(initialFieldValues)
    }

    if(validate5()){

      if (action.type === ACTION_TYPES.UPDATE){

        updatePost(action.currentId, values)
        
      }else{

        //include new post		
        createPost(values)
      }
            
      //clear form    
      setValues(initialFieldValues)
    }
  }

  return (

    <MyContext.Provider value={{posts, values, handleSubmit,  handleInputChange, errors, validate, setAction, ACTION_TYPES}}>

    <Router>
      <Routes>
        <Route path="/" element ={<Login/>}/>
        <Route path="/cadastro" element ={<Cadastro/>}/>
        <Route path="/pag_informativa" element ={<Pag_informativa/>}/>
        <Route path="/rendas" element ={<Rendas/>}/>
        <Route path="/gastos" element ={<Gastos/>}/>
        <Route path="/metas" element ={<Metas/>}/>
        <Route path="/meta" element ={<Meta/>}/>
        <Route path="/pag_inicial" element ={<Pag_inicial/>}/>
        <Route path="/extrato" element ={<Extrato/>}/>
        <Route path="/limite" element ={<Limite/>}/>
        <Route path="/estastistica" element ={<Estastistica/>}/>
      </Routes>
    </Router>
    </MyContext.Provider>
  );
}

export default App;