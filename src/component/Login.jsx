import { useState } from 'react'
import bgimg from '../images/bgimg.jpg'
import './Login.css'

function Login() {
    const [form, setForm] = useState({
        name: "",
        phoneno: "",
        gmail: "",
        password: ""
    })
    function handelchange(e) {
        const { value, name } = e.target
        setForm({
            ...form,
            [name]: value
        })
    }
    function handelclick(e) {
        e.preventDefault()
        console.log(form.name, form.phoneno, form.gmail, form.password)
        setForm(
            {
                name: "",
                phoneno: "",
                gmail: "",
                password: ""

            }
        )

    }
    return (
        <>
        <div className="img">
            <img src={bgimg} alt="" />
        </div>
        <div className='main'>
            <form action="" className='formbox'>
                <label htmlFor="">Name</label>
                <input type="text"  onChange={handelchange} name="name" value={form.name}/>
                <label htmlFor="">Phone No</label>
                <input type="text" onChange={handelchange}  name="phoneno" value={form.phoneno}/>
                <label htmlFor="">Gmail</label>
                <input type="text" onChange={handelchange}  name="gmail" value={form.gmail}/>
                <label htmlFor="">PassWord</label>
                <input type="password" onChange={handelchange}  name="password" value={form.password}/>
                <button onClick={handelclick}>Submit</button>
            </form>
        </div>
        </>
        
    )
}

export default Login