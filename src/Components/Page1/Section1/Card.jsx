import React from "react";
import card1 from '../../../assets/Page1/card1.png';
import card2 from '../../../assets/Page1/card2.png';
import card3 from '../../../assets/Page1/card3.png';
import CardList from "./CardList";

function Card() {
  const card = [
    {
        id: 1,
        text: "Most drainage companies use superficial things like this to rack up the cost of their services. Here at Blocked Drains Wealden, call out charges are not a thing. We’re more concerned about the quality of the services we can render and how these services can leave you feeling content and satisfied. You reach out to us, and we’ll come bearing down on your location, along with a lasting solution.",
        title: "Zero call-out charge",
        img: `${card1}`
      },
      {
        id: 2,
        text: "Most times, problems pop up when you least expect them to. And that includes drainage problems. Problems like these are things you don’t often budget for, especially when you have other things on your mind, so we understand that it can be frustrating and infuriating. But the good news is that you no longer have to suffer these drainage problems any longer than you have to. We are available at any time of any day",
        title: "Emergency drainage",
        img: `${card2}`
      },
      {
        id: 3,
        text: "As a rule, we respond to our customers within the hour they contact us. We grasp the urge to get rid of that drainage fault, so we don’t waste any time getting across to you. Our equipment and professional teams are always on standby. Therefore, you can be assured that we’ll still deliver that authentic drain unblocking service we promised you despite the quick arrival. It doesn’t matter if you’re staying in the city center or away from it. ",
        title: "1 hour response time",
        img: `${card3}`
      }
  ]
    
  return <div className="cards flex justify-center gap-5 items-center pt-24">
    {card.map((item) => {
        return (
            <div className="flex  pt-24 pb-12">
                <CardList item={item} key={item.id} />
            </div>
        )
    })}
  </div>;
}

export default Card;
