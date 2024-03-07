import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { Link, NavLink } from "react-router-dom";
import { increment } from "../redux/slices/wishlistSlice";
import { useDispatch } from "react-redux";
export default function Event(props) {
  const dispatch = useDispatch();
  const [event, setEvent] = useState(props.event);

  const addToWishlist = () => {
    dispatch(increment(event));
  };
  const handleLike = () => {
    setEvent((eventPrev) => ({
      ...eventPrev,
      like: !eventPrev.like,
    }));
  };

  const handleBuy = () => {
    props.showBuyAlert();
    setEvent((eventPrev) => ({
      ...eventPrev,
      nbParticipants: eventPrev.nbParticipants + 1,
      nbTickets: eventPrev.nbTickets - 1,
    }));
  };

  return (
    <Col style={{ maxWidth: "20%" }} className="m-2">
      <Card>
        <Card.Img
          variant="top"
          style={{ height: 300, objectFit: "cover" }}
          src={`/images/${!!event.nbTickets ? event.img : "sold_out.png"}`}
        />
        <Card.Body>
          <NavLink to={`${event.id}`} style={{ textDecoration: "none" }}>
            <Card.Title>{event.name}</Card.Title>
          </NavLink>
          <Card.Text>Price: {event.price}</Card.Text>
          <Card.Text>Tickets available: {event.nbTickets}</Card.Text>
          <Card.Text>Participants: {event.nbParticipants}</Card.Text>
          <Button variant="info" onClick={handleLike}>
            {event.like ? "Dislike" : "Like"}
          </Button>
          <Button
            variant="primary"
            onClick={handleBuy}
            disabled={!event.nbTickets}
            className="mx-3"
          >
            Book Now
          </Button>
          <Button variant="success" className="mx-1">
            <Link to={`/events/update/${event.id}`} style={{ textDecoration: "none", color: "white" }}>
              Update
            </Link>
          </Button>
          <Button
            variant="danger"
            onClick={() => props.onDelete(event.id)}
            className="mx-1"
          >
            Delete
          </Button>
          <Button
            variant="warning"
            onClick={() => addToWishlist()}
            className="mx-1"
          >
            Add To Wishlist
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
}
