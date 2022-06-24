import {useState, useEffect} from 'react'

const SignUp = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const createUser = async () => {
        const req = await fetch('http://localhost:3003/api/users/create', {
           
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name,
                email,
                password
            })
        })
        const data = await req.json()   
        console.log(data.body)

    }

    useEffect(() => {
        createUser()
        return () => {
            console.log('cleanup')
        }
    })


    return(
        <>
            <h1>Sign Up</h1>
            <form>
                <label>Nom</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
                <label>Email</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <label>Password</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button>Sign Up</button>
            </form>
        </>
    )
}

export default SignUp;