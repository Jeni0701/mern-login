import { useState } from "react"
import "./new.css"
import axios from "axios"
export default function Ne() {
    const [name, setname] = useState('')
    const [pass, setpass] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        try {
                 axios.post("http://localhost:7000/login", { username: name, password: pass })
                .then(result => console.log(result))
                .catch(err => console.log(err))
        }
        catch {
            console.log("cannot fetch")
        }
    }

    const res = () => {
        alert("login successfully")
    }

    return (
        <div className="container">
            <h3 className="text text-center">Login</h3>
            <form onSubmit={handleSubmit} method="POST">
                <div className="form-group">
                    <label>Username : </label>
                    <input type="text" className="form-control" name="uname" onChange={(e) => setname(e.target.value)} required />
                </div>
                <div className="form-group">
                    <label>Password : </label>
                    <input type="password" className="form-control" name="upass" onChange={(e) => setpass(e.target.value)} required />
                </div>
                <div className="s-container">
                    <button className="btn btn-info" type="submit" onClick={res}>Login</button>
                </div>
            </form>

        </div>
    )
}