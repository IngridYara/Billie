import React, {useContext, Fragment} from 'react';
import MyContext from '../../contexts/MyContext'
import { Link } from 'react-router-dom';
import '@fontsource/roboto/300.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {Button, IconButton, Container, Card, Stack, TextField} from '@mui/material';
import '../../App.css';

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


 const Cadastro = (props) => {

    const {posts, values, handleSubmit,  handleInputChange, errors, validate, setAction, ACTION_TYPES} = useContext(MyContext)

    return (

        <Container maxWidth="sm">
            <ThemeProvider theme={theme}>

            <br></br>

                <Container>
                    <Stack direction="row" spacing={4}>
                        <Card sx={{ maxWidth: 45, height: 40 }} style={{ borderRadius: 13 }}>
                            <Link to="/">
                                <IconButton color="primary" aria-label="ArrowBack" fontSize="large"
                                    backgroundColor="skyblue">
                                    <ArrowBackIcon sx={{ color: "#00C8C0" }} />
                                </IconButton>
                            </Link>
                        </Card>
                        <h1>CADASTRO</h1>
                        <br></br><br></br><br></br>
                    </Stack>
                </Container>

                <center>
                        <br></br><br></br>
                        <form noValidate component="legend" sx={{  mt: 1 }}  onSubmit = {handleSubmit}>
                            <Stack direction="column" spacing={1} alignItems="center">
                                
                            <TextField 
                                    name = "nome"
                                    value={values.nome}
                                    onChange={handleInputChange}
                                    {...(errors.nome? { error: true, helperText:errors.nome} : null)}
                                                
                                label="Primeiro Nome" />

                                <TextField 
                                    name = "sobrenome"
                                    value={values.sobrenome}
                                    onChange={handleInputChange}
                                    {...(errors.sobrenome? { error: true, helperText:errors.sobrenome} : null)}
                                    
                                label="Sobrenome" />

                                <TextField 
                                    name = "telefone"
                                    value={values.telefone}
                                    onChange={handleInputChange}
                                    {...(errors.telefone? { error: true, helperText:errors.telefone} : null)}
                                label="Telefone" type="tel" />

                                <TextField 
                                    name = "email"
                                    value={values.email}
                                    onChange={handleInputChange}
                                    {...(errors.email? { error: true, helperText:errors.email} : null)}
                                label="Email" />

                                <TextField 
                                    name = "senha"
                                    value={values.senha}
                                    onChange={handleInputChange}
                                    {...(errors.senha ? {error: true, helperText: errors.senha} : null)}
                                label="Senha" type="password" />
                                
                                <br></br> 
                                
                                <Button variant="contained" type="submit" color="primary"
                                sx={{ mt: 3, mb: 2 }} > Continuar</Button>

                            </Stack>
                        </form>                   
                </center>
            </ThemeProvider>
        </Container >
    );
}
export default Cadastro;