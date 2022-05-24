import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Landing.css'
import Typewriter from "typewriter-effect";


const Landing = () => (
    <div className="Landing-Container">
        <Typewriter className="Typewriter"
        onInit={(typewriter) => {
          typewriter
            .typeString("Hi!")
            .pauseFor(200)
            .typeString("\n\n\nMy name is Adarsh")
            .start()
        }}
      />
    </div>
);

export default Landing