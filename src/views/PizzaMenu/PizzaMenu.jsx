import React from "react";
import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import Contexto from "../../context/Context";
import { Button, Card } from "react-bootstrap";
import "./PizzaIngredientes.css";

const Pizzazza = () => {
  const { name } = useParams();
  const { pizza, formatCurrency } = useContext(Contexto);

  const PizzaIngredientes = pizza.find((p) => p.name === name);

  return (
    <div className="text-center mx-auto cardContainer">
      <Card>
        <div className="row ">
          <div className="col-md-5 d-flex align-items-center justify-content-center">
            <Card.Img variant="top" src={PizzaIngredientes.img} className="w-75" />
          </div>
          <div className="col-md-7">
            <Card.Body>
              <Card.Title className="fw-bold">{PizzaIngredientes.name}:</Card.Title>
              <Card.Text>{PizzaIngredientes.desc}</Card.Text>
              <Card.Text>
                <strong>Ingredientes:</strong>
                <ul className="list-unstyled">
                  {PizzaIngredientes.ingredients.map((ingredient, index) => (
                    <li key={index}>🍕{ingredient}</li>
                  ))}
                </ul>
                <Card.Title className="fw-bold">
                  <strong>Precio: </strong>
                  {formatCurrency(PizzaIngredientes.price)}.-
                </Card.Title>
              </Card.Text>

              <div className="btnContainer">
                <Button variant="success">
                  <Link className="btnHome" to="/">
                    Pagina Principal 🏠
                  </Link>
                </Button>
                <Button variant="warning">
                  <Link className="btnStore" to="/carrito">
                    Carrito 🛒
                  </Link>
                </Button>
              </div>
            </Card.Body>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Pizzazza;