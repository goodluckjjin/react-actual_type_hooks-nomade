import React, { useState, Component } from "react";
// count +1씩 증가하는 버튼 만들기
class App extends Component {
  state = {
    count: 0
  };
  IncreaseNumber1 = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  IncreaseNumber2() {
    this.setState({
      count: this.state.count + 1
    });
  }

  decreaseNumber1 = () => {
    this.setState({
      count: this.state.count - 1
    });
  };

  decreaseNumber2 = n => {
    this.setState({
      count: n
    });
  };

  render() {
    const { count } = this.state;
    console.log(count);

    return (
      <div>
        <div>{count}</div>
        <button onClick={this.IncreaseNumber1}>increase1</button>
        {/* 왜 되나? */}
        <button onClick={this.IncreaseNumber2.bind(this)}>increase2</button>
        <button onClick={this.decreaseNumber1}>decrease1</button>
        <button onClick={() => this.decreaseNumber2(count - 1)}>
          decrease2
        </button>
      </div>
    );
  }
}
// const App = () => {
//   const [count, setCount] = useState(0);
//   const [text, setValue] = useState("");
//   const updateText = e => {
//     const {
//       target: { text }
//     } = e;
//     // const { text } = e.target;
//     // const { text } = e.target;
//     // const text = e.target.text;
//     setValue(text);
//   };
//   return (
//     <div>
//       <div>{count}</div>
//       <button onClick={() => setCount(count + 1)}>increase</button>
//       {/* <button onClick={setCount(count - 1)}>decrease</button> */}
//       {/* <input onChange={(() => setValue(value), console.log(value))} /> */}
//       {/* <input value={text} onChange={(() => updateText())} /> */}
//       <input value={text} onChange={updateText} />
//     </div>
//   );
// };

export default App;
