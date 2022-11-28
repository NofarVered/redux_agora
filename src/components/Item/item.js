import React, { useState } from "react";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import CardTitle from "react-bootstrap/Card";
import CardBody from "react-bootstrap/Card";

export default function Item(props) {
  const [itemPrice, setItemPrice] = useState("");

  const handleInput = function (event) {
    setItemPrice(event.target.value);
  };

  const updateItemPrice = function () {
    let updatedProduct = { name: props.item.name, price: itemPrice };
    props.updateItemPrice(updatedProduct);
  };

  return (
    <Col>
      <div>
        <Card className="mx-auto my-2">
          <CardBody>
            <CardTitle>
              <h4>{props.item.name}</h4>
            </CardTitle>
            <div>Price: {props.item.price}$</div>
            <button onClick={() => props.deleteProduct(props.item.name)}>
              Buy
            </button>
            <button className="sell-btn" onClick={updateItemPrice}>
              Update Price
            </button>
            <input
              name="price"
              type="number"
              value={itemPrice}
              onChange={handleInput}
              placeholder="Enter price"
            ></input>
          </CardBody>
        </Card>
      </div>
    </Col>
  );
}
