import { useState } from 'react'
import './App.css'
import Header from './Header.jsx'
import Main from './Main.jsx'
import { Chat } from './Chat.jsx'

function App() {
    return (
        <>
            <Header>Header</Header>
            <Main>Main</Main>
            <Chat>Chat</Chat>
        </>
    )
}

export default App
