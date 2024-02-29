import { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
export default function Event(props) {
  const [e, setEvent] = useState(props.event);
  const changeLike = () => {
    setEvent((pe) => ({ ...pe, like: !pe.like }));
  };
  const bookEvent = () => {
    props.fnAlert();
    setEvent((pe) => ({
      ...pe,
      nbTickets: pe.nbTickets - 1,
      nbParticipants: pe.nbParticipants + 1,
    }));
  };

  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src={e.nbTickets == 0 ? "images/sold_out.png" : `images/${e.img}`}
        />
        <Card.Body>
          <Card.Title>
            <Link to={`/events/details/${e.id}`}>{e.name}</Link>
          </Card.Title>

          <Card.Text>Price: {e.price}</Card.Text>
          <Card.Text>Number of tickets: {e.nbTickets}</Card.Text>
          <Card.Text>Number of participants: {e.nbParticipants}</Card.Text>
          <Button variant="danger" onClick={changeLike}>
            {e.like == true ? "Like" : "Dislike"}
          </Button>
          <Button onClick={bookEvent} disabled={e.nbTickets === 0}>
            Buy
          </Button>
        </Card.Body>
      </Card>
    </>
  );
}
