import React from "react";
import SOCIALS from "../data/socials";

const Social = props => {

  const { title, image, link } = props.social;

  return (
    <span
      style={{
        display: "inline-block",
        width: 200,
        margin: 20
      }}
    >
      <h3> {title} </h3>{" "}
      <a href={link}>
        <img
          src={image}
          alt="profile"
          style={{
            width: 35,
            height: 35,
            margin: 10
          }}
        />{" "}
      </a>

    </span>
  );
}

const Socials = () => (

  <div>

    <h2> Connect with me </h2>
    <div>

      {SOCIALS.map(SOCIAL => {
        return <Social key={SOCIAL.id} social={SOCIAL} />;
      })}
    </div>
  </div>
)

export default Socials;
