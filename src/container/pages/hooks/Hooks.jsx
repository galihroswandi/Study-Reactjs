import React, { Component, useEffect, useState } from 'react'

// class Hooks extends Component {
//   state = {
//     count: 0,
//   }

//   handleUpdate = () => {
//     this.setState({
//       count: this.state.count + 1,
//     })
//   }

//   componentDidMount(){
//     document.title = `Title Change : ${this.state.count}`;
//   }

//   componentDidUpdate(){
//     document.title = `Title Change : ${this.state.count}`;
//   }

//   componentWillUnmount(){
//     document.title = `ReactApp`;
//   }

//   render() {
//     return (
//       <div>
//         <p>Nilai Saya : {this.state.count}</p>
//         <button onClick={() => this.handleUpdate()}>Update Nilai</button>
//       </div>
//     )
//   }
// }

// Menggunakan React Hook
const Hooks = () => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    document.title = `Title Change : ${count}`;
    return () => {
        document.title = "React App"
    }
  })

  return (
    <div>
      <p>Nilai Saya : {count}</p>
      <button onClick={() => setCount(count + 1)}>Update Nilai</button>
    </div>
  )
}

export default Hooks;
