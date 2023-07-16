import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./PizzaCard"
import { useNavigate } from "react-router-dom";
import Contexto from "../context/Context";

const PizzaCard = ({ pizza }) => {
  const {AñadirCarrito1, formatCurrency} = useContext(Contexto);
  const navigate = useNavigate();

  const detallePizza = (name) => {
    navigate(`/pizza/${name}`);
  };

const agregarAlCarrito = (id) => {
    formatCurrency(AñadirCarrito1);
  };

  return (
    <Card className="CardContainer " style={{ width: "auto", margin: "1em" }}>
      <Card.Img variant="center" src={pizza.img} />
      <Card.Body>
        <Card.Title className="CardTitle">{pizza.name}</Card.Title>
        <br />
        <Card.Text>
          <ul>
            {pizza.ingredients.map((ing, i) => {
              return <li className="inghover" key={i}>🍕{ing}</li>;
            })}
          </ul>
        </Card.Text>
        <br />
        <Card.Title className="CardTitle"> {formatCurrency(pizza.price)}.-</Card.Title>
        <div className="BtnContainer">
          <Button
          
            variant="blue"
            onClick={() => detallePizza(pizza.name)}
          >
            Especificaciones
          </Button>
          <Button className="bgbtnAgre"
          
            variant="warning"
            onClick={() => agregarAlCarrito(pizza.id)}
          >
            Agregar{" "}
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default PizzaCard;