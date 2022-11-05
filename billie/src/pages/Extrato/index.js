import React from 'react';
import { Fragment, useContext } from 'react';
import MyContext from '../../contexts/MyContext'

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Typography, IconButton, Container, Card, CardContent, Divider, Stack, Avatar } from '@mui/material';
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

function Extrato() {

    const { posts, values, handleSubmit, handleInputChange, errors, validate, setAction, ACTION_TYPES } = useContext(MyContext)

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
                        <Typography><h1>EXTRATO</h1></Typography>
                    </Stack>

                    {posts.map((post, index) => {

                        return (
                            <Fragment key={index}>
                                <br></br> <br></br>
                                <Divider />
                                <Typography><h4>{post.dataNovoGanho}</h4></Typography>

                                <Card sx={{ maxWidth: 500, height: 150, marginRight: 1, }} style={{ flex: 1 }}>
                                    <CardContent>

                                        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 1, sm: 2, md: 4 }}>

                                            <center>
                                                <Typography sx={{ color: "black" }}>
                                                    GANHO REGISTRADO
                                                </Typography>

                                                <Typography sx={{ color: "#00C8C0" }}>
                                                    <h5>+ {post.valorNovoGanho}</h5>
                                                </Typography>

                                                <Typography sx={{ color: "#076D6D" }}>
                                                    <h5>{post.nomeNovoGanho}</h5>
                                                </Typography>
                                            </center>

                                            <Avatar alt="emy Sharp" src="../../../moeda_azul.png" sx={{ width: 66, height: 66 }} />

                                        </Stack>
                                    </CardContent>
                                </Card>
                            </Fragment>
                        );
                    })}



                    <br></br>

                    <Card sx={{ maxWidth: 500, height: 150, marginRight: 1, }} style={{ flex: 1 }}>
                        <CardContent>

                            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 1, sm: 2, md: 4 }}>

                                <center>
                                    <Typography sx={{ color: "black" }}>
                                        GASTO REGISTRADO
                                    </Typography>

                                    <Typography sx={{ color: "#FF9800" }}>
                                        <h5>-  110,00</h5>
                                    </Typography>

                                    <Typography sx={{ color: "#076D6D" }}>
                                        <h5>Formatação de PC</h5>
                                    </Typography>
                                </center>

                                <Avatar alt="emy Sharp" src="../../../moeda_laranja.png" sx={{ width: 66, height: 66 }} />
                            </Stack>
                        </CardContent>
                    </Card>

                    <br></br><br></br>
                    <Typography><h4>14 - JULHO                        SALDO: 15,00</h4></Typography>
                    <Divider />
                    <br></br>
                    <Card sx={{ maxWidth: 500, height: 150, marginRight: 1, }} style={{ flex: 1 }}>
                        <CardContent>

                            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 1, sm: 2, md: 4 }}>

                                <center>
                                    <Typography sx={{ color: "black" }}>
                                        GASTO REGISTRADO
                                    </Typography>

                                    <Typography sx={{ color: "#FF9800" }}>
                                        <h5>-  10,00</h5>
                                    </Typography>

                                    <Typography sx={{ color: "#076D6D" }}>
                                        <h5>PIX Lanche</h5>
                                    </Typography>
                                </center>

                                <IconButton color="primary" aria-label="ArrowForwardIos" fontSize="large"
                                    backgroundColor="skyblue">
                                    <ArrowForwardIosIcon sx={{ fontSize: 60, color: "#FF9800" }} />
                                </IconButton>
                            </Stack>
                        </CardContent>
                    </Card>
                </Container>
            </ThemeProvider>
        </Container>
    );
}

export default Extrato;