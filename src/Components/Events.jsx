import Event from "./Event";
// import listEvent from "../data/events.json";
import { Alert, CardGroup, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import eventService from "../services/api";
export default function Events(props) {
  const [listEvent, setListEvent] = useState([]);
  const [showAlert, setAlert] = useState(false);
  const [showWelcome, setWelcome] = useState(false);
  //récuperer l'id

  const fetchList = async () => {
    const events = await eventService.getallEvents();
    console.log("data from api", events.data);
    setListEvent(events.data);
  };
  useEffect(() => {
    fetchList();
  }, []);
  const { id } = useParams();
  console.log(id);
  //query params
  const [name, setName] = useSearchParams({ name: "" });
  console.log(name.get('name'));
  const modifAlert = () => {
    setAlert(true);
    setTimeout(() => setAlert(false), 3000);
  };
  useEffect(() => {
    setWelcome(true);
    setTimeout(() => setWelcome(false), 3000);
    return () => {
      console.log("unmounting");
    };
  }, []);
  return (
    <>
      {showWelcome && <Alert variant="success">Welcome</Alert>}
      <Row xs={1} md={3}>
        {listEvent?.map((e, i) => {
          return <Event key={i} event={e} fnAlert={modifAlert} />;
        })}
      </Row>
      {showAlert && <Alert variant="success">You have booked an event</Alert>}
    </>
  );
}
