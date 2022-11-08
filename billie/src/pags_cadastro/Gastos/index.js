import '@fontsource/roboto/300.css';
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

  let valueList = document.getElementById('valueList')
  let listArray = [];
  let text = '<span> you have selected : </span>';

  let checkboxes =  document.querySelectorAll('.checkbox');
 
  for (let checkbox of checkboxes){

    checkbox.addEventListener('click', function(){

      if (this.checked === true){
        listArray.push(this.value);
        console.log(listArray)
        valueList.innerHTML = text + listArray.join(' / ');
      }else{ooooo

        listArray = listArray.filter(e => e !== this.value);
        valueList.innerHTML = text + listArray.join(' / ');
      }
    })
  }

  return (

    <Container maxWidth="sm">
      <ThemeProvider theme={theme}>
      <br></br>
        <Container>
        <Typography>
        <Stack direction="row" spacing={4}>
            <Card sx={{ maxWidth: 45, height: 40 }} style={{ borderRadius: 13 }}>
            <Link to="/pag_inicial">
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

            <input
              control={<Checkbox sx={{ '&.Mui-checked': { color: orange[800], }, }} />} 
             
              value="alimentacao"
              
              type = "checkbox"
             
            />

            <FormControlLabel 
              control={<Checkbox sx={{ '&.Mui-checked': { color: orange[800], }, }} />} 
              label="Transporte"
              value="transporte"
              name = "Transporte"
              onChange={handleInputChange}
            />
            <FormControlLabel control={<Checkbox sx={{ '&.Mui-checked': { color: orange[800], }, }} />} label="Moradia" />
            <FormControlLabel control={<Checkbox sx={{ '&.Mui-checked': { color: orange[800], }, }} />} label="Lazer" />
            <FormControlLabel control={<Checkbox sx={{ '&.Mui-checked': { color: orange[800], }, }} />} label="Estudos" />
            <FormControlLabel control={<Checkbox sx={{ '&.Mui-checked': { color: orange[800], }, }} />} label="Prestações" />
            <FormControlLabel control={<Checkbox sx={{ '&.Mui-checked': { color: orange[800], }, }} />} label="Outros" />
          
            <br></br>
            <Button variant="contained" type="submit" color="primary"
              sx={{ mt: 3, mb: 2 }}> Continuar</Button>

            </FormGroup>

            <p id="valueList"></p>
        </Stack>
      </center>
    </ThemeProvider>

    </Container >

  
  );
}

export default Gastos;