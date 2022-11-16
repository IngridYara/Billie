//HTTP request handler
import axios from "axios";

//database url
const url =  'http://localhost:4000/postMessages/'

export async function fetchAllPost(){

    return axios.get(url).then(res => res.data)
}

export async function createPost(newRecord){

    return axios.post(url,newRecord)
}

export async function updatePost(id, updateRecord){

    return axios.put(url + id  , updateRecord)
}

export async function updateTransacoes(id, updateRecord){

    return axios.put(url + id + "/inserir_transacoes", updateRecord)
}

export async function removePost(id){

    return axios.delete(url + id)
}