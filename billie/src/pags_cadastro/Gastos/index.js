import '@fontsource/roboto/300.css';
import React, {useState} from 'react'
import MyContext from '../../contexts/MyContext'
import { Fragment, useContext } from 'react';
import { Card, Container, FormGroup, Checkbox, FormControlLabel, FormLabel, Button, IconButton, Stack, Typography } from '@mui/material';
import { orange } from '@mui/material/colors';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link } from 'react-router-dom';

const theme = createTheme({

  shape: {

    borderRadius: 25
  },

  palette: {
    primary: {
      main: '#00C8C0',
      dark: '#076D6D',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#FF9800'
    }
  },

});

function Gastos() {

  const { posts, values, handleSubmit, handleInputChange, errors, validate, setAction, ACTION_TYPES } = useContext(MyContext)

  const [alimentacao, setAlimentacao] = useState(true);
  const [transporte, setTransporte] = useState(true);
  const [moradia, setMoradia] = useState(true);
  const [lazer, setLazer] = useState(true);
  const [estudos, setEstudos] = useState(true);
  const [prestacoes, setPrestacoes] = useState(true);
  const [outros, setOutros] = useState(true);

  const handleChange=(data) => {

    if (data == "alimentacao"){
      if (alimentacao == true){
        console.log(data)
        
      }
      setAlimentacao(!alimentacao);
    
    }

    if (data == "transporte"){
      if (transporte == true){
        console.log(data)
       
      }
      setTransporte(!transporte);
    }

    if (data == "moradia"){
      if (moradia == true){
        console.log(data)
   
      }
      setMoradia(!moradia);
    }

    if (data == "lazer"){
      if (lazer == true){
        console.log(data)
      }
      setLazer(!lazer);
    }

    if (data == "estudos"){
      if (estudos == true){
        console.log(data)
      }
      setEstudos(!estudos);
    }

    if (data == "prestacoes"){
      if (prestacoes == true){
        console.log(data)
      }
      setPrestacoes(!prestacoes);
    }

    if (data == "outros"){
      if (outros == true){
        console.log(data)
      }
      setOutros(!outros);
    }

    return null
  }
  return (

    <Container maxWidth="sm">
      <ThemeProvider theme={theme}>
      <br></br>
        <Container>
        <Typography>
        <Stack direction="row" spacing={4}>
            <Card sx={{ maxWidth: 45, height: 40 }} style={{ borderRadius: 13 }}>
            <Link to="/rendas">
                <IconButton color="primary" aria-label="ArrowBack" fontSize="large" backgroundColor="skyblue">
                <ArrowBackIcon sx={{ color: "#00C8C0" }} />
                </IconButton>
            </Link>
            </Card>
           
            <h1>GASTOS</h1>
            
            <br></br><br></br><br></br><br></br>
        </Stack>
        </Typography>
     </Container>
     <center>   
        <Stack direction="column" spacing={1} alignItems="center">

          <FormLabel component="legend" sx={{ color: "#1E7677", "font-weight": "bold", "font-family": "Arial", }}>
            <h3>Quais são os seus <br></br>tipos de gastos?</h3></FormLabel><br></br>

          <FormGroup sx={{ color: "#1E7677", "font-weight": "bold", "font-family": "Arial" }}>   
            
            <FormControlLabel 
              control={<Checkbox sx={{ '&.Mui-checked': { color: orange[800], }, }} />} 
              label="Alimentação"
              type="checkbox"
              name = "alimentacao"
              value={values.alimentacao}  
              onChange={() =>
                
                handleChange("alimentacao") == "alimentacao" ? null: null
               
              }
            />

            <FormControlLabel 
              control={<Checkbox sx={{ '&.Mui-checked': { color: orange[800], }, }} />} 
              label="Transporte"
              type="checkbox"
              value={transporte}  
              onChange={() => handleChange("transporte")}
            />

            <FormControlLabel 
              control={<Checkbox sx={{ '&.Mui-checked': { color: orange[800], }, }} />} 
              label="Moradia"
              type="checkbox"
              value={moradia}  
              onChange={() => handleChange("moradia")}
            />

            <FormControlLabel 
              control={<Checkbox sx={{ '&.Mui-checked': { color: orange[800], }, }} />} 
              label="Lazer"
              type="checkbox"
              value={lazer}  
              onChange={() => handleChange("lazer")}
            />

            <FormControlLabel 
              control={<Checkbox sx={{ '&.Mui-checked': { color: orange[800], }, }} />} 
              label="Estudos"
              type="checkbox"
              value={estudos}  
              onChange={() => handleChange("estudos")}
            />

            <FormControlLabel 
              control={<Checkbox sx={{ '&.Mui-checked': { color: orange[800], }, }} />} 
              label="Prestações"
              type="checkbox"
              value={prestacoes}  
              onChange={() => handleChange("prestacoes")}
            />

            <FormControlLabel 
              control={<Checkbox sx={{ '&.Mui-checked': { color: orange[800], }, }} />} 
              label="Outros"
              type="checkbox"
              value={outros}  
              onChange={() => handleChange("outros")}
             
            />
  
            <br></br>
            <Link to="/metas" style={{"text-decoration":"none"}}>
            <Button variant="contained" type="submit" color="primary"
              sx={{ mt: 3, mb: 2 }}> Continuar</Button>
              </Link>

            </FormGroup>

            <p id="valueList"></p>
        </Stack>
      </center>
    </ThemeProvider>

    </Container >

  
  );
}

export default Gastos;