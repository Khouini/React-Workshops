import eventService from "../services/event";
import Event from "./Event.jsx";
import { Alert, CardGroup } from "react-bootstrap";
import { useEffect, useState } from "react";

const Events = () => {
  const [showAlert, setShowAlert] = useState(false);
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    const result = setTimeout(() => {
      setShowWelcome(false);
    }, 3000);
    return () => {
      console.log("unmounting");
      clearTimeout(result);
    };
  }, []);
  const updateAlert = () => {
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 2000);
  };
  return (
    <>
      {showWelcome && <h1>Welcome to the event booking app!</h1>}
      {showAlert && <Alert variant="success">You have booked an event!</Alert>}
      <CardGroup>
        {eventService.getEvents().map((event, index) => (
          <Event
            key={index}
            event={event}
            updateAlert={updateAlert}
            showAlert={showAlert}
          />
        ))}
      </CardGroup>
    </>
  );
};

export default Events;
