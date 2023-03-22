import { useContext } from 'react';
import { NavLink } from 'react-router-dom';

import { Container } from '@mui/system';
import { Card } from '@mui/material';
import { CardContent } from '@mui/material';
import { Box } from '@mui/material';
import { Grid } from '@mui/material';
import { CardMedia } from '@mui/material';
import { Typography } from '@mui/material';
import { Stack } from '@mui/material';
import { CardActions } from '@mui/material';
import { Button } from '@mui/material';

import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import PaymentIcon from '@mui/icons-material/Payment';

import Contexto from '../contexts/Contexto';

import { calcularTotal } from '../utils/utils';

const Carrito = () =>
{
    const { pedidos, setPedidos, total, setTotal } = useContext(Contexto);

    const disminuirCantidad = (id) =>
    {
        const index = pedidos.findIndex((data) => data.id === id);

        if (index >= 0)
        {
            if (pedidos[index].cantidad > 0)
            {
                pedidos[index].cantidad -= 1;

                if (pedidos[index].cantidad === 0)
                {
                    pedidos.splice(index, 1);
                }

                setPedidos([...pedidos]);
            }
        }

        setTotal(calcularTotal(pedidos));
    }

    const aumentarCantidad = (id) =>
    {
        const index = pedidos.findIndex((data) => data.id === id);

        if (index >= 0)
        {
            pedidos[index].cantidad += 1;

            setPedidos([...pedidos]);
        }

        setTotal(calcularTotal(pedidos));
    }

    return (
        <Container style={{ marginBlock: '3em' }}>
            <Card style={{ backgroundColor: '#F8F9FA' }}>
                <CardContent>
                    <Container style={{ marginBlock: '1em' }}>
                        <Typography variant="h6" component="div" style={{ fontWeight: 700 }}>Detalles del pedido:</Typography>
                        <Card>
                            <CardContent style={{ paddingBottom: 0 }}>
                                {
                                    pedidos.map((data) =>
                                    {
                                        return <Box key={data.id} sx={{ flexGrow: 1 }}>
                                                    <Grid container spacing={2}>
                                                        <Grid item xs={12} sm={4} md={4} lg={7}>
                                                            <Grid container spacing={1}>
                                                                <Grid item>
                                                                    <CardMedia
                                                                        component="img"
                                                                        sx={{ width: 75 }}
                                                                        image={data.image}
                                                                        alt={data.name}
                                                                    />
                                                                </Grid>
                                                                <Grid item style={{ alignSelf: 'center' }}>
                                                                    <NavLink to={`/detalle/${data.id}`} style={{ textDecoration: 'none' }}>
                                                                        <Typography variant="h6" component="div" style={{ fontWeight: 700 }}>{data.name.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase())}</Typography>
                                                                    </NavLink>
                                                                </Grid>
                                                            </Grid>
                                                        </Grid>
                                                        <Grid item xs={12} sm={4} md={4} lg={2} style={{ alignSelf: 'center' }}>
                                                            <Typography variant="h6" component="div" style={{ fontWeight: 700, color: '#2E7D32' }}>${data.price * data.cantidad}</Typography>
                                                        </Grid>
                                                        <Grid item xs={12} sm={4} md={4} lg={3} style={{ alignSelf: 'center' }}>
                                                            <Stack direction="row" spacing={2}>
                                                                <Button variant="contained" color="error" startIcon={<RemoveIcon />} onClick={() => disminuirCantidad(data.id)} style={{ fontWeight: 700 }}>1</Button>
                                                                <Typography variant="h6" component="div" style={{ fontWeight: 700 }}>{data.cantidad}</Typography>
                                                                <Button variant="contained" startIcon={<AddIcon />} onClick={() => aumentarCantidad(data.id)} style={{ fontWeight: 700 }}>1</Button>
                                                            </Stack>
                                                        </Grid>
                                                    </Grid>
                                                    <hr style={{ marginBlock: '1em' }} />
                                                </Box>
                                    })
                                }
                            <Typography variant="h5" component="div" style={{ fontWeight: 700 }}>Total: ${total}</Typography>
                            </CardContent>
                            <CardActions>
                                <Button variant="contained" color="success" startIcon={<PaymentIcon />}>Pagar</Button>
                            </CardActions>
                        </Card>
                    </Container>
                </CardContent>
            </Card>
        </Container>
    );
}

export default Carrito;
