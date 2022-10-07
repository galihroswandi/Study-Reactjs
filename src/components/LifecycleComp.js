import React, { Component } from 'react'

export class LifecycleComp extends Component {
  constructor(props) {
    super(props)

    this.state = {
      count: 1,
      nama: 'Galih Roswandi',
    }
    console.log('constructor')
  }

  static getDerivedStateFromProps(props, state) {
    console.log('getDerivedStateFromProps')
    return null
  }

  componentDidMount() {
    console.log('ComponentDidmount')

    setTimeout(() => {
      this.setState({
        count: 5,
      })
    }, 5000)
  }

  shouldComponentUpdate(nextProps, nextState) {
    return true
    console.log('shouldComponentUpdate')
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('getSnapshotBeforeUpdate')
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('ComponentDidUpdate')
  }

  componentWillUnmount() {
    console.log('Component Willunmount')
  }

  render() {
    return (
      <div>
        <button
          style={{
            paddingTop: '.5rem',
            paddingBottom: '.5rem',
            paddingInline: '1rem',
            border: 'none',
            borderRadius: '.3rem',
            backgroundColor: 'crimson',
            fontSize: '.9em',
            color: 'white',
            margin: '5rem',
            cursor: 'pointer',
          }}
        >
          Component Button {this.state.count}
        </button>
      </div>
    )
  }
}

export default LifecycleComp
