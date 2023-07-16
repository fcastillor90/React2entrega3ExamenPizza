import React, { useContext } from "react";
import Contexto from "../../context/Context.jsx";
import { Row, Col } from "react-bootstrap";
import PizzaCard from "../../components/PizzaCard.jsx";

const Home = () => {
  const { pizza } = useContext(Contexto);

  return <div>
    <Row>
    {
      pizza.map((p,i)=>{
        return <Col ><PizzaCard key={i} pizza={p}></PizzaCard></Col>
      })
    }
    </Row>



  </div>;
};

export default Home;