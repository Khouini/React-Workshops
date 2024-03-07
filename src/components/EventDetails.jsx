import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { getallEvents } from "../services/api";

export default function EventDetails() {
  const { id } = useParams();
  const [eventItem, setEventItem] = useState(null);

  useEffect(() => {
    const fetchEvent = async (eventId) => {
      const eventResult = await getallEvents(eventId);
      setEventItem(eventResult.data);
    };
    fetchEvent(id);
  }, [id]);

  if (!eventItem) {
    return <h1>Not Found</h1>;
  }

  return (
    <Container style={{ marginTop: "30px" }}>
      <Row>
        <Col md={4}>
          <Card>
            <Card.Img
              variant="top"
              src={`/images/${eventItem.img}`}
              alt="Event Image"
            />
          </Card>
        </Col>
        <Col md={8}>
          <Row>
            <Col md={12}>
              <h1>{eventItem.name}</h1>
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <h5>Description</h5>
            </Col>
            <Col md={12}>
              <p>{eventItem.description}</p>
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <h5>Price</h5>
            </Col>
            <Col md={12}>
              <p>{eventItem.price} DT</p>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
