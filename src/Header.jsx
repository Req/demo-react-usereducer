import { useContext } from 'react'
import './header.css'
import { AppContext } from './AppContext.jsx'

export default function Header() {
    const { state, dispatch } = useContext(AppContext)

    console.log("HEADER STATE", state)

    return (
        <header>
            <h1>LOGO</h1>
            <nav>
                <a href="#">Home</a> - <a href="#">Stuff</a>
            </nav>

            {state.user && (
                <button 
                    onClick={()=>{ 
                        dispatch({ actionType: "logout" })
                    }}
                >
                    Logout {state.user.name}
                </button>
            )}

            {!state.user && (
                <button
                    onClick={() => {
                        dispatch({ actionType: "login", payload: { name: "Tommy" } })
                    }}
                >
                    Login
                </button>
            )}

        </header>
    )
}