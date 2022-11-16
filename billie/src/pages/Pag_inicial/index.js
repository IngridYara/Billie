import '../../App.css';
import React from "react";
import { Fragment, useContext } from 'react';
import MyContext from '../../contexts/MyContext'

import { AppBar, Box, Button, Card, CardContent, Container, SwipeableDrawer, toggleDrawer, Stack } from '@mui/material';
import { Toolbar, TextField, List, Typography, Divider, ListItem, ListItemButton, ListItemIcon, ListItemText, Grid } from '@mui/material';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import { grey, orange } from '@mui/material/colors';
import IconButton from '@mui/material/IconButton';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import HelpIcon from '@mui/icons-material/Help';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import NorthEastIcon from '@mui/icons-material/NorthEast';
import SouthWestIcon from '@mui/icons-material/SouthWest';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import PieChartIcon from '@mui/icons-material/PieChart';
import CloseIcon from '@mui/icons-material/Close';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import GetAppIcon from '@mui/icons-material/GetApp';
import InfoIcon from '@mui/icons-material/Info';
import InsertCommentIcon from '@mui/icons-material/InsertComment';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import SavingsIcon from '@mui/icons-material/Savings';

import { Link } from 'react-router-dom';

const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'light' ? '#fff' : orange[800],
}));

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

  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center'
  },

  shape: {
    borderRadius: 25
  },

  palette: {
    primary: {
      main: '#00C8C0',
      dark: '#46B5A9',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#FF9800'
    }
  },

});


export function App() {

  const { idUsuario, posts, values, handleSubmit, handleInputChange, errors, validate, setAction, ACTION_TYPES } = useContext(MyContext)

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

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
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}>
      <List>
        <Box
          sx={{
            display: 'flex', justifyContent: 'flex-start',
          }}>
          <EmojiEmotionsIcon
            size="large"
            color="inherit"
            sx={{ margin: 2 }} />

            
          {posts.map((post, type) => {
            return (
              <Typography variant="h5">{post.nome}</Typography>
            );
          })}
        </Box>
      </List>
      <Divider />
      <List>
      <IconButton  color="primary" aria-label="School" fontSize="large"
        backgroundColor="skyblue" >
        <NotificationsIcon />
      </IconButton>

      <Button sx={{ color: "black", "font-weight": "bold" }}>Editar Notificações</Button>
    </List>


    <List>
    <IconButton  color="primary" aria-label="School" fontSize="large"
      backgroundColor="skyblue" >
      <AccountBalanceWalletIcon />
    </IconButton>

    <Button sx={{ color: "black", "font-weight": "bold" }}>Editar Contas Bancárias</Button>
  </List>


  <List>
  <IconButton  color="primary" aria-label="School" fontSize="large"
    backgroundColor="skyblue" >
    <GetAppIcon />
  </IconButton>

  <Button sx={{ color: "black", "font-weight": "bold" }}>Baixar Dados</Button>
</List>

<List>
<IconButton  color="primary" aria-label="School" fontSize="large"
  backgroundColor="skyblue" >
  <HelpIcon />
</IconButton>

<Button sx={{ color: "black", "font-weight": "bold" }}>Tutorial</Button>
</List>

<List>
<IconButton  color="primary" aria-label="School" fontSize="large"
  backgroundColor="skyblue" >
  <InsertCommentIcon />
</IconButton>

<Button sx={{ color: "black", "font-weight": "bold" }}>Feedback</Button>
</List>

<List>
<IconButton  color="primary" aria-label="School" fontSize="large"
  backgroundColor="skyblue" >
  <InfoIcon />
</IconButton>

<Button sx={{ color: "black", "font-weight": "bold" }}>Sobre</Button>
</List>
<Divider />
    </Box>
  );

  const [periodo, setPeriodo] = React.useState('');
  const [open, setOpen] = React.useState(false);

  const handleChange = (event) => {
    setPeriodo(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const list2 = (anchor) => (

    <Box role="presentation"
      sx={
        {
          display: 'table-row-group',
          justifyContent: 'center',
          borderTopLeftRadius: 8,
          borderTopRightRadius: 8,
          visibility: 'visible',
          right: 0,
          left: 0,
        }
      }>
      <Puller onClick={toggleDrawer(anchor, false)} />

      <IconButton onClick={toggleDrawer(anchor, false)}>
        <CloseIcon />
      </IconButton>

      <Stack direction='row' spacing={4} justifyContent="center"
        alignItems="center">

        <center>
          <form noValidate component="legend" sx={{ mt: 1 }} onSubmit={handleSubmit}>
            <br></br>

            <Typography>
              <h3 sx={{ color: "#1E7677", "font-weight": "bold", "font-family": "Arial" }}>Cadastrar Transição</h3><br></br>
            </Typography>

            <TextField
              margin="normal"
              id="outlined-name"
              label="Título"
              sx={{
                width: 325,
                margin: 1
              }}
              name="titulo"
              value={values.titulo}
              onChange={handleInputChange}
              {...(errors.titulo ? { error: true, helperText: errors.titulo } : null)} />

            <TextField
              id="outlined-adornment-amount"
              sx={{
                width: 325,
                margin: 1
              }}
              label="Valor em R$"
              name="valor"
              value={values.valor}
              onChange={handleInputChange}
              {...(errors.valor ? { error: true, helperText: errors.valor } : null)} />

            <TextField
              id="outlined-adornment-amount"
              sx={{
                width: 325,
                margin: 1
              }}
              label="Categoria"
              name="categoria"
              value={values.categoria}
              onChange={handleInputChange}
              {...(errors.categoria ? { error: true, helperText: errors.categoria } : null)} />

            <TextField
              id="outlined-adornment-amount"
              sx={{
                width: 325,
                margin: 1
              }}
              label="Data"
              name="data"
              value={values.data}
              onChange={handleInputChange}
              {...(errors.data ? { error: true, helperText: errors.data } : null)} />

            <TextField
              id="outlined-adornment-amount"
              sx={{
                width: 325,
                margin: 1
              }}
              label="Meta relacionada"
              name="meta"
              value={values.meta}
              onChange={handleInputChange}
              {...(errors.meta ? { error: true, helperText: errors.meta } : null)} />

              <TextField
              id="outlined-adornment-amount"
              sx={{
                width: 325,
                margin: 1
              }}
              label="Tipo relacionado"
              name="tipo"
              value={values.tipo}
              onChange={handleInputChange}
              {...(errors.tipo ? { error: true, helperText: errors.tipo } : null)} />

              {posts.map((post, index) => {

                return (
                  <Fragment key={index}>
                  
                    <Button variant="contained" type="submit" color="primary" sx={{ mt: 3, mb: 2 }}
                      onClick={() => { { setAction({ currentId: post._id, type: ACTION_TYPES.UPDATE }) } }}>Continuar</Button>
                  </Fragment>
  
                );
              })}

            <br></br> <br></br>
          </form>
        </center>
      </Stack>
    </Box >
  );

  const Saldo={
    saldo:0,
    ganhos:0,
    gastos:0
  }

  return (

    <Container component="main" >
      <ThemeProvider theme={theme}>
        <Container>
          <AppBar>
            <Toolbar>


              {['left'].map((anchor) => (
                <React.Fragment key={anchor}>
                  <IconButton
                    onClick={toggleDrawer(anchor, true)}
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                  >
                    <MenuIcon />
                  </IconButton>

                  <SwipeableDrawer
                    anchor={anchor}
                    open={state[anchor]}
                    onClose={toggleDrawer(anchor, false)}
                    onOpen={toggleDrawer(anchor, true)}
                  >
                    {list(anchor)}
                  </SwipeableDrawer>
                </React.Fragment>
              ))}

              <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
                BILLIE
              </Typography>
              <IconButton
                size="large"
                edge="start"
                color="inherit"

                sx={{ mr: 2 }}
              >
                <NotificationsIcon />
              </IconButton>
              <IconButton
                size="large"
                edge="start"
                color="inherit"

                sx={{ mr: 0 }}
              >
                <HelpIcon />
              </IconButton>
            </Toolbar>

            {posts.map((post, index) => {

              for (let i = 0; i < post.transacoes.length; i++) {

                if (post.transacoes[i].tipo.toUpperCase() == "GANHO" || post.transacoes[i].tipo.toUpperCase() == "GANHOS"){
                  Saldo.saldo += post.transacoes[i].valor
                  Saldo.ganhos += post.transacoes[i].valor
                }

                if (post.transacoes[i].tipo.toUpperCase() == "GASTO" || post.transacoes[i].tipo.toUpperCase() == "GASTOS"){
                  Saldo.saldo -= post.transacoes[i].valor
                  Saldo.gastos -= post.transacoes[i].valor
                }
                
              }

            })}

            <Typography variant="h6" component="div"
              sx={{
                flexGrow: 1,
                textAlign: 'center',
              }}>
              TOTAL
            </Typography>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <Card
                sx={{
                  width: 100,
                  height: 50,
                  marginTop: 2,
                  marginBottom: 2,
                  textAlign: 'center',
                }}>
                <CardContent>
                  <Typography

                    sx={{
                      fontSize: 18,
                    }}>
                    {Saldo.saldo.toFixed(2)}
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          </AppBar>
        </Container>
        <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>

        <Box
          sx={{
            display: 'flex', justifyContent: 'center',
          }}
        >
          <FormControl
            color="secondary"
            sx={{
              marginTop: 3,
              marginBottom: 1,
              width: 100,
              height: 50,
              backgroundColor: "secondary"
            }}
          >
            <InputLabel id="demo-controlled-open-select-label">Período</InputLabel>
            <Select
              labelId="demo-controlled-open-select-label"
              id="demo-controlled-open-select"
              open={open}
              onClose={handleClose}
              onOpen={handleOpen}
              value={periodo}
              label="Periodo"
              onChange={handleChange}
            >

              <MenuItem value="">
                <em>Período</em>
              </MenuItem>
              <MenuItem value={10}>Semanal</MenuItem>
              <MenuItem value={20}>Mensal</MenuItem>
              <MenuItem value={30}>Semestral</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <br></br><br></br>

        <Grid container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>

          <Grid item xs="auto" sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>

            <Box item sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>

              {['GANHOS'].map((anchor) => (
                <React.Fragment key={anchor}>

                  <Card sx={{ width: 250, height: 100, }} style={{
                    flex: 1, flexDirection: 'row',
                    backgroundColor: "#46B5A9"
                  }} onClick={toggleDrawer(anchor, true)}>
                    <Box sx={{ display: 'flex', alignItems: 'center', }}>

                      <CardContent sx={{ flex: '1' }}>
                        <NorthEastIcon fontSize="large" sx={{ color: "#fff" }} />
                        <Typography sx={{ fontSize: 18, color: "#fff" }}>
                          GANHOS&emsp;&emsp;&emsp;&emsp;{Saldo.ganhos.toFixed(2)}
                        </Typography>

                      </CardContent>
                    </Box>
                  </Card>

                  <IconButton
                    onClick={toggleDrawer(anchor, true)}
                    size="large"
                    edge="start"
                    color="secondary"
                    aria-label="menu"

                  >
                    <AddCircleIcon />
                  </IconButton>

                  <SwipeableDrawer
                    anchor="bottom"
                    open={state[anchor]}
                    onClose={toggleDrawer(anchor, false)}
                    onOpen={toggleDrawer(anchor, true)}
                  >
                    {list2(anchor)}
                  </SwipeableDrawer>
                </React.Fragment>
              ))}
            </Box>
          </Grid>

          <Grid item xs="auto" sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>

            <Box item sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>

              {['GASTOS'].map((anchor) => (
                <React.Fragment key={anchor}>

                  <Card sx={{ width: 250, height: 100, marginLeft: 1, }} onClick={toggleDrawer(anchor, true)}
                    style={{ flex: 1, flexDirection: 'row', backgroundColor: "#E57C1B" }}>

                    <CardContent>

                      <SouthWestIcon fontSize="large" sx={{ color: "#fff" }} />

                      <Typography sx={{ fontSize: 18, color: "#fff" }}>
                        GASTOS &emsp;&emsp;&emsp;&emsp;{Saldo.gastos.toFixed(2)}
                      </Typography>
                    </CardContent>
                  </Card>
                  <IconButton
                    onClick={toggleDrawer(anchor, true)}
                    size="large"
                    edge="start"
                    color="secondary"
                    aria-label="menu"
                  >
                    <AddCircleIcon />
                  </IconButton>

                  <SwipeableDrawer
                    anchor="bottom"
                    open={state[anchor]}
                    onClose={toggleDrawer(anchor, false)}
                    onOpen={toggleDrawer(anchor, true)}
                  >
                    {list2(anchor)}
                  </SwipeableDrawer>
                </React.Fragment>
              ))}

            </Box>

          </Grid>

        </Grid>

        <Container>
          <br></br><br></br>
          <Grid container
            sx={{
              marginBottom: 3,
              display: 'flex', alignItems: 'center', justifyContent: 'center'
            }}
          >
            <Grid>
              <Card
                sx={{
                  width: 100,
                  height: 100,
                  marginRight: 1,
                  marginTop: 1 
                }}
                style={{ flex: 1, flexDirection: 'row', display: 'flex', justifyContent: 'center', backgroundColor: "#f7f7f7" }}>
                <CardContent>
                  <Link to="/extrato">
                    <IconButton size="large" edge="start" sx={{marginLeft: 0.5}} style={{color: '#0FB7A4'}}>
                      <ReceiptLongIcon />
                    </IconButton></Link>
                  <Typography sx={{ fontSize: 14 }}>
                    EXTRATO
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid>
              <Card
                sx={{
                  width: 100,
                  height: 100,
                  marginRight: 1,
                  marginLeft: 1,
                  marginTop: 1 
                }}
                style={{ flex: 1, flexDirection: 'row', display: 'flex', justifyContent: 'center', backgroundColor: "#f7f7f7" }}
              >
                <CardContent>
                  <Link to="/estastistica">
                    <IconButton size="large" edge="start" sx={{marginLeft: 2.5}} style={{color: '#0FB7A4'}}>
                      <PieChartIcon />
                    </IconButton>
                    </Link>
                    
                  <Typography sx={{ fontSize: 14 }}>
                    ESTATÍSTICAS
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid>
              <Card
                sx={{
                  width: 100,
                  height: 100,
                  marginRight: 1,
                  marginTop: 1 
                }}
                style={{ flex: 1, flexDirection: 'row', display: 'flex', justifyContent: 'center', backgroundColor: "#f7f7f7" }}
              >
                <CardContent>
                  <Link to="/limite">
                    <IconButton size="large" edge="start" sx={{marginLeft: 0}} style={{color: '#0FB7A4'}}>
                      <SavingsIcon />
                    </IconButton></Link>
                  <Typography sx={{ fontSize: 14 }}>
                    LIMITES
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid>
              <Card 
              sx={{ 
                width: 100, 
                height: 100, 
                marginLeft: 1, 
                marginRight: 1, 
                marginTop: 1 }}
                style={{ flex: 1, flexDirection: 'row', display: 'flex', justifyContent: 'center', backgroundColor: "#f7f7f7" }}>
                <CardContent>
                  <Link to="/meta">
                    <IconButton size="large" edge="start" sx={{marginLeft: 0}} style={{color: '#0FB7A4'}}>
                      <AutoAwesomeIcon />
                    </IconButton>
                  </Link>
                  <Typography sx={{ fontSize: 14 }}>
                    METAS
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </ThemeProvider >
    </Container >
  );
}

export default App;