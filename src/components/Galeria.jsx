import { useContext } from 'react';

import { Container } from '@mui/system';
import { Box, Grid } from '@mui/material';

import CardPizza from './CardPizza';

import Contexto from '../contexts/Contexto';

const Galeria = () =>
{
    const { pizzas } = useContext(Contexto);

    return (
        <Container style={{ marginBlock: '3em' }}>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={5}>
                    {
                        pizzas.map((data) =>
                        {
                            return <Grid key={data.id} item xs={12} sm={6} md={6} lg={4}>
                                        <CardPizza pizza={data} />
                                    </Grid>
                        })
                    }
                </Grid>
            </Box>
        </Container>
    );
}

export default Galeria;
