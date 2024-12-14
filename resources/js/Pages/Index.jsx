import React from 'react';


const Index = ({ acumalaka }) => {
acumalaka = 'bapaknya loh lucu banget rek!'

const elements = Array(5).fill(null).map((_, i) => (
  <h1 key={i}>Hi {acumalaka}</h1>
))

  return (
    <div>{elements}</div>
  );
};

export default Index;