import React, { useState } from "react";

export default function Problem1aCard(props) {
  const { details } = props;
  return (
    <div className = 'problem1a'>
      <p>{details.name}</p>
      {/* <p>{details.grade}</p> */}
    </div>
  );
}
