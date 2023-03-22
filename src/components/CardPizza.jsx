import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

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
import FindInPageIcon from '@mui/icons-material/FindInPage';
import AddShoppingCartIcon  from '@mui/icons-material/AddShoppingCart';

import Contexto from '../contexts/Contexto';

const CardPizza = ({ pizza }) =>
{
    const navigate = useNavigate();

    const { agregarPizza } = useContext(Contexto);

    const verDetalle = () =>
    {
        navigate(`/detalle/${pizza.id}`);
    }

    return (
        <Card xs={{ minWidth: 345 }}>
            <CardMedia
                component="img"
                height="210"
                image={pizza.img}
                alt={pizza.name}
            />
            <CardContent>
                <Typography variant="h5" component="div" style={{ fontWeight: 700 }}>{pizza.name.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase())}</Typography>
                <hr style={{ marginBlock: '1em' }} />
                <Typography sx={{ mb: 1.5 }} color="text.secondary" style={{ fontWeight: 700 }}>Ingredientes:</Typography>
                <ul>
                    {
                        pizza.ingredients.map((data) =>
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
                    <Typography variant="h6" component="div" style={{ fontWeight: 700, textAlign: 'center' }}>Precio: ${pizza.price}</Typography>
                </Alert>
            </CardContent>
            <CardActions>
                <Button variant="contained" startIcon={<FindInPageIcon />} onClick={() => verDetalle()}>Ver Más</Button>
                <Button variant="contained" color="success" startIcon={<AddShoppingCartIcon />} onClick={() => agregarPizza(pizza)}>Agregar</Button>
            </CardActions>
        </Card>
    );
}

export default CardPizza;
