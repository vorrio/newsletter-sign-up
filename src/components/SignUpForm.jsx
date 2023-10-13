import './SignUpForm.css'
import {useState, useRef} from 'react'
import desktopImage from '../images/illustration-sign-up-desktop.svg'
import mobileImage from '../images/illustration-sign-up-mobile.svg'
import listIcon from '../images/icon-list.svg'

export default function SignUpForm({onSubmit}) {
	const [inputText, setInputText] = useState('');
	const [formState, setFormState] = useState('edit')
	const inputRef = useRef(null)

	const handleSubmit = (e) => {
		e.preventDefault()
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if(!emailRegex.test(inputRef.current.value)) {
			setFormState('error');
			return
		}
		onSubmit(inputRef.current.value)
	}

	const handleInputChange = (e) => {
		setFormState('edit');
    setInputText(e.target.value);
  };

	let inputClass = 'form-input'
	if(formState === 'error') inputClass += ' error'

	return (
		<div className='form-container'>
			<img className='form-image-mobile' src={mobileImage} alt="form image" />
			<div className='form-content'>
				<h1 className='form-title'>Stay updated!</h1>
				<p className='form-text'>Join 60,000+ product managers receiving monthly updates on:</p>
				<CheckList list={[
					"Product discovery and building what matters",
					"Measuring to ensure updates are a success",
					"And much more!"]}/>
				<form onSubmit={handleSubmit}>
					<div className='flex-between'>
						<p className='form-label'>Email address</p>
						{formState === 'error' && <p className='form-error'>Valid email required</p>}
					</div>
					<input className={inputClass} 
								 ref={inputRef}
								 type="text" 
								 placeholder='email@company.com'
								 value={inputText}
								 onChange={handleInputChange}
					/>
					<button className='btn' type='submit'>Subscribe to monthly newsletter</button>
				</form>
			</div>
			<img className='form-image-desktop' src={desktopImage} alt="form image" />
		</div>
	);
}
git 
function CheckList({list}) {
	const listItems = list.map(item => 
		<li className='checklist-item'>
			<img src={listIcon} alt="" />
			<p className='form-text'>{item}</p>
		</li>
	)
	return (
		<ul className='checklist'>{listItems}</ul>
	)
}