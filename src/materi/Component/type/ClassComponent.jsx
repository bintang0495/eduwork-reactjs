import React from "react";

class ClassComponent extends React.Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     value: 0,
  //   };

  //   this.handlePlus = this.handlePlus.bind(this);
  //   this.handleMin = this.handleMin.bind(this);
  // }
  state = {
    value: 0,
  };

  handlePlus = () => {
    this.setState({ value: this.state.value + 1 });
  };

  handleMin = () => {
    if (this.state.value > 0) this.setState({ value: this.state.value - 1 });
  };

  render() {
    return (
      <div className="classComponent">
        <h1>Halo {this.props.nama}! , Selamat datang. </h1>
        <h2>Ini dari class component</h2>
        <button onClick={this.handleMin}>-</button>
        <span> {this.state.value} </span>
        <button onClick={this.handlePlus}>+</button>
      </div>
    );
  }
}

export default ClassComponent;
