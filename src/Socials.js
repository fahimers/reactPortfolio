import React, { Component } from "react";
import SOCIALS from "./data/socials";

class Social extends Component {
  render() {
    console.log("this.props", this.props);

    const { title, image, link } = this.props.social;

    return (
      <div
        style={{
          display: "inline-block",
          width: 200,
          margin: 20
        }}
      >
        <h3> {title} </h3>{" "}
        <img
          src={image}
          alt="profile"
          style={{
            width: 50,
            height: 20
          }}
        />{" "}
        <p>  </p> <a href={link}> {link}</a>{" "}
      </div>
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
