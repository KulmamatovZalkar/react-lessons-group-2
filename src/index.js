import React, { Component } from "react";
import ReactDOM from "react-dom/client";
// import { Hello, Hello1, Hello3 } from "./components/HelloComponent.js";
import Hello from "./components/HelloComponent";

const rootNode = document.getElementById("root");
const root = ReactDOM.createRoot(rootNode);

const user = {
  id: 5,
  age: 33,
  firstName: "Faha",
  lastName: "Muhidinov",
  getFullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
};

const userStyle = {
  fontSize: "22px",
  backgroundColor: "#ccc",
  padding: "10px",
};

root.render(
  <div>
    <Hello name="Eugene" surname="Sagaz" />
  </div>
);

будут 2 компонента app и menu-item реализовать меню с помощью передачи данных через props (атрибут компонента) и map

// root.render(
//   <div id={user.id} className="user" style={userStyle}>
//     <p>FullName: {user.getFullName()}</p>
//     <p>Age: {user.age}</p>
//     <p>Created At: {new Date().toLocaleTimeString()}</p>
//   </div>
// );

// const element = <h1>Hello, React</h1>;

// root.render(
//   <div id="items">
//     <h2>Список Телефонов</h2>
//     <ul>
//       <li>Apple Iphone 12</li>
//       <li>Samsung Galaxy s22</li>
//       <li>Huaweu P50</li>
//       <li>MI 11 ultra</li>
//     </ul>
//   </div>
// );

// function tick() {
//   root.render(<h2>Текущее время {new Date().toLocaleTimeString()}</h2>);
// }
// setInterval(tick, 1000);

// function Hello() {
//   return <h1>Hello, Eugene</h1>;
// }

// const Hello2 = () => {
//   return <h2>Hello, Timoti</h2>;
// };

// class Hello3 extends Component {
//   render() {
//     return <h3>Hello, Faha</h3>;
//   }
// }

// root.render(
//   <div>
//     <Hello />
//     <Hello />
//     <Hello />
//     <Hello />
//     <Hello2 />
//     <Hello3 />
//   </div>
// );
