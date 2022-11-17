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
                  name = "descricao"
                  value={values.descricao}
                  onChange={handleInputChange}
                  {...(errors.descricao? { error: true, helperText:errors.descricao} : null)}
                                
                label="Meta"  />

                <TextField 
                  id="outlined-adornment-amount" 
                  fullWidth 
                  label="Valor em R$" 
                  name = "valor_alvo"
                  value={values.valor_alvo}
                  onChange={handleInputChange}
                  {...(errors.valor_alvo? { error: true, helperText:errors.valor_alvo} : null)}/>

                <br></br>

                {posts.map((post, index) => {

                  return (
                    <Fragment key={index}>
                   
                      <Button variant="contained" type="submit" color="primary" sx={{ mt: 3, mb: 2 }}
                        onClick={() => { { setAction({ currentId: post._id, type: ACTION_TYPES.UPDATE }) } }}>Continuar
                      </Button>
                   
                        </Fragment>
    
                  );
                })}
          
              </form>

              <br></br> 
          </Stack>
        </center>
      </ThemeProvider>
    </Container>
    );
}

export default Metas;