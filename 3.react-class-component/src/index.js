import React from "react";
import ReactDom from "react-dom/client"
import Button from "./components/Button";

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(
    <div>
        <Button/>
    </div>
)