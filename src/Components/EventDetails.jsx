/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import eventService from "../services/api";
export default function EventDetails(props) {

  const params = useParams();
  console.log("🚀 ~ EventDetails ~ params:", params);
  const [event, setEvent] = useState(null);
  const fetchEvent = async () => {
    console.log("id", params.id);
    const event = await eventService.getallEvents(params.id);
    setEvent(event.data);
  };
  useEffect(() => {
    fetchEvent();
  }, []);
  console.log(event);
  return <>{
    event ?
      <p>{event.name}</p> : <p>event not found</p>}</>;
}
