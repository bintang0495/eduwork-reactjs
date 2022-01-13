import React from "react";
import ClassComponent from "./type/ClassComponent";
import FunctionalComponent from "./type/FunctionalComponent";

export default class Component extends React.Component {
  render() {
    return (
      <div>
        <ClassComponent nama="Bintang" />
        <hr />
        <FunctionalComponent nama="Lukman" profesi="Gamer" />
      </div>
    );
  }
}
