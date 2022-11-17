import React from 'react';

import {createTheme, ThemeProvider } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {Typography, IconButton, Container, Card, CardContent, Divider, Stack} from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Chart } from "react-google-charts";


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

export const data = [
  ["Task", "Hours per Day"],
  ["Carro ", 11],
  ["Comida", 2],
  ["Escola", 2],
  ["Moradia", 2],
  ["Lazer", 7],
];
export const options = {
  title: "Gastos totais",
};


export const data2 = [
    ['Effort', 'Amount given'],
    ['Total',     100],
];

export const options2 = {
    pieHole: 0.5,
    pieSliceTextStyle: {
      color: 'black',
    },
    legend: 'Total'
  };


const Estastistica = () => {

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

                        <Typography><h1>ESTATÍSTICAS</h1></Typography>
                    </Stack>

                    <Card sx={{ maxWidth: 450, height: 350 }} style={{ borderRadius: 70 }} >

                        <Chart
                            chartType="PieChart"
                            data={data}
                            options={options}
                            width={"100%"}
                            height={"400px"}
                            />

                    </Card>

                        <br></br><br></br><br></br><br></br>
                    <div><Card sx={{ maxWidth: 450, height: 350 }} style={{ borderRadius: 70 }} >

                        <Chart
                            chartType="PieChart"
                            data={data2}
                            options={options2}
                            width={"100%"}
                            height={"400px"}
                            />

                    </Card> </div>
                    <div></div>
                </Container>
            </ThemeProvider>
        </Container>
    );
}
export default Estastistica
