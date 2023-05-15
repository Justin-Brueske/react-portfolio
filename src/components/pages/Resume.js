import React from 'react';
import resumePDF from "../../assets/files/Resume.pdf";

export default function Resume() {
  return (
    <div>
      <h1>Resume</h1>
      <p>
        Here is is to download
      </p>
      <a href={resumePDF} download>Download Resume</a>
    </div>
  );
}
