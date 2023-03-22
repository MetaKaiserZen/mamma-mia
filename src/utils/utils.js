const calcularTotal = (k) =>
{
    let total = 0;

    k.map((data) =>
    {
        total += data.price * data.cantidad;
    });

    return total;
}

export { calcularTotal };
