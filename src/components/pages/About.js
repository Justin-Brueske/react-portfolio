import React from 'react';
import meImage from "../../assets/images/justin.jpg";
export default function About() {
  return (
    <div>
      <h1>About Page</h1>
      <p>Justin is currently a University of Minnesota Full Stack Developer Bootcamp student.  He is currently working for Canadian Pacific Railway while learning to code, however, he has previously worked in the Information Technology space. He is passionate about tech and is excited to learn how to contribute with code.</p>
      <p>He currently resides in Minnesota with his wife, youngest child and three spoiled cats.  In his free time he enjoys gaming, working on cars, and spending time with family.</p>
      <img src={meImage} alt=""/>
    </div>
  );
}
