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

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

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

  const { posts, values, handleSubmit, handleInputChange, errors, validate, setAction, ACTION_TYPES } = useContext(MyContext)

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
        {['Editar Notificações', 'Editar Contas Bancárias', 'Baixar Dados', 'Tutorial', 'Feedback', 'Sobre'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <NotificationsIcon /> : <AccountBalanceWalletIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>))}
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
              <h3 sx={{ color: "#1E7677", "font-weight": "bold", "font-family": "Arial" }}>Cadastrar Ganho</h3><br></br>
            </Typography>

            <TextField
              margin="normal"
              id="outlined-name"
              label="Título"
              sx={{
                width: 325,
                margin: 1
              }}
              name="nomeNovoGanho"
              value={values.nomeNovoGanho}
              onChange={handleInputChange}
              {...(errors.nomeNovoGanho ? { error: true, helperText: errors.nomeNovoGanho } : null)} />

            <TextField
              id="outlined-adornment-amount"
              sx={{
                width: 325,
                margin: 1
              }}
              label="Valor em R$"
              name="valorNovoGanho"
              value={values.valorNovoGanho}
              onChange={handleInputChange}
              {...(errors.valorNovoGanho ? { error: true, helperText: errors.valorNovoGanho } : null)} />

            <TextField
              id="outlined-adornment-amount"
              sx={{
                width: 325,
                margin: 1
              }}
              label="Categoria"
              name="categoriaNovoGanho"
              value={values.categoriaNovoGanho}
              onChange={handleInputChange}
              {...(errors.categoriaNovoGanho ? { error: true, helperText: errors.categoriaNovoGanho } : null)} />

            <TextField
              id="outlined-adornment-amount"
              sx={{
                width: 325,
                margin: 1
              }}
              label="Data"
              name="dataNovoGanho"
              value={values.dataNovoGanho}
              onChange={handleInputChange}
              {...(errors.dataNovoGanho ? { error: true, helperText: errors.dataNovoGanho } : null)} />

            <TextField
              id="outlined-adornment-amount"
              sx={{
                width: 325,
                margin: 1
              }}
              label="Meta relacionada"
              name="metaNovoGanho"
              value={values.metaNovoGanho}
              onChange={handleInputChange}
              {...(errors.metaNovoGanho ? { error: true, helperText: errors.metaNovoGanho } : null)} />

            <br></br> <br></br>

            <Button variant="contained" type="submit" color="primary" sx={{ mt: 3, mb: 2 }}>Continuar</Button>
          </form>
        </center>
      </Stack>
    </Box >
  );

  const list3 = (anchor) => (

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

      <Stack direction='row' spacing={4} justifyContent="center"
        alignItems="center">

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
              {...(errors.metaNovoGasto ? { error: true, helperText: errors.metaNovoGasto } : null)}/>

            <br></br> <br></br>

            {posts.map((post, index) => {

              return (
                <Fragment key={index}>
                  <Button variant="contained" type="submit" color="primary"
                  onClick = {() => {setAction({currentId: post._id, type: ACTION_TYPES.UPDATE})}}
                  sx={{ mt: 3, mb: 2 }} > Continuar</Button>
                </Fragment>
              );
            })}
             
          </form>
        </center>
      </Stack>
    </Box >
  );

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
                    0,00
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          </AppBar>
        </Container>
<br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        <Container>
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
          <Grid container
            columnSpacing={{ xs: 4, sm: 10, md: 12 }}
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Box sx={{ display: 'flex', alignItems: 'center', }}>

              {['GANHOS'].map((anchor) => (
                <React.Fragment key={anchor}>

                  <Card sx={{ width: 200, height: 100, marginRight: 1, }} style={{
                    flex: 1, flexDirection: 'row',
                    backgroundColor: "#46B5A9"
                  }} onClick={toggleDrawer(anchor, true)}>
                    <Box sx={{ display: 'flex', alignItems: 'center', }}>

                      <CardContent sx={{ flex: '1' }}>
                        <NorthEastIcon fontSize="large" sx={{ color: "#fff" }} />
                        <Typography sx={{ fontSize: 18, color: "#fff" }}>
                          GANHOS
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
                    sx={{ mr: 2 }}
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

              <Box sx={{ display: 'flex', alignItems: 'center', }}>
                {['GASTOS'].map((anchor) => (
                  <React.Fragment key={anchor}>

                    <Card sx={{ width: 200, height: 100, marginLeft: 1, }} onClick={toggleDrawer(anchor, true)}
                      style={{ flex: 1, flexDirection: 'row', backgroundColor: "#E57C1B" }}>

                      <CardContent>

                        <SouthWestIcon fontSize="large" sx={{ color: "#fff" }} />

                        <Typography sx={{ fontSize: 18, color: "#fff" }}>
                          GASTOS
                        </Typography>
                      </CardContent>
                    </Card>
                    <IconButton
                      onClick={toggleDrawer(anchor, true)}
                      size="large"
                      edge="start"
                      color="secondary"
                      aria-label="menu"
                      sx={{ mr: 2 }}
                    >
                      <AddCircleIcon />
                    </IconButton>

                    <SwipeableDrawer
                      anchor="bottom"
                      open={state[anchor]}
                      onClose={toggleDrawer(anchor, false)}
                      onOpen={toggleDrawer(anchor, true)}
                    >
                      {list3(anchor)}
                    </SwipeableDrawer>
                  </React.Fragment>
                ))}
              </Box>
              </Box>
          </Grid>
          
    </Container>

    <Container>
    <br></br><br></br>
      <Box
        sx={{
          marginTop: 3,
          marginBottom: 3,
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        <Card
          sx={{
            width: 100,
            height: 100,
            marginLeft: 2,
            marginRight: 1,
          }}
          style={{ flex: 1, flexDirection: 'row', display: 'flex', justifyContent: 'center', }}>
          <CardContent>
            <Link to="/extrato"><IconButton size="large">
              <ReceiptLongIcon
                edge="start"
                sx={{ margin: 1, }}
              />
            </IconButton></Link>
            <Typography sx={{ fontSize: 14 }}>
              EXTRATO
            </Typography>
          </CardContent>
        </Card>
        <Card
          sx={{
            width: 100,
            height: 100,
            marginLeft: 1,
            marginRight: 1,
          }}
          style={{ flex: 1, flexDirection: 'row', display: 'flex', justifyContent: 'center', }}
        >
          <CardContent>
            <Link to="/estastistica"><IconButton size="large">
              <PieChartIcon
                edge="start"
                sx={{ margin: 1, }} />
            </IconButton></Link>
            <Typography sx={{ fontSize: 14 }}>
              ESTATÍSTICAS
            </Typography>
          </CardContent>
        </Card>

        <Card
          sx={{
            width: 100,
            height: 100,
            marginLeft: 1,
            marginRight: 1,
          }}
          style={{ flex: 1, flexDirection: 'row', display: 'flex', justifyContent: 'center', }}
        >
          <CardContent>
            <Link to="/limite"><IconButton size="large">
              <PieChartIcon
                edge="start"
                sx={{ margin: 1, }} />
            </IconButton></Link>
            <Typography sx={{ fontSize: 14 }}>
              LIMITES
            </Typography>
          </CardContent>
        </Card>

        <Card sx={{ width: 100, height: 100, marginLeft: 1, marginRight: 2, }}
          style={{ flex: 1, flexDirection: 'row', display: 'flex', justifyContent: 'center', }}>
          <CardContent>

            <Link to="/meta"><IconButton size="large">
              <AutoAwesomeIcon
                edge="start"
                sx={{ margin: 1, }} />
            </IconButton></Link>

            <Typography sx={{ fontSize: 14 }}>
              METAS
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Container>
      </ThemeProvider >
    </Container >
  );
}

export default App;