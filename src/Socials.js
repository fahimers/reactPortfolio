import React, { Component } from "react";
import SOCIALS from "./data/socials";

class Social extends Component {
  render() {
    console.log("this.props", this.props);

    const { title, image, link } = this.props.social;

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
}

class Socials extends Component {
  render() {
    return (
      <div>
        {" "}
        <h2> Social Links </h2>{" "}
        <div>
          {" "}
          {SOCIALS.map(SOCIAL => {
            return <Social key={SOCIAL.id} social={SOCIAL} />;
          })}{" "}
        </div>{" "}
      </div>
    );
  }
}
export default Socials;
