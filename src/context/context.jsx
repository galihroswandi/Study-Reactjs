import { Component, createContext } from "react"

const RootContext = createContext();

// Provider
const Provider = RootContext.Provider;
const GlobalProvider = (Children) => {
    return (
        class ParentComp extends Component {
            state = {
                totalOrder: 10
            }

            dispatch = (action) => {
                switch (action.type) {
                    case "PLUS_ORDER":
                        return this.setState({
                            totalOrder: this.state.totalOrder + 1
                        })
                    case "MINUS_ORDER":
                        return this.setState({
                            totalOrder: this.state.totalOrder - 1
                        })
                }
            }

            render() {
                return (
                    <Provider value={{
                        state : this.state,
                        dispatch : this.dispatch
                    }}>
                        <Children />
                    </Provider>
                )
            }
        }
    )
}
export default GlobalProvider;

// Consumer