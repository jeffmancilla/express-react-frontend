const NewPersonForm = () => {
	const [newForm, setNewForm] = useState({ name: '', title: '', image: '' })
	const handleChange = async (e) => {}
	return (
		<>
			<h2>waddup</h2>
			<form>
				<input type="text" name="name" placeholder="name" />
				<input type="text" name="title" placeholder="title" />
				<input type="text" name="image" placeholder="image url" />
				<button type="submit">Create Person</button>
			</form>
		</>
	)
}

export default NewPersonForm
