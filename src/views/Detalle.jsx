import { useContext } from 'react';
import { useParams } from 'react-router-dom';

import { Container } from '@mui/system';
import { Box } from '@mui/material';
import { Card } from '@mui/material';
import { CardMedia } from '@mui/material';
import { CardContent } from '@mui/material';
import { Typography } from '@mui/material';
import { IconButton } from '@mui/material';
import { Alert } from '@mui/material';
import { AlertTitle } from '@mui/material';
import { CardActions } from '@mui/material';
import { Button } from '@mui/material';

import LocalPizzaIcon from '@mui/icons-material/LocalPizza';
import AddShoppingCartIcon  from '@mui/icons-material/AddShoppingCart';

import Contexto from '../contexts/Contexto';

const Detalle = () =>
{
    const { id } = useParams();

    const { pizzas, agregarPizza } = useContext(Contexto);

    const pizza = pizzas.filter((data) => data.id === id);

    return (
        <Container style={{ marginBlock: '3em' }}>
            <Card sx={{ display: 'flex' }}>
                <CardMedia
                    component="img"
                    image={pizza[0].img}
                    alt={pizza[0].name}
                />
                <Box sx={{ display: 'flex', flexDirection: 'column' }} style={{ width: '100%' }}>
                    <CardContent>
                        <Typography variant="h5" component="div" style={{ fontWeight: 700 }}>{pizza[0].name.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase())}</Typography>
                        <hr style={{ marginBlock: '1em' }} />
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">{pizza[0].desc}</Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary" style={{ fontWeight: 700 }}>Ingredientes:</Typography>
                        <ul>
                            {
                                pizza[0].ingredients.map((data) =>
                                     <p key={data} style={{ marginBlock: 0 }}>
                                        <IconButton>
                                            <LocalPizzaIcon />
                                        </IconButton>{data.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase())}
                                    </p>)
                            }
                        </ul>
                        <hr style={{ marginBlock: '2em' }} />
                        <Alert severity="info">
                            <AlertTitle>Información</AlertTitle>
                            <Typography variant="h6" component="div" style={{ fontWeight: 700 }}>Precio: ${pizza[0].price}</Typography>
                        </Alert>
                    </CardContent>
                    <CardActions>
                        <Button variant="contained" color="success" startIcon={<AddShoppingCartIcon />} onClick={() => agregarPizza(pizza[0])}>Agregar</Button>
                    </CardActions>
                </Box>
            </Card>
        </Container>
    );
}

export default Detalle;
