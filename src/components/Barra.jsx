import { useContext } from 'react';
import { NavLink } from 'react-router-dom';

import { AppBar } from '@mui/material';
import { Box } from '@mui/material';
import { Toolbar } from '@mui/material';
import { Typography } from '@mui/material';
import { Button } from '@mui/material';

import LocalPizzaIcon from '@mui/icons-material/LocalPizza';
import AddShoppingCartIcon  from '@mui/icons-material/AddShoppingCart';

import Contexto from '../contexts/Contexto';

const Barra = () =>
{
    const { total } = useContext(Contexto);

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        <NavLink to="/" style={{ textDecoration: 'none' }}>
                            <Button variant="contained" startIcon={<LocalPizzaIcon />} style={{ fontWeight: 700 }}>Pizzería Mamma Mia</Button>
                        </NavLink>
                    </Typography>
                    <NavLink to="/carrito" style={{ textDecoration: 'none' }}>
                        <Button variant="contained" color="success" startIcon={<AddShoppingCartIcon />} style={{ fontWeight: 700 }}>${total}</Button>
                    </NavLink>
                </Toolbar>
            </AppBar>
      </Box>
    );
}

export default Barra;
