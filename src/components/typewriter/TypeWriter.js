import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './TypeWriter.css'
import Typewriter from "typewriter-effect";

const TypeWriter = () => (
    <Typewriter className="Typewriter"
        onInit={(typewriter) => {
          typewriter
            .typeString("Adarsh Denga")
            .start()
        }}
      />
);

export default TypeWriter