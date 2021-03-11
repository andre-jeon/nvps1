import React, { useState } from "react";
import Problem1aCard from "./Problem1aCard";

export default function Problem1a(props) {
  const { details } = props;
  return (
    <div className = 'problem1a_flex'>
        <h3>{details[0].grade} GRADERS</h3>
      {details.map((emp) => {
        return <Problem1aCard details={emp} />;
      })}
    </div>
  );
}
