import './SuccessMessage.css'
import successIcon from '../images/icon-list.svg'

export default function SuccessMessage({onDismiss, email}) {
	return (
		<>
			<div className='success-container'>
				<div className='message-content'>
					<img className='success-image' src={successIcon} alt="" />
					<h1 className='message-title'>Thanks for subscribing!</h1>
					<p className='message-text'>A confirmation email has been sent to <span className='your-email'>{email}</span>. 
  					 Please open it and click the button inside to confirm your subscription.</p>
				</div>
				<button onClick={onDismiss} className='btn message-btn'>Dismiss message</button>
			</div>
		</>
	);
}
