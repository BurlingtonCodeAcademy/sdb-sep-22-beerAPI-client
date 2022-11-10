import React, { useState } from 'react'
import "./auth.css"

function Auth() {
    const [ fName, setfName ] = useState("")
    const [ lName, setlName ] = useState("")
    const [ email, setEmail ] = useState("")
    const [ password, setPassword ] = useState("")
    const [ login, setLogin ] = useState(true)

    const authState = () => {
        return login ? "Login" : "Signup"
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
        .then(data => console.log(data))
        .catch(err => console.log(err))
    }

    const register = () => login ? null : (
        <>
        <input type="text" className="fName" placeholder='Enter first name'/>
        <input type="text" className='lName' placeholder='Enter last name'/>
        </>
    )


    return (
        <div>
            <h1>{authState()}</h1>
            <form action="" className="form-wrapper">
                {register()}
                <input type="email" className="email" placeholder='Enter email' />
                <input type="password" className="password" placeholder='Enter password'/>
            </form>
        </div>
    )
}

export default Auth