import { useState } from 'react'
import './index.css'

const Home = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [nameErrorMsg, setNameErrorMsg] = useState('')
    const [emailErrorMsg, setEmailErrorMsg] = useState('')
    const [errorMsg, setErrorMsg] = useState('')

    const onSubmitForm = event => {
        event.preventDefault()

        if (name === '') {
            setNameErrorMsg('Enter Name')
            setEmailErrorMsg('')
            setErrorMsg('')
        }
        else if (email === '') {
            setEmailErrorMsg('Enter Email')
            setNameErrorMsg('')
            setErrorMsg('')
        }
        else if (message === '') {
            setErrorMsg('Enter Message')
            setNameErrorMsg('')
            setEmailErrorMsg('')
        }

        if (name !== '' && email !== '' && message !== '') {
            setName('')
            setEmail('')
            setMessage('')
            setIsSubmitted(true)
        }
    }

    return (
        <div className='home-card'>
            {isSubmitted ? (
                <p className='success-message'>Successfully Submitted!</p>
            ) : (
                <form className='form-card' onSubmit={onSubmitForm}>
                    <h1 className='form-heading'>Contact Form</h1>
                    <input value={name} onChange={event => setName(event.target.value)} className='form-input' type='text' placeholder='NAME' />
                    {nameErrorMsg !== '' && <p className='error-msg'>{nameErrorMsg}</p>}
                    <input value={email} onChange={event => setEmail(event.target.value)} className='form-input' type='text' placeholder='EMAIL' />
                    {emailErrorMsg !== '' && <p className='error-msg'>{emailErrorMsg}</p>}
                    <textarea value={message} onChange={event => setMessage(event.target.value)} className='form-message' rows={5} placeholder='MESSAGE'></textarea>
                    {errorMsg !== '' && <p className='error-msg'>{errorMsg}</p>}
                    <button className='form-submit-btn'>Submit</button>
                </form>
            )}
        </div>
    )
}

export default Home