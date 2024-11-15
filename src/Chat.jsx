import { useContext, useState } from 'react'
import './chat.css'
import { AppContext } from './AppContext'

export function Chat() {
    const [msg, setMsg] = useState("")
    const { state, dispatch } = useContext(AppContext)
    const { user, messages } = state

    console.log(messages)

    if (!user) {
        return null;
    }

    return (
        <div className="Chat">
            <h3>Chat bot chat</h3>
            <p>Hey {user.name} write a msg</p>

            <div>
                {messages.map(m => {
                    return <div className="message">{m}</div>
                })}
            </div>

            <div>
                <input type="text" value={msg} onChange={(e) => setMsg(e.target.value)} />
                <button onClick={()=>{
                    if (msg === "logout") {
                        dispatch({ actionType: "logout" })
                    } else {
                        dispatch({ actionType: "addMsg", payload: msg })
                    }
                }}>
                    Send
                </button>
            </div>
        </div>
    )
}