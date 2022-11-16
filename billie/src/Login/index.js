import './../App.css';
import React, {useContext, Fragment} from 'react';
import MyContext from '../contexts/MyContext'
import { Link } from 'react-router-dom';
import { Button, TextField, FormControlLabel, Checkbox, Grid, Box, Typography, Container } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function Copyright(props) {

  return (

    <Typography variant="body2" color="text.secondary" align="center" {...props}>

      {'Copyright © '}
      <Link to="/">Billy</Link>

      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

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

const Login = (props) =>{

  const {idUsuario, posts, values, handleSubmit,  handleInputChange, errors, validate, setAction, ACTION_TYPES} = useContext(MyContext)
  
  const aux =  {...(errors.valida ? { error: true, helperText:errors.valida} : null)}

  return (

    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />

        <Box sx={{marginTop: 8,display: 'flex', flexDirection: 'column', alignItems: 'center',}}>

          <Typography component="h1" variant="h5">Login</Typography>

          <form noValidate autoComplete="off" sx={{ mt: 1 }} onSubmit = {handleSubmit}>
              
            <br></br>
                <TextField 
                    margin="normal"
                    name = "email_entrada"
                    variant="outlined"
                    label="email" 
                    required
                    fullWidth
                    autoComplete="email" 
                    autoFocus
                    value={values.email_entrada}
                    onChange={handleInputChange}
                    {...(errors.email_entrada ? { error: true, helperText:errors.email_entrada} : null)}/>
                   

                <TextField 
                    margin="normal" 
                    type="password"
                    required 
                    name = "senha_entrada"
                    variant="outlined"
                    label="senha" 
                    fullWidth
                    autoComplete="current-password"
                    value={values.senha_entrada}
                    onChange={handleInputChange}
                    {...(errors.senha_entrada ? { error: true, helperText:errors.senha_entrada} : null)}/>

                  <FormControlLabel control={<Checkbox value="remember" color="secondary" />}
                    label="Me mantenha logado"/>

                    <Button 
                    variant="contained"
                    color="primary"
                    size="large"
                    type="submit"
                    sx={{ mt: 3, mb: 2 }}>
                    Entrar   
                </Button>

                <Grid container>
                  <Grid item xs>
                    <Link to="/resgate_senha">Esqueceu sua senha?</Link>
                  </Grid>
                  <Grid item>
                    <Link to="/cadastro">Não tem uma conta? Cadastre-se aqui!</Link>
                  </Grid>
                </Grid>
            </form>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}

export default Login;