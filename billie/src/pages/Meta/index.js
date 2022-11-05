import * as React from 'react';
import { Fragment, useContext } from 'react';
import MyContext from '../../contexts/MyContext'

import PropTypes from 'prop-types';
import { Global } from '@emotion/react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { grey, orange } from '@mui/material/colors';
import { Divider, Button, Box, Typography, IconButton, SwipeableDrawer, Container, Card, CardContent, Stack, TextField } from '@mui/material';
import { Link } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SchoolIcon from '@mui/icons-material/School';
import DriveEtaIcon from '@mui/icons-material/DriveEta';
import AddIcon from '@mui/icons-material/Add';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import ComputerIcon from '@mui/icons-material/Computer';
import VerifiedIcon from '@mui/icons-material/Verified';
import CreateIcon from '@mui/icons-material/Create';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import CloseIcon from '@mui/icons-material/Close';

const drawerBleeding = 86;

const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'light' ? '#fff' : orange[800],
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

const Puller = styled(Box)(({ theme }) => ({
  width: 60,
  height: 4,
  backgroundColor: theme.palette.mode === 'light' ? grey[300] : grey[900],
  borderRadius: 25,
  position: 'absolute',
  top: 8,
  left: 'calc(50% - 25px)',
}));

const Item = styled(Card)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

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

const Meta = (props) => {

  const { posts, values, handleSubmit, handleInputChange, errors, validate, setAction, ACTION_TYPES} = useContext(MyContext)

  const [state, setState] = React.useState(false);

  let valor1=0
  let valor2=0
  let valor3=0
  let valor4=0

  const valor = {

    valor1 : posts.map((post) => { 

      if (JSON.stringify(post.metaNovoGasto) !== ''){

        if (JSON.stringify(post.metaNovoGasto) == JSON.stringify(post.meta1)){
          
        if (valor1 != null ){
          valor1 += post.valorNovoGasto

        }else{
          valor1 = post.valorNovoGasto
        }
        
         let aux = post.valor1

         valor1 = (valor1 * 100) / aux
        }             
      }

      return valor1.toFixed(2)
    }),

    valor2 : posts.map((post) => { 

      if (JSON.stringify(post.metaNovoGasto) !== ''){

        if (JSON.stringify(post.metaNovoGasto) == JSON.stringify(post.meta2)){
          
        if (valor2 != null ){
          valor2 += post.valorNovoGasto

        }else{
          valor2 = post.valorNovoGasto
        }
        
         let aux = post.valor2

         valor2 = (valor2 * 100) / aux
      
        }             
      }
    
      return valor2.toFixed(2)
    }),

    valor3 : posts.map((post, index) => { 

      if (JSON.stringify(post.metaNovoGasto) !== ''){

        if (JSON.stringify(post.metaNovoGasto) == JSON.stringify(post.meta3)){
          
        if (valor3 != null ){
          valor3 += post.valorNovoGasto

        }else{
          valor3 = post.valorNovoGasto
        }
        
         let aux = post.valor3

         valor3 = (valor3 * 100) / aux
      
        }             
      }

      return valor3.toFixed(2)
    }),

    valor4 : posts.map((post, index) => { 

      if (JSON.stringify(post.metaNovoGasto) !== ''){

        if (JSON.stringify(post.metaNovoGasto) == JSON.stringify(post.metaNova)){
          
        if (valor4 != null ){
          valor4 += post.valorNovoGasto

        }else{
          valor4 = post.valorNovoGasto
        }
        
         let aux = post.valorNovo

         valor4 = (valor4 * 100) / aux
      
        }             
      }

      return valor4.toFixed(2)
    }),
  }

  const toggleDrawer = (anchor, open) => (event) => {

    if (
      event && event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (

    <Box role="presentation">

      {posts.map((post, index) => {

        if (post.meta1 != '') {
          return (
            <Fragment key={index}>
              <StyledBox
                sx={{
                  position: 'absolute', top: -260, borderTopLeftRadius: 12, borderTopRightRadius: 12, visibility: 'visible', right: 0,
                  left: 0,
                }}>

                <Puller />

                <IconButton onClick={toggleDrawer(anchor, false)}>
                  <CloseIcon />
                </IconButton>

                <br></br>
                <Stack direction='row' spacing={4} justifyContent="center"
                  alignItems="center">

                  <center>
                    <Typography sx={{ color: "#00C8C0" }}>
                      <h2>{valor.valor1}%</h2>
                    </Typography>
                  </center>

                  <Typography  variant="body2"  sx={{color:"#fff"}}>
                  {['Editar'].map((anchor) => (
                          
                      <React.Fragment key={anchor}>

                      <IconButton onClick={toggleDrawer(anchor, true)} color="primary" aria-label="Create" fontSize="large" backgroundColor="skyblue">
                        <CreateIcon sx={{ fontSize: 40, left: 69, color: grey[400], }} />
                      </IconButton>

                        <br></br><br></br>

                        <SwipeableDrawer
                        anchor="bottom"
                        open={state[anchor]}

                        onOpen={toggleDrawer(anchor, true)}>
                        {list6(anchor)}
                      </SwipeableDrawer>
                      </React.Fragment>
                  ))}
                  </Typography>

                </Stack>

                <center>
                  <h1>{post.meta1}</h1>

                  <Box sx={{ flexGrow: 1 }}>

                    <BorderLinearProgress variant="determinate" value={valor.valor1} />
                  </Box>

                  <Typography sx={{ color: "#00C8C0" }}>
                    <h2>Suas Conquistas</h2>
                  </Typography>

                  <Box sx={{
                    display: 'flex', alignItems: 'center', width: 'fit-content', border: (theme) => `1px solid ${theme.palette.divider}`,
                    borderRadius: 1, bgcolor: 'background.paper', color: 'text.secondary',
                    '& svg': {
                      m: 2,
                    },
                    '& hr': {
                      mx: 2.5,
                    },
                  }}>
                    <IconButton color="primary" aria-label="Verified" fontSize="large" backgroundColor="skyblue">
                      <VerifiedIcon sx={{ fontSize: 50, left: 69, color: "#FF9800", }} />
                    </IconButton>
                    <Divider orientation="vertical" flexItem />
                    <Stack direction={{ xs: 'column' }} spacing={{ xs: 35, sm: 4, md: 1 }}>

                      <Typography><h3>{post.nomeNovoGasto}</h3>

                        <h6>R$ {post.valor1}  {post.dataNovoGasto} </h6></Typography>

                    </Stack>
                  </Box>
                </center>
              </StyledBox>
            </Fragment>
          );
        }
      })}
    </Box >
  );

  const list2 = (anchor) => (

    <Box role="presentation">

      {posts.map((post, index) => {
        if (post.meta2 != '') {

          return (

            <Fragment key={index}>
              <StyledBox
                sx={{
                  position: 'absolute', top: -260, borderTopLeftRadius: 8, borderTopRightRadius: 8, visibility: 'visible', right: 0,
                  left: 0,
                }}>

                <Puller />

                <IconButton onClick={toggleDrawer(anchor, false)}>
                  <CloseIcon />
                </IconButton>

                <br></br>
                <Stack direction='row' spacing={4} justifyContent="center"
                  alignItems="center">

                  <center>
                    <Typography sx={{ color: "#00C8C0" }}>
                      <h2>{valor.valor2}%</h2>
                    </Typography>
                  </center>
                 
                  <Typography  variant="body2"  sx={{color:"#fff"}}>
                  {['Editar'].map((anchor) => (
                          
                      <React.Fragment key={anchor}>

                      <IconButton onClick={toggleDrawer(anchor, true)} color="primary" aria-label="Create" fontSize="large" backgroundColor="skyblue">
                        <CreateIcon sx={{ fontSize: 40, left: 69, color: grey[400], }} />
                      </IconButton>

                        <br></br><br></br>

                        <SwipeableDrawer
                        anchor="bottom"
                        open={state[anchor]}

                        onOpen={toggleDrawer(anchor, true)}>
                        {list7(anchor)}
                      </SwipeableDrawer>
                      </React.Fragment>
                  ))}
                  </Typography>
                </Stack>
                <center>
                  <h1>{post.meta2}</h1>

                  <Box sx={{ flexGrow: 1 }}>

                    <BorderLinearProgress variant="determinate" value={valor.valor2} />
                  </Box>

                  <Typography sx={{ color: "#00C8C0" }}>
                    <h2>Suas Conquistas</h2>
                  </Typography>

                  <Box sx={{
                    display: 'flex', alignItems: 'center', width: 'fit-content', border: (theme) => `1px solid ${theme.palette.divider}`,
                    borderRadius: 1, bgcolor: 'background.paper', color: 'text.secondary',
                    '& svg': {
                      m: 2,
                    },
                    '& hr': {
                      mx: 2,

                    },
                  }}>
                    <IconButton color="primary" aria-label="Verified" fontSize="large" backgroundColor="skyblue">
                      <VerifiedIcon sx={{ fontSize: 50, left: 69, color: "#FF9800", }} />
                    </IconButton>
                    
                    <Divider orientation="vertical" flexItem />
                    <Stack direction={{ xs: 'column' }} spacing={{ xs: 35, sm: 4, md: 1 }}>
                      <h3>{post.nomeNovoGasto} </h3>

                      <h6>{post.valor2}  {post.dataNovoGasto}  </h6>

                    </Stack>
                  </Box>
                </center>
              </StyledBox>
            </Fragment>
          );
        }
      })}

    </Box>
  );

  const list3 = (anchor) => (

    <Box role="presentation">

      {posts.map((post, index) => {

        if (post.meta3 != '') {
     
          return (

            <Fragment key={index}>
            
              <StyledBox
                sx={{
                  position: 'absolute', top: -260, borderTopLeftRadius: 8, borderTopRightRadius: 8, visibility: 'visible', right: 0,
                  left: 0,
                }}>
                <Puller />

                <IconButton onClick={toggleDrawer(anchor, false)}>
                  <CloseIcon />
                </IconButton>

                <br></br>
                <Stack direction='row' spacing={4} justifyContent="center"
                  alignItems="center">
                  <center>
                    <Typography sx={{ color: "#00C8C0" }}>
                  <h2>{valor.valor3}%</h2>
                    </Typography>
                  </center>
                  
                  <Typography  variant="body2"  sx={{color:"#fff"}}>
                  {['Editar'].map((anchor) => (
                          
                      <React.Fragment key={anchor}>

                      <IconButton onClick={toggleDrawer(anchor, true)} color="primary" aria-label="Create" fontSize="large" backgroundColor="skyblue">
                        <CreateIcon sx={{ fontSize: 40, left: 69, color: grey[400], }} />
                      </IconButton>

                        <br></br><br></br>

                        <SwipeableDrawer
                        anchor="bottom"
                        open={state[anchor]}

                        onOpen={toggleDrawer(anchor, true)}>
                        {list8(anchor)}
                      </SwipeableDrawer>
                      </React.Fragment>
                  ))}
                  </Typography>
                </Stack>
                <center>
                  <h1>{post.meta3}</h1>

                  <Box sx={{ flexGrow: 1 }}>

                    <BorderLinearProgress variant="determinate" value={valor.valor3} />
                  </Box>

                  <Typography sx={{ color: "#00C8C0" }}>
                    <h2>Suas Conquistas</h2>
                  </Typography>

                  <Box sx={{
                    display: 'flex', alignItems: 'center', width: 'fit-content', border: (theme) => `1px solid ${theme.palette.divider}`,
                    borderRadius: 1, bgcolor: 'background.paper', color: 'text.secondary',
                    '& svg': {
                      m: 2,
                    },
                    '& hr': {
                      mx: 2,

                    },
                  }}>
                    <IconButton color="primary" aria-label="Verified" fontSize="large" backgroundColor="skyblue">
                      <VerifiedIcon sx={{ fontSize: 50, left: 69, color: "#FF9800", }} />
                    </IconButton>
                    <Divider orientation="vertical" flexItem />
                    <Stack direction={{ xs: 'column' }} spacing={{ xs: 35, sm: 4, md: 1 }}>
                      <h3>{post.nomeNovoGasto}</h3>

                      <h6>{post.valor3}  {post.dataNovoGasto} </h6>

                    </Stack>
                  </Box>
                </center>
              </StyledBox>
            </Fragment>
          );
        }
      })}
    </Box>
  );

  const list4 = (anchor) => (

    <Box role="presentation">

      <StyledBox
        sx={{
          position: 'absolute', top: -260, borderTopLeftRadius: 8, borderTopRightRadius: 8, visibility: 'visible', right: 0,
          left: 0,
        }}>
        <Puller />

        <IconButton onClick={toggleDrawer(anchor, false)}>
          <CloseIcon />
        </IconButton>

        <br></br>
        <Stack direction='row' spacing={4} justifyContent="center"
          alignItems="center">
          <center>
            <Typography sx={{ color: "#00C8C0" }}>
              <h2>75%</h2>
            </Typography>
          </center>
          <IconButton color="primary" aria-label="Create" fontSize="large" backgroundColor="skyblue">
            <CreateIcon sx={{ fontSize: 40, left: 69, color: grey[400], }} />
          </IconButton>
        </Stack>
        <center>
          <h1>HEARTSTOPPER</h1>

          <Box sx={{ flexGrow: 1 }}>

            <BorderLinearProgress variant="determinate" value={75} />
          </Box>

          <Typography sx={{ color: "#00C8C0" }}>
            <h2>Suas Conquistas</h2>
          </Typography>

          <Box sx={{
            display: 'flex', alignItems: 'center', width: 'fit-content', border: (theme) => `1px solid ${theme.palette.divider}`,
            borderRadius: 1, bgcolor: 'background.paper', color: 'text.secondary',
            '& svg': {
              m: 2,
            },
            '& hr': {
              mx: 2,

            },
          }}>
            <IconButton color="primary" aria-label="Verified" fontSize="large" backgroundColor="skyblue">
              <VerifiedIcon sx={{ fontSize: 50, left: 69, color: "#FF9800", }} />
            </IconButton>
            <Divider orientation="vertical" flexItem />
            <Stack direction={{ xs: 'column' }} spacing={{ xs: 35, sm: 4, md: 1 }}>
              <h3>Livro</h3>

              <h6>R$ 49,90  04/11/22  </h6>

            </Stack>
          </Box>
        </center>
      </StyledBox>
    </Box>
  );

  const list5 = (anchor) => (

    <Box role="presentation">

      <StyledBox
        sx={{
          position: 'absolute', top: -260, borderTopLeftRadius: 8, borderTopRightRadius: 8, visibility: 'visible', right: 0,
          left: 0,
        }}>
        <Puller />

        <IconButton onClick={toggleDrawer(anchor, false)}>
          <CloseIcon />
        </IconButton>

        <Stack direction='row' spacing={4} justifyContent="center"
          alignItems="center">

          <center>

            <form noValidate component="legend" sx={{ mt: 1 }} onSubmit={handleSubmit}>

              <br></br>

              <h3 sx={{ color: "#1E7677", "font-weight": "bold", "font-family": "Arial" }}>Qual a sua nova meta?</h3><br></br>

              <TextField

                margin="normal"
                id="outlined-name"
                label="Nova Meta"
                sx={{ width: 350 }}
                name="metaNova"
                value={values.metaNova}
                onChange={handleInputChange}
                {...(errors.metaNova ? { error: true, helperText: errors.metaNova } : null)} />

              <TextField
                id="outlined-adornment-amount"
                sx={{ width: 350 }}
                label="Valor em R$"
                name="valorNovo"
                value={values.valorNovo}
                onChange={handleInputChange}
                {...(errors.valorNovo ? { error: true, helperText: errors.valorNovo } : null)} />

              <br></br> <br></br>

              {posts.map((post, index) => {

                return (
                  <Fragment key={index}>
                    <Button variant="contained" type="submit" color="primary" sx={{ mt: 3, mb: 2 }}     
                      onClick = { () => {{setAction({currentId: post._id, type: ACTION_TYPES.UPDATE})} }}>Continuar</Button>
                  </Fragment>
                  
                );})}
            </form>
          </center>
        </Stack>

      </StyledBox>
    </Box>
  );

  const list6 = (anchor) => (

    <Box role="presentation">

      <StyledBox
        sx={{
          position: 'absolute', top: -260, borderTopLeftRadius: 8, borderTopRightRadius: 8, visibility: 'visible', right: 0,
          left: 0,
        }}>
        <Puller />

        <IconButton onClick={toggleDrawer(anchor, false)}>
          <CloseIcon />
        </IconButton>

        <Stack direction='row' spacing={4} justifyContent="center"
          alignItems="center">

          <center>

            <form noValidate component="legend" sx={{ mt: 1 }} onSubmit={handleSubmit}>

              <br></br>

              <h3 sx={{ color: "#1E7677", "font-weight": "bold", "font-family": "Arial" }}>Digite o que você deseja altera na sua meta?</h3><br></br>

              <TextField

                margin="normal"
                id="outlined-name"
                label="Alterar Meta"
                sx={{ width: 350 }}
                name="meta1"
                value={values.meta1}
                onChange={handleInputChange}
                {...(errors.meta1 ? { error: true, helperText: errors.meta1 } : null)} />

              <TextField
                id="outlined-adornment-amount"
                sx={{ width: 350 }}
                label="Alterar Valor em R$"
                name="valor1"
                value={values.valor1}
                onChange={handleInputChange}
                {...(errors.valor1 ? { error: true, helperText: errors.valor1 } : null)} />

              <br></br> <br></br>

                {posts.map((post, index) => {

                  return (
                    <Fragment key={index}>
              <Button variant="contained" type="submit" color="primary"
              
              onClick = { () => {{setAction({currentId: post._id, type: ACTION_TYPES.UPDATE})} }}
            sx={{ mt: 3, mb: 2 }} > Continuar</Button>
            </Fragment>
            );})}

            </form>
          </center>
        </Stack>
      </StyledBox>
    </Box>
  );

  const list7 = (anchor) => (

    <Box role="presentation">

      <StyledBox
        sx={{
          position: 'absolute', top: -260, borderTopLeftRadius: 8, borderTopRightRadius: 8, visibility: 'visible', right: 0,
          left: 0,
        }}>
        <Puller />

        <IconButton onClick={toggleDrawer(anchor, false)}>
          <CloseIcon />
        </IconButton>

        <Stack direction='row' spacing={4} justifyContent="center"
          alignItems="center">

          <center>

            <form noValidate component="legend" sx={{ mt: 1 }} onSubmit={handleSubmit}>

              <br></br>

              <h3 sx={{ color: "#1E7677", "font-weight": "bold", "font-family": "Arial" }}>Digite o que você deseja altera na sua meta?</h3><br></br>

              <TextField

                margin="normal"
                id="outlined-name"
                label="Alterar Meta"
                sx={{ width: 350 }}
                name="meta2"
                value={values.meta2}
                onChange={handleInputChange}
                {...(errors.meta2 ? { error: true, helperText: errors.meta2 } : null)} />

              <TextField
                id="outlined-adornment-amount"
                sx={{ width: 350 }}
                label="Alterar Valor em R$"
                name="valor3"
                value={values.valor3}
                onChange={handleInputChange}
                {...(errors.valor3 ? { error: true, helperText: errors.valor3 } : null)} />

              <br></br> <br></br>

                {posts.map((post, index) => {

                  return (
                    <Fragment key={index}>
              <Button variant="contained" type="submit" color="primary"
              
              onClick = { () => {{setAction({currentId: post._id, type: ACTION_TYPES.UPDATE})} }}
            sx={{ mt: 3, mb: 2 }} > Continuar</Button>
            </Fragment>
            );})}

            </form>
          </center>
        </Stack>

      </StyledBox>
    </Box>
  );

  const list8 = (anchor) => (

    <Box role="presentation">

      <StyledBox
        sx={{
          position: 'absolute', top: -260, borderTopLeftRadius: 8, borderTopRightRadius: 8, visibility: 'visible', right: 0,
          left: 0,
        }}>
        <Puller />

        <IconButton onClick={toggleDrawer(anchor, false)}>
          <CloseIcon />
        </IconButton>

        <Stack direction='row' spacing={4} justifyContent="center"
          alignItems="center">

          <center>

            <form noValidate component="legend" sx={{ mt: 1 }} onSubmit={handleSubmit}>

              <br></br>

              <h3 sx={{ color: "#1E7677", "font-weight": "bold", "font-family": "Arial" }}>Digite o que você deseja altera na sua meta?</h3><br></br>

              <TextField

                margin="normal"
                id="outlined-name"
                label="Alterar Meta"
                sx={{ width: 350 }}
                name="meta3"
                value={values.meta3}
                onChange={handleInputChange}
                {...(errors.meta3 ? { error: true, helperText: errors.meta3 } : null)} />

              <TextField
                id="outlined-adornment-amount"
                sx={{ width: 350 }}
                label="Alterar Valor em R$"
                name="valor3"
                value={values.valor3}
                onChange={handleInputChange}
                {...(errors.valor3 ? { error: true, helperText: errors.valor3 } : null)} />

              <br></br> <br></br>

                {posts.map((post, index) => {

                  return (
                    <Fragment key={index}>
              <Button variant="contained" type="submit" color="primary"
              
              onClick = { () => {{setAction({currentId: post._id, type: ACTION_TYPES.UPDATE})} }}
            sx={{ mt: 3, mb: 2 }} > Continuar</Button>
            </Fragment>
            );})}

            </form>
          </center>
        </Stack>

      </StyledBox>
    </Box>
  );

  const list9 = (anchor) => (

    <Box role="presentation">

      <StyledBox
        sx={{
          position: 'absolute', top: -260, borderTopLeftRadius: 8, borderTopRightRadius: 8, visibility: 'visible', right: 0,
          left: 0,
        }}>
        <Puller />

        <IconButton onClick={toggleDrawer(anchor, false)}>
          <CloseIcon />
        </IconButton>

        <Stack direction='row' spacing={4} justifyContent="center"
          alignItems="center">

          <center>

            <form noValidate component="legend" sx={{ mt: 1 }} onSubmit={handleSubmit}>

              <br></br>

              <h3 sx={{ color: "#1E7677", "font-weight": "bold", "font-family": "Arial" }}>Digite o que você deseja altera na sua meta?</h3><br></br>

              <TextField

                margin="normal"
                id="outlined-name"
                label="Alterar Meta"
                sx={{ width: 350 }}
                name="metaNova"
                value={values.metaNova}
                onChange={handleInputChange}
                {...(errors.metaNova ? { error: true, helperText: errors.metaNova } : null)} />

              <TextField
                id="outlined-adornment-amount"
                sx={{ width: 350 }}
                label="Alterar Valor em R$"
                name="valorNovo"
                value={values.valorNovo}
                onChange={handleInputChange}
                {...(errors.valorNovo ? { error: true, helperText: errors.valorNovo } : null)} />

              <br></br> <br></br>

              {posts.map((post, index) => {

                return (
                  <Fragment key={index}>
                    <Button variant="contained" type="submit" color="primary"
                    onClick = {() => {setAction({currentId: post._id, type: ACTION_TYPES.UPDATE})}}
                    sx={{ mt: 3, mb: 2 }} > Continuar</Button>
                  </Fragment>
                );})}

            </form>
          </center>
        </Stack>

      </StyledBox>
    </Box>
  );

  return (

    <div>
      <Container maxWidth="sm">
        <ThemeProvider theme={theme}>

          <br></br>
          <Stack direction="row" spacing={4}>
            <Card sx={{ maxWidth: 45, height: 40 }} style={{ borderRadius: 13 }}>
              <Link to="/pag_inicial">
                <IconButton color="primary" aria-label="ArrowBack" fontSize="large" backgroundColor="skyblue">
                  <ArrowBackIcon sx={{ color: "#00C8C0" }} />
                </IconButton>
              </Link>
            </Card>
            <h1>METAS</h1>
            <br></br><br></br><br></br><br></br>
          </Stack>

          <Stack direction="row" spacing={2}>
            <Item>
              <CardContent>

                <Typography variant="body2" color="text.secondary">

                  {['Add'].map((anchor) => (
                    <React.Fragment key={anchor}>

                      <br></br><br></br><br></br><br></br>
                      <IconButton onClick={toggleDrawer(anchor, true)} color="primary" aria-label="School" fontSize="large"
                        backgroundColor="skyblue" >
                        <AddIcon />
                      </IconButton>

                      <br></br><br></br><br></br><br></br>

                      <Button sx={{ color: "black", "font-weight": "bold" }} onClick={toggleDrawer(anchor, true)}>{anchor}</Button>

                      <SwipeableDrawer
                        anchor="bottom"
                        open={state[anchor]}

                        onOpen={toggleDrawer(anchor, true)}>
                        {list5(anchor)}
                      </SwipeableDrawer>

                    </React.Fragment>))}
                </Typography>

              </CardContent>
            </Item>

            {posts.map((post, index) => {

              if (post.meta1 != '') {

                return (
                  <Fragment key={index}>

                    <Item>
                      <CardContent>

                        <Typography gutterBottom variant="h5" component="div" sx={{ color: "#FF9800" }}>
                         {valor.valor1}%
                        </Typography>

                        <Typography variant="body2" color="text.secondary">

                          {[JSON.stringify(post.meta1)].map((anchor) => (
                            <React.Fragment key={anchor}>

                              <IconButton onClick={toggleDrawer(anchor, true)} color="primary" aria-label="School" fontSize="large"
                                backgroundColor="skyblue" >
                                <SchoolIcon sx={{ fontSize: 90 }} />
                              </IconButton>

                              <br></br><br></br>

                              <Button sx={{ color: "black", "font-weight": "bold" }} onClick={toggleDrawer(anchor, true)}>{anchor}</Button>

                              <SwipeableDrawer
                                anchor="bottom"
                                open={state[anchor]}
                                onClose={toggleDrawer(anchor, false)}
                                onOpen={toggleDrawer(anchor, true)}>
                                {list(anchor)}
                              </SwipeableDrawer>

                            </React.Fragment>))}
                        </Typography>
                      </CardContent>
                    </Item>
                  </Fragment>
                );
              }
            })}

            {posts.map((post, index) => {

              if (post.meta2 != '') {
                return (
                  <Fragment key={index}>

                    <Item>
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div" sx={{ color: "#00C8C0" }}>
                        {valor.valor2}%
                        </Typography>

                        <Typography variant="body2" color="text.secondary">
                          {[JSON.stringify(post.meta2)].map((anchor) => (
                            <React.Fragment key={anchor}>

                              <IconButton onClick={toggleDrawer(anchor, true)} color="primary" aria-label="DriveEta" fontSize="large"
                                backgroundColor="skyblue" >
                                <DriveEtaIcon sx={{ fontSize: 90 }} />
                              </IconButton>

                              <br></br><br></br>

                              <Button sx={{ color: "black", "font-weight": "bold" }} onClick={toggleDrawer(anchor, true)}>{anchor}</Button>

                              <SwipeableDrawer
                                style={{ borderRadius: 25 }}
                                anchor="bottom"
                                open={state[anchor]}
                                onClose={toggleDrawer(anchor, false)}
                                onOpen={toggleDrawer(anchor, true)}>
                                {list2(anchor)}
                              </SwipeableDrawer>
                            </React.Fragment>))}
                        </Typography>
                      </CardContent>
                    </Item>
                  </Fragment>
                );
              }
            })}

            {posts.map((post, index) => {

              if (post.meta3 != '') {
                
                return (

                  <Fragment key={post}>

                    <Item>
                      <CardContent>
                     
                        <Typography gutterBottom variant="h5" component="div" sx={{  color: "#FF9800"  }}>
                        {valor.valor3}%
                        </Typography>

                        <Typography variant="body2" color="text.secondary">
                          {[JSON.stringify(post.meta3)].map((anchor) => (
                            <React.Fragment key={anchor}>

                              <IconButton onClick={toggleDrawer(anchor, true)} color="primary" aria-label="DriveEta" fontSize="large"
                                backgroundColor="skyblue" >
                                <ComputerIcon sx={{ fontSize: 90 }} />
                              </IconButton>

                              <br></br><br></br>

                              <Button sx={{ color: "black", "font-weight": "bold" }} onClick={toggleDrawer(anchor, true)}>{anchor}</Button>

                              <SwipeableDrawer
                                style={{ borderRadius: 25 }}
                                anchor="bottom"
                                open={state[anchor]}
                                onClose={toggleDrawer(anchor, false)}
                                onOpen={toggleDrawer(anchor, true)}>
                                {list3(anchor)}
                              </SwipeableDrawer>
                            </React.Fragment>))}
                        </Typography>
                      </CardContent>
                    </Item>

                  </Fragment>
                );
              }
            })}

            {posts.map((post, index) => {

              if (post.metaNova != '') {

                return (
                  <Fragment key={index}>

                    <Item>
                      <CardContent>

                        <Typography gutterBottom variant="h5" component="div" sx={{ color: "#00C8C0"}}>
                       {valor.valor4}%
                        </Typography>

                        <Typography variant="body2" color="text.secondary">

                          {[JSON.stringify(post.metaNova)].map((anchor, index) => (
                          
                            <div>
                              <IconButton onClick={toggleDrawer(anchor, true)} color="primary" aria-label="School" fontSize="large"
                                backgroundColor="skyblue" >
                                <SchoolIcon sx={{ fontSize: 90 }} />
                              </IconButton>

                              <br></br><br></br>

                              <Button sx={{ color: "black", "font-weight": "bold" }} onClick={toggleDrawer(anchor, true)}>{anchor}</Button>

                              <React.Fragment key={index} >
                              <SwipeableDrawer
                                anchor="bottom"
                                open={state[anchor]}
                                onClose={toggleDrawer(anchor, false)}
                                onOpen={toggleDrawer(anchor, true)}>
                                <Box
                                  role="presentation"
                                 > 
                              
                                    <StyledBox
                                      sx={{
                                        position: 'absolute', top: -260, borderTopLeftRadius: 8, borderTopRightRadius: 8, visibility: 'visible', right: 0,
                                        left: 0,
                                      }}>
                                      <Puller />

                                      <IconButton onClick={toggleDrawer(anchor, false)}>
                                      <CloseIcon />
                                    </IconButton>

                                      <br></br>
                                      <Stack direction='row' spacing={4} justifyContent="center"
                                        alignItems="center">
                                        <center>
                                          <Typography sx={{ color: "#00C8C0" }}>
                                            <h2>{valor.valor4}%</h2>
                                          </Typography>
                                        </center>
                                        <Typography  variant="body2"  sx={{color:"#fff"}}>
                                        {['Editar'].map((anchor) => (
                                                
                                            <React.Fragment key={anchor}>
                      
                                            <IconButton onClick={toggleDrawer(anchor, true)} color="primary" aria-label="Create" fontSize="large" backgroundColor="skyblue">
                                              <CreateIcon sx={{ fontSize: 40, left: 69, color: grey[400], }} />
                                            </IconButton>
                      
                                              <br></br><br></br>
                      
                                              <SwipeableDrawer
                                              anchor="bottom"
                                              open={state[anchor]}
                      
                                              onOpen={toggleDrawer(anchor, true)}>
                                              {list9(anchor)}
                                            </SwipeableDrawer>
                                            </React.Fragment>
                                        ))}
                                        </Typography>
                                      </Stack>
                                      <center>

                                        <h1>{post.metaNova}</h1>

                                        <Box sx={{ flexGrow: 1 }}>

                                          <BorderLinearProgress variant="determinate" value= {valor.valor4} />
                                        </Box>

                                        <Typography sx={{ color: "#00C8C0" }}>
                                          <h2>Suas Conquistas</h2>
                                        </Typography>

                                        <Box sx={{
                                          display: 'flex', alignItems: 'center', width: 'fit-content', border: (theme) => `1px solid ${theme.palette.divider}`,
                                          borderRadius: 1, bgcolor: 'background.paper', color: 'text.secondary',
                                          '& svg': {
                                            m: 2,
                                          },
                                          '& hr': {
                                            mx: 2,

                                          },
                                        }}>
                                          <IconButton color="primary" aria-label="Verified" fontSize="large" backgroundColor="skyblue">
                                            <VerifiedIcon sx={{ fontSize: 50, left: 69, color: "#FF9800", }} />
                                          </IconButton>
                                          <Divider orientation="vertical" flexItem />
                                          <Stack direction={{ xs: 'column' }} spacing={{ xs: 35, sm: 4, md: 1 }}>
                                            <h3>Aulas teóricas </h3>

                                            <h6>{post.valorNovo}  20/06/22  </h6>

                                          </Stack>
                                        </Box>
                                      </center>
                                    </StyledBox>
                                </Box>
                              </SwipeableDrawer>
                              </React.Fragment>
                              </div>

                            ))}
                        </Typography>
                      </CardContent>
                    </Item>
                  </Fragment>
                );
              }
            })}

          </Stack>
          <CssBaseline />

          <Typography>
            <h2>METINHAS</h2>
          </Typography>

          <Card sx={{ maxWidth: 400, height: 175, marginRight: 1, }} style={{ flex: 1 }}>


            <CardContent>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 1, sm: 2, md: 4 }}>

                {['HEARTSTOPPER'].map((anchor) => (
                  <React.Fragment key={anchor} >

                    <IconButton onClick={toggleDrawer(anchor, true)} color="primary" aria-label="AutoStories" fontSize="large"
                      backgroundColor="skyblue" >
                      <AutoStoriesIcon sx={{ fontSize: 90 }} />
                    </IconButton>

                    <center>
                      <Button sx={{ color: "black", "font-weight": "bold", fontSize: 18 }} onClick={toggleDrawer(anchor, true)}>{anchor}</Button>

                      <Typography>
                        <Button sx={{ color: "#FF9800", "font-weight": "bold", fontSize: 12 }} onClick={toggleDrawer(anchor, true)}>R$54,30 - 90%</Button>
                      </Typography>

                      <Typography>
                        <Button sx={{ color: "#076D6D", "font-weight": "bold", fontSize: 10 }} onClick={toggleDrawer(anchor, true)}>Categoria: Leitura</Button>
                      </Typography>
                    </center>

                    <SwipeableDrawer
                      style={{ borderRadius: 25 }}
                      anchor="bottom"
                      open={state[anchor]}
                      onClose={toggleDrawer(anchor, false)}
                      onOpen={toggleDrawer(anchor, true)}>
                      {list4(anchor)}
                    </SwipeableDrawer>
                  </React.Fragment>))}

              </Stack>
            </CardContent>
          </Card>

          <Typography>
            <h2>METAS</h2>
          </Typography>

          <Card sx={{ maxWidth: 400, height: 175, marginRight: 1, }} style={{ flex: 1, }}>
            <CardContent>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 1, sm: 2, md: 4 }}>

                {['COMPUTADOR'].map((anchor) => (
                  <React.Fragment key={anchor} >

                    <IconButton onClick={toggleDrawer(anchor, true)} color="primary" aria-label="Computer" fontSize="large"
                      backgroundColor="skyblue" >
                      <ComputerIcon sx={{ fontSize: 90 }} />
                    </IconButton>

                    <center>
                      <Button sx={{ color: "black", "font-weight": "bold", fontSize: 18 }} onClick={toggleDrawer(anchor, true)}>{anchor}</Button>

                      <Typography>
                        <Button sx={{ color: "#00C8C0", "font-weight": "bold", fontSize: 12 }} onClick={toggleDrawer(anchor, true)}>R$7,000 - 42%</Button>
                      </Typography>

                      <Typography>
                        <Button sx={{ color: "#076D6D", "font-weight": "bold", fontSize: 10 }} onClick={toggleDrawer(anchor, true)}>Categoria: Eletrônicos</Button>
                      </Typography>
                    </center>

                    <SwipeableDrawer
                      style={{ borderRadius: 25 }}
                      anchor="bottom"
                      open={state[anchor]}
                      onClose={toggleDrawer(anchor, false)}
                      onOpen={toggleDrawer(anchor, true)}>
                      {list3(anchor)}
                    </SwipeableDrawer>
                  </React.Fragment>))}

              </Stack>
            </CardContent>
          </Card>

          <br></br>

          <Global styles={{
            '.MuiDrawer-root > .MuiPaper-root': {
              height: `calc(50% - ${drawerBleeding}px)`, overflow: 'visible', right: 450, left: 450,
            },
          }} />

        </ThemeProvider>
      </Container>
    </div>
  );
}

Meta.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Meta;