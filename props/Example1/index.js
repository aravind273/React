import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

function Card(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <img src={props.img} alt="" />
      <p>{props.tel}</p>
      <p>{props.email}</p>
    </div>
  );
}

ReactDOM.render(
  <div>
    <h1>my contacts</h1>
    <Card
      name="beyonce"
      img="https://i0.wp.com/post.healthline.com/wp-content/uploads/2019/04/Beyonce_Coachella_1296x728-header-1-1296x728.jpg?w=1155&h=1528"
      tel="+910910"
      email="123"
    />
    <Card
      name="Aravind"
      img="https://i0.wp.com/post.healthline.com/wp-content/uploads/2019/04/Beyonce_Coachella_1296x728-header-1-1296x728.jpg?w=1155&h=1528"
      tel="+890910"
      email="123"
    />
    <Card
      name="beyonce"
      img="https://i0.wp.com/post.healthline.com/wp-content/uploads/2019/04/Beyonce_Coachella_1296x728-header-1-1296x728.jpg?w=1155&h=1528"
      tel="+124910"
      email="123@gmail.com"
    />
  </div>,
  document.getElementById("root")
);
