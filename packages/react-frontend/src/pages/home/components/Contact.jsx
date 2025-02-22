function Contact() {

	return (
		<div className="">
			<h1 className="">
				Contact <span className="">Me</span>
			</h1>
			<form>
				<div className="">
					<input type="text" className="" placeholder="Email" />
				</div>
				<div className="">
					<textarea type="text" className="" placeholder="Message" />
				</div>
			</form>
			<button type="button" className="">
				Send Message
			</button>
		</div>
	)
}
export default Contact
