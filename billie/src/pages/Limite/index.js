import React from 'react';

import { Link } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {Box, Typography, IconButton, Container, Card, CardContent, Divider, Stack} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { grey, orange } from '@mui/material/colors';

const theme = createTheme({

    shape: {

        borderRadius: 25
    },

    palette: {
        primary: {
            main: '#000',
            dark: '#076D6D',
            contrastText: '#ffffff',
        },
        secondary: {
            main: '#FF9800'
        }
    },
});

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 25,
    width: 350,
    borderRadius: 1,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: theme.palette.mode === 'light' ? '#00C8C0' : '#308fe8',
    },
  }));

  const StyledBox = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'light' ? '#fff' : orange[800],
  }));

const Item = styled(Card)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

function Limite() {

    return (
        <div>
        <Container maxWidth="sm">
            <ThemeProvider theme={theme}>

                <br></br>
                <Typography>
                <Stack direction="row" spacing={4}>
                    <Card sx={{ maxWidth: 45, height: 40 }} style={{ borderRadius: 13 }}>
                    <Link to="/pag_inicial">
                        <IconButton color="primary" aria-label="ArrowBack" fontSize="large" backgroundColor="skyblue">
                        <ArrowBackIcon sx={{ color: "#00C8C0" }} />
                        </IconButton>
                    </Link>
                    </Card>
                   
                    <h1>LIMITES</h1>
                    
                    <br></br><br></br><br></br><br></br>
                </Stack>
                </Typography>
                <Item>
                    <CardContent >
                    <br></br>
                    <IconButton color="primary" aria-label="Add" fontSize="large"
                        backgroundColor="skyblue"  >
                        <AddIcon />
                    </IconButton>
                    </CardContent>
                </Item>

                <br></br>
                <Typography>
                <h3>LANCHES - R$ 50,00</h3>
              </Typography>
              
            </ThemeProvider>
            
            <Card>
            <br></br><br></br>
            <Box sx={{ flexGrow: 1 }}>

            <BorderLinearProgress variant="determinate" value={60} />
        </Box>

        <br></br><br></br><br></br>
        </Card>

        <Typography>
                <h3>PASSEIOS - R$ 150,00</h3>
              </Typography>

        <Card>
            <br></br><br></br>
            <Box sx={{ flexGrow: 1 }}>

            <BorderLinearProgress variant="determinate" value={80} />
            <Typography sx={{ color: "#FF9800" }}>
             <center> <h2>R$ 80,00</h2></center>
            </Typography>
        </Box>

        <br></br>
        </Card>



        <Typography>
                <h3>TRANSPORTE - R$ 250,00</h3>
              </Typography>

        <Card>
            <br></br><br></br>
            <Box sx={{ flexGrow: 1 }}>

            <BorderLinearProgress variant="determinate" value={100} />
            <Typography sx={{ color: "#00C8C0" }}>
             <center> <h2>R$ 80,00</h2></center>
            </Typography>

        </Box>


        {/* <br></br><br></br><br></br> */}
        </Card>

        </Container>
        </div>
    );
}

export default Limite;