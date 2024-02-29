import React, { Suspense, useEffect, useState } from "react";

import "./App.css";

// import Events from "./Components/Events";
import { Route, Routes } from "react-router-dom";
import NavigationBar from "./Components/Navbar";
import AddEvent from "./Components/AddEvent";
// import EventDetails from "./Components/EventDetails";
const Events=React.lazy(()=> import("./Components/Events"))
const EventDetails=React.lazy(()=> import("./Components/EventDetails"))

function App() {
  
  return (
    <>
    <Suspense fallback={<p>loading..</p>}>
    <NavigationBar/>
     <Routes>
      <Route path="/events">
        <Route index element={<Events/>}/>
        <Route path="details/:id" element={<EventDetails/>}/>
        <Route path="add" element={<AddEvent />}/>
      </Route>
      <Route path="*" element={<> <p>Not Found</p></>}/>
     </Routes>
     </Suspense>
    </>
  );
}

export default App;
