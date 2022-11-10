import React, { useState } from 'react'
import "./auth.css"

// same as saying props.updateLocalStorage
function Auth({ updateLocalStorage }) {
    
    const [ fName, setfName ] = useState("")
    const [ lName, setlName ] = useState("")
    const [ email, setEmail ] = useState("")
    const [ password, setPassword ] = useState("")
    const [ login, setLogin ] = useState(false)

    const authState = () => {
        return login ? "Login" : "Signup"
    }

    const authButton = () => {
        return !login ? "Login" : "Signup"
    }

    const authToggle = () => {
        setLogin(!login)
        setfName("")
        setlName("")
        setEmail("")
        setPassword("")
    }

    const handleSubmit = e => {
        e.preventDefault()

        let url = login ?
        "http://localhost:4000/login" :
        "http://localhost:4000/register"

        let requestBody = login ? {
            email: email,
            password: password
        } : {
            fName: fName,
            lName: lName,
            email: email,
            password: password
        }

        fetch(url, {
            method: "POST",
            body: JSON.stringify(requestBody),
            headers: new Headers({
                "Content-Type": "application/json"
            })
        })
        .then(res => res.json())
        .then(data => updateLocalStorage(data.token))
        .catch(err => console.log(err))
    }

    const register = () => login ? null : (
        <>
        <input
            type="text"
            value={fName}
            onChange={e => setfName(e.target.value)} 
            className="fName" 
            placeholder='Enter first name'
            />
        <input
            type="text"
            value={lName} 
            onChange={e => setlName(e.target.value)} 
            className='lName' 
            placeholder='Enter last name'
        />
        </>
    )


    return (
        <div>
            <h1>{authState()}</h1>
            <form action="" className="form-wrapper">
                {register()}
                <input 
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    className="email"
                    placeholder='Enter email'
                />
                <input
                    type="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    className="password"
                    placeholder='Enter password'
                />
                <button onClick={handleSubmit}>{authState()}</button>
            </form>
            <button className="toggleAuth" onClick={authToggle}>{authButton()}</button>
        </div>
    )
}

export default Auth