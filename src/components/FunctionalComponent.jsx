import { useState } from "react";

function FunctionalComponent({ name }) {
    const [content, setContent] = useState("Hello From Functional Component State " + name);
    return <><h1>{content}</h1></>;
}
export default FunctionalComponent;