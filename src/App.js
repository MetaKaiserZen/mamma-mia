import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './views/Home';
import Carrito from './views/Carrito';
import Detalle from './views/Detalle';

import Barra from './components/Barra';
import Header from './components/Header';

import Contexto from './contexts/Contexto';

function App()
{
    const [pizzas, setPizzas] = useState([]);
    const [pedidos, setPedidos] = useState([]);
    const [total, setTotal] = useState(0);

    const obtenerPizzas = async () =>
    {
        const url = '/pizzas.json';

        const response = await fetch(url);

        const data = await response.json();

        setPizzas(data);
    }

    const agregarPizza = (pizza) =>
    {
        const index = pedidos.findIndex((data) => data.id === pizza.id);

        if (index >= 0)
        {
            pedidos[index].cantidad += 1;

            setPedidos([...pedidos]);
        }
        else
        {
            const seleccionada =
            { 
                id: pizza.id,
                name: pizza.name,
                price: pizza.price,
                image: pizza.img,
                cantidad: 1
            }

            setPedidos([...pedidos, seleccionada]);
        }

        setTotal(total + pizza.price);
    }

    useEffect(() =>
    {
        obtenerPizzas();
    }, []);

    return (
        <div className="App">
            <Contexto.Provider value={
                {
                    pizzas,
                    pedidos,
                    setPedidos,
                    total,
                    setTotal,
                    agregarPizza
                }}>
                <BrowserRouter>
                    <Barra></Barra>
                    <Header></Header>
                    <Routes>
                        <Route path="/" element={<Home></Home>}></Route>
                        <Route path="/carrito" element={<Carrito></Carrito>}></Route>
                        <Route path="/detalle/:id" element={<Detalle></Detalle>}></Route>
                    </Routes>
                </BrowserRouter>
            </Contexto.Provider>
        </div>
    );
}

export default App;
