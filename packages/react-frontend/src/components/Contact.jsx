import styles from '../styles/contact.module.css'
function Contact() {
	const fluidContainerDivClasses = ['container-fluid', styles['c-fluid-container']].join(' ')
	const h1Classes = ['text-secondary', 'text-center'].join(' ')
	const spanClasses = ['text-primary'].join(' ')
	const emailContainerClasses = ['mb-3', styles['c-email-container']].join(' ')
	const messageContainerClasses = ['mb-3', styles['c-message-container']].join(' ')
	const inputClasses = ['form-control', styles['c-input']].join(' ')
	const textAreaClasses = [inputClasses, styles['c-text-area']].join(' ')
	const buttonClasses = ['btn', 'enable-shadow', 'btn-primary', styles['c-btn']].join(' ')

	return (
		<div className={fluidContainerDivClasses}>
			<h1 className={h1Classes}>
				Contact <span className={spanClasses}>Me</span>
			</h1>
			<form>
				<div className={emailContainerClasses}>
					<input type="text" className={inputClasses} placeholder="Email" />
				</div>
				<div className={messageContainerClasses}>
					<textarea type="text" className={textAreaClasses} placeholder="Message" />
				</div>
			</form>
			<button type="button" class={buttonClasses}>
				Send Message
			</button>
		</div>
	)
}
export default Contact
