import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { fetchAllPost, createPost, updatePost, updateTransacoes } from './services/postService';
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

  nome: '',
  sobrenome: '',
  telefone: '',
  email: '',
  senha: '',

  email_entrada: '',
  senha_entrada: '',
  valida: '',

  data: '',
  titulo: '',
  valor: '',
  categoria: '',
  meta: '',
  tipo: '',

  descricao: '',
  valor_alvo: '',
  valor_atual: '',

};

const initialAction = {

  currentId: 0,
  type: ACTION_TYPES.FETCH_ALL
}

let idUsuario=''

function App() {

  //array with all posts
  const [posts, setPosts] = useState([])

  //value of TextFields
  const [values, setValues] = useState(initialFieldValues)

  //validation errors
  const [errors, setErrors] = useState({})

  const [action, setAction] = useState(initialAction)

  useEffect(() => { //component created or updated?

    fetchAllPost().then(setPosts)

  }, [posts]); //dependency array, render the screen for each posts update

  useEffect(() => {

    if (action.type === ACTION_TYPES.UPDATE) {

      setValues({ ...posts.find(x => x._id === action.currentId) })
      setErrors({})
    }

    if (action.type === ACTION_TYPES.DELETE) {

    }

  }, [action]);

  const handleInputChange = e => {

    const { name, value } = e.target

    setValues({
      ...values,
      [name]: value
    })
  }

  const validate = () => {

    let temp = errors

    temp.descricao = values.descricao ? "" : "This field is required."
    temp.valor_alvo = values.valor_alvo ? "" : "This field is required."

    setErrors({ ...temp })

    //returns true if all temp values are empty
    return !(temp.descricao || temp.valor_alvo)
  }

  const validate2 = () => {

    let temp = errors

    temp.nome = values.nome ? "" : "This field is required."
    temp.sobrenome = values.sobrenome ? "" : "This field is required."
    temp.telefone = values.telefone ? "" : "This field is required."
    temp.email = values.email ? "" : "This field is required."
    temp.senha = values.senha ? "" : "This field is required."

    setErrors({ ...temp })

    //returns true if all temp values are empty
    return !(temp.nome || temp.sobrenome || temp.telefone || temp.email || temp.senha)
  }

  const validate3 = () => {

    let temp = errors

    temp.email_entrada = values.email_entrada ? "" : "Insira um valor neste campo"
    temp.senha_entrada = values.senha_entrada ? "" : "Insira um valor neste campo"


    setErrors({ ...temp })

    //returns true if all temp values are empty
    return !(temp.email_entrada || temp.senha_entrada)
  }

  const validaLogin = () => {

    let temp = errors

    {
      posts.find((post, index) => {

        if (post.email === values.email_entrada || post.senha === values.senha_entrada) {
          idUsuario = post._id
        } else {
          temp.email_entrada = "algo incorreto"
          temp.senha_entrada = "algo incorreto"
          
        }

      })
    }

    setErrors({ ...temp })

    //returns true if all temp values are empty
    return !(temp.email_entrada || temp.senha_entrada)
  }


  const validate4 = () => {

    let temp = errors

    temp.data = values.data ? "" : "This field is required."
    temp.titulo = values.titulo ? "" : "This field is required."
    temp.valor = values.valor ? "" : "This field is required."
    temp.categoria = values.categoria ? "" : "This field is required."
    temp.meta = values.meta ? "" : "This field is required."
    temp.tipo = values.tipo ? "" : "This field is required."

    setErrors({ ...temp })

    //returns true if all temp values are empty
    return !(temp.data || temp.titulo || temp.valor || temp.categoria || temp.meta || temp.tipo)

  }

  const handleSubmit = e => {

    //prevent automatic reloads 
    e.preventDefault();

    if (validate()) {

      if (action.type === ACTION_TYPES.UPDATE) {

        updatePost(action.currentId, values)
       
      } else {

        //include new post		
        createPost(values)
      }

      //clear form    
      setValues(initialFieldValues)
    }

    if (validate2()) {

      if (action.type === ACTION_TYPES.UPDATE) {


        updatePost(action.currentId, values)

      } else {

        //include new post		
        createPost(values)

      }

      //clear form    
      setValues(initialFieldValues)

    }

    if (validate3()) {

      if (validaLogin()) {
        
      }

    }

    if (validate4()) {

      if (action.type === ACTION_TYPES.UPDATE) {

        updateTransacoes(action.currentId, values)
     
      } else {

        //include new post		
        createPost(values)
      }

      //clear form    
      setValues(initialFieldValues)
      
    }
  }

  return (

    <MyContext.Provider value={{ idUsuario, posts, values, handleSubmit, handleInputChange, errors, validate, setAction, ACTION_TYPES }}>

      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/pag_informativa" element={<Pag_informativa />} />
          <Route path="/rendas" element={<Rendas />} />
          <Route path="/gastos" element={<Gastos />} />
          <Route path="/metas" element={<Metas />} />
          <Route path="/meta" element={<Meta />} />
          <Route path="/pag_inicial" element={<Pag_inicial />} />
          <Route path="/extrato" element={<Extrato />} />
          <Route path="/limite" element={<Limite />} />
          <Route path="/estastistica" element={<Estastistica />} />
        </Routes>
      </Router>
    </MyContext.Provider>
  );
}

export default App;