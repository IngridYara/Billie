import React, {useContext, Fragment} from 'react';
import MyContext from '../../contexts/MyContext'
import '@fontsource/roboto/300.css';
import { Card, Container, FormLabel, Button, IconButton, Stack, TextField } from '@mui/material';
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

const Metas = (props) => {

  const {posts, values, handleSubmit,  handleInputChange, errors, validate, setAction, ACTION_TYPES} = useContext(MyContext)

  return (

    <Container maxWidth="sm">
      <ThemeProvider theme={theme}>
        <Container>
          <br></br>
          <Stack direction="row" spacing={4}>
              <Card sx={{ maxWidth: 45, height: 40 }} style={{ borderRadius: 13 }}>

                <Link to="/gastos">
                  <IconButton color="primary" aria-label="ArrowBack" fontSize="large"
                    backgroundColor="skyblue">
                    <ArrowBackIcon />
                  </IconButton>
                </Link>
              </Card>
              <h1>Metas</h1>
          </Stack>
        </Container>
        
        <center>    

          <Stack direction="column" spacing={1} alignItems="center">
            <br></br><br></br>
            
            <form noValidate component="legend" sx={{  mt: 1 }} onSubmit = {handleSubmit}>
              <h3 sx={{color: "#1E7677", "font-weight": "bold", "font-family": "Arial"}}>Quais são as suas<br></br>três principais metas para<br></br>este (ou próximo) ano?</h3><br></br>
           
                <TextField 

                  margin="normal" 
                  id="outlined-name" 
                  fullWidth 
                  name = "meta1"
                  value={values.meta1}
                  onChange={handleInputChange}
                  {...(errors.meta1? { error: true, helperText:errors.meta1} : null)}
                                
                label="Primeira Meta"  />

                <TextField 
                  id="outlined-adornment-amount" 
                  fullWidth 
                  label="Valor em R$" 
                  name = "valor1"
                  value={values.valor1}
                  onChange={handleInputChange}
                  {...(errors.valor1? { error: true, helperText:errors.valor1} : null)}/>

                <br></br>

                <TextField 
                  margin="normal" 
                  id="outlined-name"  
                  fullWidth 
                  name = "meta2"
                  value={values.meta2}
                  onChange={handleInputChange}
                  {...(errors.meta2? { error: true, helperText:errors.meta2} : null)}
                          
                label="Segunda Meta"  />

                <TextField 
                  id="outlined-adornment-amount" 
                  fullWidth 
                  label="Valor em R$" 
                  name = "valor2"
                  value={values.valor2}
                  onChange={handleInputChange}
                  {...(errors.valor2? { error: true, helperText:errors.valor2} : null)}/>

                <br></br>

                <TextField 
                  margin="normal" 
                  id="outlined-name" 
                  name = "meta3"
                  value={values.meta3}
                  onChange={handleInputChange}
                  {...(errors.meta3? { error: true, helperText:errors.meta3} : null)}
            
                fullWidth label="Terceira Meta"  />

                <TextField 
                  id="outlined-adornment-amount" 
                  fullWidth 
                  label="Valor em R$" 
                  name = "valor3"
                  value={values.valor3}
                  onChange={handleInputChange}
                  {...(errors.valor3? { error: true, helperText:errors.valor3} : null)}   
                  inputmode="decimal" />

                  {posts.map((post, index) => {

                      return (
                        <Fragment key={index}>
                          <Button variant="contained" type="submit" color="primary"
                          onClick = {() => {setAction({currentId: post._id, type: ACTION_TYPES.UPDATE})}}
                          sx={{ mt: 3, mb: 2 }} > Continuar</Button>
                        </Fragment>
                      );})}
          
              </form>

              <br></br> 
          </Stack>
        </center>
      </ThemeProvider>
    </Container>
    );
}

export default Metas;