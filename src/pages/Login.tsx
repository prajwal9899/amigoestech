import '../styles/Login.scss'
import { useState } from 'react'
import axios from 'axios'

const Login = () => {
    const [user, setUser] = useState({
        email: '',
        password: "",
        registartionNo: ""
    })

    const { email,
        password,
        registartionNo } = user

    const submitForm = (e: any) => {
        e.preventDefault()

        const newUserdetails = {
            email: user.email,
            password: user.password,
            registartionNo: user.registartionNo
        }
        const res = axios.post('http://localhost:8080/api/login', newUserdetails).then((res) => {
            console.log(res);
            if (res.data.status === 'Success') {
                setUser({
                    email: "", password: "", registartionNo: "",
                })
            }
        }).catch((err) => {
            console.log(err);
        })
    }

    const handleInput = (event: any) => {
        const { name, value } = event.target
        setUser({ ...user, [name]: value })
    }


    return (
        <>
            <div className="login_container">
                <div className="form_container">
                    <div className="title">
                        <h1>Hello again</h1>
                        <span>Welcome back you have been missed</span>
                    </div>
                    <div className="form">
                        <form action="" onSubmit={submitForm}>
                            <input type="email" name='email' value={email} onChange={(event) => handleInput(event)} />
                            <input type="password" name='password' value={password} onChange={(event) => handleInput(event)} />
                            <input type="number" name='registartionNo' value={registartionNo} onChange={(event) => handleInput(event)} />
                            <input type="submit" />
                        </form>
                    </div>
                </div>
            </div></>
    )
}

export default Login