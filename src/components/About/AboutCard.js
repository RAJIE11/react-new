import React from "react";
import Card from "react-bootstrap/Card";


function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          
          <p style={{ textAlign: "justify"  }}>
          My name is Rajarajeswari.I describe myself as a front end developer , who loves coding , coffee and books.
          
          <p>Whether it's the immersive worlds created in fantasy epics, the gripping suspense of thrillers, the heartfelt emotions of dramas, or the laughter sparked by comedies, I'm always eager to explore diverse cinematic experiences. I find myself completely absorbed in the characters' journeys and the creativity behind each cinematic masterpiece.
And my favourite movies are ...All of us are dead , Train to busan , Stranger Things , Interstellar and much more......
I'm always eager to absorb new wisdom and apply it to my life. I had read a books like"The power of your subconsious mind and " ,"Atomic habits","The power of positive Thinking" I'm continually seeking inspiration and practical guidance from these books.</p>
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
