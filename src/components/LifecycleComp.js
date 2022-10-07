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

    // setTimeout(() => {
    //   this.setState({
    //     count: 5,
    //   })
    // }, 1000)
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.group('ShouldComponentUpdate')
    console.log('nextProps : ', nextProps)
    console.log('nextState : ', nextState)
    console.groupEnd()

    if (this.state.count > 4) {
      return false
    }
    return true
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('getSnapshotBeforeUpdate')
    return null
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('ComponentDidUpdate')
  }

  componentWillUnmount() {
    console.log('Component Willunmount')
  }

  changeCount = () => {
    this.setState({
      count: this.state.count + 1,
    })
  }

  render() {
    console.log('render')
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
          onClick={() => this.changeCount()}
        >
          Component Button {this.state.count}
        </button>
      </div>
    )
  }
}

export default LifecycleComp
