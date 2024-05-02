import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import img1 from "../images/iphone.webp";

export default function ProductCard({ id, imageSrc, title, description }) {
  return (
    <div style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "50px"
    }}>
      <Card className="product-card">
        <div className="card-zoom">
          <Card.Img
            variant="top"
            src={img1}
            style={{
              maxWidth: "200px",
            }}
            height="300px"
          ></Card.Img>
        </div>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Link to={`/product/${id}`}>
            <Button
              variant="primary"
              style={{
                background: "red !important",
              }}
            >
              Comprar
            </Button>
          </Link>
        </Card.Body>
        </Card>
        <Card className="product-card">
        <div className="card-zoom">
          <Card.Img
            variant="top"
            src={img1}
            style={{
              maxWidth: "200px",
            }}
            height="300px"
          ></Card.Img>
        </div>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Link to={`/product/${id}`}>
            <Button
              variant="primary"
              style={{
                background: "red !important",
              }}
            >
              Comprar
            </Button>
          </Link>
        </Card.Body>
      </Card>
      <Card className="product-card">
        <div className="card-zoom">
          <Card.Img
            variant="top"
            src={img1}
            style={{
              maxWidth: "200px",
            }}
            height="300px"
          ></Card.Img>
        </div>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Link to={`/product/${id}`}>
            <Button
              variant="primary"
              style={{
                background: "red !important",
              }}
            >
              Comprar
            </Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
}