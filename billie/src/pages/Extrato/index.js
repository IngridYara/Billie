import React from 'react';
import { Fragment, useContext } from 'react';
import MyContext from '../../contexts/MyContext'

import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import { grey, orange } from '@mui/material/colors';
import { Link } from 'react-router-dom';
import { Typography, IconButton, Container, Card, CardContent, SwipeableDrawer, Divider, Stack, Avatar, Box, TextField, Button } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const Puller = styled(Box)(({ theme }) => ({
    width: 60,
    height: 4,
    backgroundColor: theme.palette.mode === 'light' ? grey[300] : grey[900],
    borderRadius: 25,
    position: 'absolute',
    top: 8,
    left: 'calc(50% - 25px)',
}));

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
    const [state, setState] = React.useState(false);

    let aux = ''
    let aux2 = ''

    const toggleDrawer = (anchor, open) => (event) => {
        if (
            event &&
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
        ) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (

        <Box role="presentation" sx={{
            display: 'table-row-group', justifyContent: 'center', borderTopLeftRadius: 8, borderTopRightRadius: 8,
            visibility: 'visible', right: 0, left: 0,
        }}>

            <Puller onClick={toggleDrawer(anchor, false)} />

            <IconButton onClick={toggleDrawer(anchor, false)}>
                <CloseIcon />
            </IconButton>

            <Stack direction='row' spacing={4} justifyContent="center" alignItems="center">

                <center>
                    <form noValidate component="legend" sx={{ mt: 1 }} onSubmit={handleSubmit}>
                        <br></br>

                        <Typography>
                            <h3 sx={{ color: "#1E7677", "font-weight": "bold", "font-family": "Arial" }}>Editar Ganho</h3><br></br>
                        </Typography>

                        <TextField

                            margin="normal"
                            id="outlined-name"
                            label="Título"
                            sx={{ width: 325, margin: 1 }}
                            name="nomeNovoGanho"
                            value={values.nomeNovoGanho}
                            onChange={handleInputChange}
                            {...(errors.nomeNovoGanho ? { error: true, helperText: errors.nomeNovoGanho } : null)} />

                        <TextField
                            id="outlined-adornment-amount"
                            sx={{ width: 325, margin: 1 }}
                            label="Valor em R$"
                            name="valorNovoGanho"
                            value={values.valorNovoGanho}
                            onChange={handleInputChange}
                            {...(errors.valorNovoGanho ? { error: true, helperText: errors.valorNovoGanho } : null)} />

                        <TextField
                            id="outlined-adornment-amount"
                            sx={{ width: 325, margin: 1 }}
                            label="Categoria"
                            name="categoriaNovoGanho"
                            value={values.categoriaNovoGanho}
                            onChange={handleInputChange}
                            {...(errors.categoriaNovoGanho ? { error: true, helperText: errors.categoriaNovoGanho } : null)} />

                        <TextField
                            id="outlined-adornment-amount"
                            sx={{ width: 325, margin: 1 }}
                            label="Data"
                            name="dataNovoGanho"
                            value={values.dataNovoGanho}
                            onChange={handleInputChange}
                            {...(errors.dataNovoGanho ? { error: true, helperText: errors.dataNovoGanho } : null)} />

                        <TextField
                            id="outlined-adornment-amount"
                            sx={{ width: 325, margin: 1 }}
                            label="Meta relacionada"
                            name="metaNovoGanho"
                            value={values.metaNovoGanho}
                            onChange={handleInputChange}
                            {...(errors.metaNovoGanho ? { error: true, helperText: errors.metaNovoGanho } : null)} />

                        <br></br> <br></br>

                        {posts.map((post, index) => {

                            return (
                                <Fragment key={index}>
                                    <Button variant="contained" type="submit" color="primary"
                                        onClick={() => { setAction({ currentId: post._id, type: ACTION_TYPES.UPDATE }) }}
                                        sx={{ mt: 3, mb: 2 }} > Continuar</Button>
                                </Fragment>
                            );
                        })}

                    </form>
                </center>
            </Stack>
        </Box >
    );

    const list2 = (anchor) => (

        <Box role="presentation"
            sx={{
                display: 'table-row-group',
                justifyContent: 'center',
                borderTopLeftRadius: 8,
                borderTopRightRadius: 8,
                visibility: 'visible',
                right: 0,
                left: 0,
            }}>

            <Puller onClick={toggleDrawer(anchor, false)} />

            <IconButton onClick={toggleDrawer(anchor, false)}>
                <CloseIcon />
            </IconButton>

            <Stack direction='row' spacing={4} justifyContent="center" alignItems="center">

                <center>

                    <form noValidate component="legend" sx={{ mt: 1 }} onSubmit={handleSubmit}>

                        <br></br>

                        <Typography>
                            <h3 sx={{ color: "#1E7677", "font-weight": "bold", "font-family": "Arial" }}>Cadastrar Gasto</h3><br></br>
                        </Typography>

                        <TextField
                            margin="normal"
                            id="outlined-name"
                            label="Título"
                            sx={{
                                width: 325,
                                margin: 1
                            }}
                            name="nomeNovoGasto"
                            value={values.nomeNovoGasto}
                            onChange={handleInputChange}
                            {...(errors.nomeNovoGasto ? { error: true, helperText: errors.nomeNovoGasto } : null)} />

                        <TextField
                            id="outlined-adornment-amount"
                            sx={{
                                width: 325,
                                margin: 1
                            }}
                            label="Valor em R$"
                            name="valorNovoGasto"
                            value={values.valorNovoGasto}
                            onChange={handleInputChange}
                            {...(errors.valorNovoGasto ? { error: true, helperText: errors.valorNovoGasto } : null)} />

                        <TextField
                            id="outlined-adornment-amount"
                            sx={{
                                width: 325,
                                margin: 1
                            }}
                            label="Categoria"
                            name="categoriaNovoGasto"
                            value={values.categoriaNovoGasto}
                            onChange={handleInputChange}
                            {...(errors.categoriaNovoGasto ? { error: true, helperText: errors.categoriaNovoGasto } : null)} />

                        <TextField
                            id="outlined-adornment-amount"
                            sx={{
                                width: 325,
                                margin: 1
                            }}
                            label="Data"
                            name="dataNovoGasto"
                            value={values.dataNovoGasto}
                            onChange={handleInputChange}
                            {...(errors.dataNovoGasto ? { error: true, helperText: errors.dataNovoGasto } : null)} />

                        <TextField
                            id="outlined-adornment-amount"
                            sx={{
                                width: 325,
                                margin: 1
                            }}
                            label="Meta relacionada"
                            name="metaNovoGasto"
                            value={values.metaNovoGasto}
                            onChange={handleInputChange}
                            {...(errors.metaNovoGasto ? { error: true, helperText: errors.metaNovoGasto } : null)} />

                        <br></br> <br></br>

                        {posts.map((post, index) => {

                            return (
                                <Fragment key={index}>
                                    <Button variant="contained" type="submit" color="primary"
                                        onClick={() => { setAction({ currentId: post._id, type: ACTION_TYPES.UPDATE }) }}
                                        sx={{ mt: 3, mb: 2 }} > Continuar</Button>
                                </Fragment>
                            );
                        })}

                    </form>
                </center>
            </Stack>
        </Box >
    );

    let matriz_trasicoes = []

    let Data = 0

    return (

        <Container maxWidth="sm">
            <ThemeProvider theme={theme}>
                <Container>
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

                            <h1>EXTRATO</h1>

                            <br></br><br></br><br></br>
                        </Stack>
                    </Typography>

                    {posts.map((post, index) => {

                        for (let i = 0; i < post.transacoes.length; i++) {
                            matriz_trasicoes[i] = post.transacoes[i]
                        }

                    })}

                    {matriz_trasicoes.map((post, index) => {
                      
                        Data = new Date(post.data)

                        if (post.tipo.toUpperCase() === "GANHO" || post.tipo.toUpperCase() === "GANHOS") {
                            if (post.data != '') {

                                if (post.data === aux) {
                                    aux = post.data

                                    return (

                                        <Fragment key={index}>
                                            <br></br><br></br>  <br></br>

                                            {['GANHOS'].map((anchor) => (
                                                <React.Fragment key={anchor}>

                                                    <Card onClick={toggleDrawer(anchor, true)} sx={{ maxWidth: 500, height: 150, marginRight: 1, }} style={{ flex: 1 }}>
                                                        <CardContent>
                                                            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 1, sm: 2, md: 4 }}>

                                                                <center>
                                                                    <Typography sx={{ color: "black" }}>
                                                                        GANHO REGISTRADO
                                                                    </Typography>

                                                                    <Typography sx={{ color: "#00C8C0" }}>
                                                                        <h5>+ {post.valor}</h5>
                                                                    </Typography>

                                                                    <Typography sx={{ color: "#076D6D" }}>
                                                                        <h5>{post.titulo}</h5>
                                                                    </Typography>
                                                                </center>

                                                                <IconButton color="primary" aria-label="ArrowForwardIos" fontSize="large"
                                                                    backgroundColor="skyblue">
                                                                    <ArrowForwardIosIcon sx={{ fontSize: 60, color: "#00C8C0" }} />
                                                                </IconButton>
                                                            </Stack>
                                                        </CardContent>
                                                    </Card>

                                                    <SwipeableDrawer
                                                        anchor="bottom"
                                                        open={state[anchor]}

                                                        onOpen={toggleDrawer(anchor, true)}>
                                                        {list(anchor)}
                                                    </SwipeableDrawer>

                                                </React.Fragment>
                                            ))}


                                        </Fragment>

                                    );
                                }

                                if (post.data !== aux) {
                                    aux = post.data

                                    return (

                                        <Fragment key={index}>
                                            <br></br>
                                            <Typography><h4>{post.data}  SALDO: 15,00</h4></Typography>
                                            <Divider />
                                            <br></br>  <br></br>
                                            {['GANHOS'].map((anchor) => (
                                                <React.Fragment key={anchor}>

                                                    <Card onClick={toggleDrawer(anchor, true)} sx={{ maxWidth: 500, height: 150, marginRight: 1, }} style={{ flex: 1 }}>
                                                        <CardContent>
                                                            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 1, sm: 2, md: 4 }}>

                                                                <center>
                                                                    <Typography sx={{ color: "black" }}>
                                                                        GANHO REGISTRADO
                                                                    </Typography>

                                                                    <Typography sx={{ color: "#00C8C0" }}>
                                                                        <h5>+ {post.valor}</h5>
                                                                    </Typography>

                                                                    <Typography sx={{ color: "#076D6D" }}>
                                                                        <h5>{post.titulo}</h5>
                                                                    </Typography>
                                                                </center>

                                                                <IconButton color="primary" aria-label="ArrowForwardIos" fontSize="large"
                                                                    backgroundColor="skyblue">
                                                                    <ArrowForwardIosIcon sx={{ fontSize: 60, color: "#00C8C0" }} />
                                                                </IconButton>
                                                            </Stack>
                                                        </CardContent>
                                                    </Card>

                                                    <SwipeableDrawer
                                                        anchor="bottom"
                                                        open={state[anchor]}

                                                        onOpen={toggleDrawer(anchor, true)}>
                                                        {list(anchor)}
                                                    </SwipeableDrawer>

                                                </React.Fragment>
                                            ))}
                                        </Fragment>
                                    );
                                }

                                aux = post.data
                            }
                        }
                    })}

                    <br></br>

                    {matriz_trasicoes.map((post, index) => {

                        if (post.tipo.toUpperCase() === "GASTO" || post.tipo.toUpperCase() === "GASTOS") {
                            if (post.data != '') {

                                if (post.data === aux2) {
                                    aux2 = post.data

                                    return (

                                        <Fragment key={index}>
                                            <br></br><br></br>  <br></br>

                                            {['GASTOS'].map((anchor) => (
                                                <React.Fragment key={anchor}>

                                                    <Card onClick={toggleDrawer(anchor, true)} sx={{ maxWidth: 500, height: 150, marginRight: 1, }} style={{ flex: 1 }}>
                                                        <CardContent>
                                                            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 1, sm: 2, md: 4 }}>

                                                                <center>
                                                                    <Typography sx={{ color: "black" }}>
                                                                        GASTO REGISTRADO
                                                                    </Typography>

                                                                    <Typography sx={{ color: "#FF9800" }}>
                                                                        <h5>- {post.valor}</h5>
                                                                    </Typography>

                                                                    <Typography sx={{ color: "#076D6D" }}>
                                                                        <h5>{post.titulo}</h5>
                                                                    </Typography>
                                                                </center>

                                                                <IconButton color="primary" aria-label="ArrowForwardIos" fontSize="large"
                                                                    backgroundColor="skyblue">
                                                                    <ArrowForwardIosIcon sx={{ fontSize: 60, color: "#FF9800" }} />
                                                                </IconButton>
                                                            </Stack>
                                                        </CardContent>
                                                    </Card>

                                                    <SwipeableDrawer
                                                        anchor="bottom"
                                                        open={state[anchor]}

                                                        onOpen={toggleDrawer(anchor, true)}>
                                                        {list2(anchor)}
                                                    </SwipeableDrawer>

                                                </React.Fragment>
                                            ))}
                                        </Fragment>
                                    );
                                }

                                if (post.data !== aux2) {
                                    aux = post.data

                                    return (

                                        <Fragment key={index}>
                                            <br></br>
                                            <Typography><h4>{post.data}  SALDO: 15,00</h4></Typography>
                                            <Divider />
                                            <br></br>  <br></br>
                                            {['GASTOS'].map((anchor) => (
                                                <React.Fragment key={anchor}>

                                                    <Card onClick={toggleDrawer(anchor, true)} sx={{ maxWidth: 500, height: 150, marginRight: 1, }} style={{ flex: 1 }}>
                                                        <CardContent>
                                                            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 1, sm: 2, md: 4 }}>

                                                                <center>
                                                                    <Typography sx={{ color: "black" }}>
                                                                        GASTO REGISTRADO
                                                                    </Typography>

                                                                    <Typography sx={{ color: "#FF9800" }}>
                                                                        <h5>- {post.valor}</h5>
                                                                    </Typography>

                                                                    <Typography sx={{ color: "#076D6D" }}>
                                                                        <h5>{post.titulo}</h5>
                                                                    </Typography>
                                                                </center>

                                                                <IconButton color="primary" aria-label="ArrowForwardIos" fontSize="large"
                                                                    backgroundColor="skyblue">
                                                                    <ArrowForwardIosIcon sx={{ fontSize: 60, color: "#FF9800" }} />
                                                                </IconButton>
                                                            </Stack>
                                                        </CardContent>
                                                    </Card>

                                                    <SwipeableDrawer
                                                        anchor="bottom"
                                                        open={state[anchor]}

                                                        onOpen={toggleDrawer(anchor, true)}>
                                                        {list2(anchor)}
                                                    </SwipeableDrawer>

                                                </React.Fragment>
                                            ))}
                                        </Fragment>
                                    );
                                }
                            }
                        }
                    })}

                    <br></br><br></br>
                </Container>
            </ThemeProvider>
        </Container>
    );
}

export default Extrato;