import React from "react";
// Créer une interface
interface GreetingProps {
  name: string;
}

//  Typage des props dans le composant
const Greeting: React.FC<GreetingProps> = ({ name }) => {
  return <div>Hello, {name}!</div>;
};

export default Greeting;
