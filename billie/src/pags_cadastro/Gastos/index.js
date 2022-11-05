import '@fontsource/roboto/300.css';
import { Card, Container, FormGroup, Checkbox, FormControlLabel, FormLabel, Button, IconButton, Stack } from '@mui/material';
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

  return (

    <Container maxWidth="sm">
      <ThemeProvider theme={theme}>
      <br></br>
        <Container>
          <Stack direction="row" spacing={4}>
            <Card sx={{ maxWidth: 45, height: 40 }} style={{ borderRadius: 13 }}>
              <Link to="/rendas">
                <IconButton color="primary" aria-label="ArrowBack" fontSize="large"
                  backgroundColor="skyblue">
                  <ArrowBackIcon />
                </IconButton>
              </Link>
            </Card>

            <h1>Gastos</h1>
          </Stack>
     </Container>
     <center>   
        <Stack direction="column" spacing={1} alignItems="center">

          <FormLabel component="legend" sx={{ color: "#1E7677", "font-weight": "bold", "font-family": "Arial", }}>
            <h3>Quais são os seus <br></br>tipos de gastos?</h3></FormLabel><br></br>

          <FormGroup sx={{ color: "#1E7677", "font-weight": "bold", "font-family": "Arial" }}>

            <FormControlLabel control={<Checkbox sx={{ '&.Mui-checked': { color: orange[800], }, }} />} label="Alimentação" />
            <FormControlLabel control={<Checkbox sx={{ '&.Mui-checked': { color: orange[800], }, }} />} label="Transporte" />
            <FormControlLabel control={<Checkbox sx={{ '&.Mui-checked': { color: orange[800], }, }} />} label="Moradia" />
            <FormControlLabel control={<Checkbox sx={{ '&.Mui-checked': { color: orange[800], }, }} />} label="Lazer" />
            <FormControlLabel control={<Checkbox sx={{ '&.Mui-checked': { color: orange[800], }, }} />} label="Estudos" />
            <FormControlLabel control={<Checkbox sx={{ '&.Mui-checked': { color: orange[800], }, }} />} label="Prestações" />
            <FormControlLabel control={<Checkbox sx={{ '&.Mui-checked': { color: orange[800], }, }} />} label="Outros" />
          </FormGroup>

          <br></br>
          <Link to="/metas" style={{"text-decoration":"none"}}><Button variant="contained" type="submit" color="primary"
            sx={{ mt: 3, mb: 2 }}> Continuar</Button></Link>

        </Stack>
      </center>
    </ThemeProvider>
    </Container >
  );
}

export default Gastos;