import React from 'react';
import { Link } from 'react-router-dom';
import '@fontsource/roboto/300.css';
import { Card, Container, Button, Typography, IconButton } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
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

function Pag_dados() {

  return (
    <Container maxWidth="sm">
      <ThemeProvider theme={theme}>

      <br></br>
        <Container>
          <Card sx={{ maxWidth: 45, height: 40 }} style={{ borderRadius: 13 }}>
            <Link to="/cadastro">
              <IconButton color="primary" aria-label="ArrowBack" fontSize="large"
                backgroundColor="skyblue">
                <ArrowBackIcon />
              </IconButton>
            </Link>
          </Card>
        </Container>
        <center>

          <h1>PARA TE <br></br>CONHECER MELHOR</h1>

          <Typography variant="h5" component="p" sx={{
            color: "#1E7677",
            "font-weight": "bold",
            "font-family": "sans-serif", "Helvetica": "Arial",
            "padding-top": "50px",
          }}>
            Para personalizar <br></br>melhor o seu ambiene, <br></br>
            responda o questionário <br></br> a seguir
            para que eu <br></br> possa te conhecer <br></br> melhor!
          </Typography>

          <br></br>
          <Link to="/rendas" style={{"text-decoration":"none"}}>
          <Button variant="contained" type="submit" color="primary"
            sx={{ mt: 3, mb: 2, "text-decoration": "none" }}>Continuar
            </Button>
            </Link>

        </center>
      </ThemeProvider>
    </Container>

  )
}

export default Pag_dados;