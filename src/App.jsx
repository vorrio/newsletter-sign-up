import { useState } from 'react'
import SignUpForm from './components/SignUpForm.jsx'
import SuccessMessage from './components/SuccessMessage.jsx'
import './App.css'

function App() {

	const [isSubmitted, setIsSubmitted] = useState(true);
	const [email, setEmail] = useState('')

	function toForm() {
		console.log("bacl")
		setIsSubmitted(false);
	}
	function toMessageSuccess(email) {
		setIsSubmitted(true);
		setEmail(email)
	}

  return (
    <>
      <main>
				{!isSubmitted && <SignUpForm onSubmit={toMessageSuccess}/>}
				{isSubmitted && <SuccessMessage onDismiss={toForm} email={email}/> }
			</main>
    </>
  )
}

export default App
