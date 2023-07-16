//import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css";
import Home from "./views/Home/Home";
import Carrito from "./views/Carrito/Carrito";
import Pizzazza from "./views/PizzaMenu/PizzaMenu";
import Contexto from "./context/Context";
import Navbar1 from "./components/Navbar"; 

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";

function App() {
  const [pizza, setPizzas] = useState([]);
  const [total, setTotal] = useState(0);
  const [carrito, setCarrito] = useState([]);

  const AñadirAlCarrito = (id) => {
    const index = carrito.findIndex((p) => p.id === id);
    if (index >= 0) {
      carrito[index].cantidad++;
      setCarrito([...carrito]);
    } else {
      carrito.push({ id: id, cantidad: 1 });
      setCarrito([...carrito]);
    }
  };

  useEffect(() => {
    const calcularTotal = () => {
      let total = 0;
      carrito.forEach((p) => {
        const newPizza = Pizzazza.find((pz) => pz.id === p.id);
        const totalPrecio = newPizza.price * p.cantidad;
        total += totalPrecio;
      });
      setTotal(total);
    };

    calcularTotal();
  }, [carrito, pizza]);

  const formatCurrency = (value) => {
    return new Intl.NumberFormat("es-CL", {
      style: "currency",
      currency: "CLP",
    }).format(value);
  };

  const getPizzas = async () => {
    const res = await fetch("http://localhost:3000/pizzas.json");
    const datos = await res.json();
    setPizzas([...datos]);
  };

  useEffect(() => {
    getPizzas();
  }, []);

  return (
    <div className="App">
      <Contexto.Provider
        value={{
          pizza,
          total,
          setTotal,
          AñadirAlCarrito,
          Carrito,
          setCarrito,
          formatCurrency,
        }}
      >
        <BrowserRouter>
          <Navbar1 />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="pizza/:name" element={<Pizzazza />} />
            <Route path="/carrito" element={<Carrito />} />
            <Route path="*" element={<h1>404</h1>} />
          </Routes>
        </BrowserRouter>
      </Contexto.Provider>
    </div>
  );
}

export default App;