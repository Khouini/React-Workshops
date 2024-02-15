import { Button, Card } from "react-bootstrap";
import { useState } from "react";

const Event = (props) => {
  const [event, setEvent] = useState(props.event);
  const book = () => {
    //const updatedEvent = eventService.bookEvent(event);
    // console.log("book event setting", updatedEvent);
    //setEvent(updatedEvent);
    setEvent({
      ...event,
      nbTickets: event.nbTickets - 1,
      nbParticipants: event.nbParticipants + 1,
    });
    props.updateAlert();
  };
  const like = () => {
    setEvent({ ...event, liked: !event.liked });
  };
  return (
    <>
      {event && (
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src={
              event.nbTickets === 0
                ? `images/sold_out.png`
                : `images/${event.img}`
            }
          />
          <Card.Body>
            <Card.Title>{event?.name}</Card.Title>
            <Card.Text>{event?.description}</Card.Text>
            <Card.Text>nbTickets: {event?.nbTickets}</Card.Text>
            <Card.Text>nbParticipants: {event?.nbParticipants}</Card.Text>
            <Button
              disabled={event.nbTickets === 0 || props.showAlert}
              onClick={book}
              variant="primary"
            >
              Book an event.
            </Button>
            <Button variant="secondary" onClick={like}>
              {event.liked ? "Dislike" : "Like"}
            </Button>
          </Card.Body>
        </Card>
      )}
    </>
  );
};
export default Event;
