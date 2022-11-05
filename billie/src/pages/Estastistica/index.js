import React from 'react';

import {createTheme, ThemeProvider } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {Typography, IconButton, Container, Card, CardContent, Divider, Stack} from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

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

function Estastistica() {

    return (

        <Container maxWidth="sm">
            <ThemeProvider theme={theme}>
                <Container>
                    <br></br>
                    <Stack direction="row" spacing={4}>
                        <Card sx={{ maxWidth: 45, height: 40 }} style={{ borderRadius: 13 }}>
                            <Link to="/pag_inicial">
                                <IconButton color="primary" aria-label="ArrowBack" fontSize="large" backgroundColor="skyblue">
                                    <ArrowBackIcon sx={{ color: "#00C8C0" }} />
                                </IconButton>
                            </Link>
                        </Card>
                        <Typography><h1>ESTASTICAS</h1></Typography>
                    </Stack>
                </Container>
            </ThemeProvider>
        </Container>
    );
}

export default Estastistica;