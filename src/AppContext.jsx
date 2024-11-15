import { createContext, useReducer, useState } from "react"

export const AppContext = createContext(null)


function myReducer(currentState, action) {
    console.log("AN ACTION HAS BEEN DISPATCHED SOMEHWERE", action)

    // DEEP CLONE THE OLD STATE INTO NEW STATE
    const newState = JSON.parse(JSON.stringify(currentState))

    if (action.actionType === "login") {
        newState.user = action.payload
    }
    if (action.actionType === "logout") {
        newState.user = null
        alert("Sad to see you go :-(")
    }
    if (action.actionType === "addMsg") {
        newState.messages.push(action.payload)
    }

    return newState
}



export function AppContextProvider(props) {
    const [state, dispatch] = useReducer(myReducer, { user: null, messages: [], cheese:987 })

    return (
        <div>
            <AppContext.Provider value={{ state, dispatch }}>
                {props.children}
            </AppContext.Provider>
        </div>
    )
}
