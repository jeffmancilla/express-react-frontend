import { useEffect, useState } from 'react'
import NewPersonForm from './NewPersonForm'

const People = () => {
	const [isLoading, setIsLoading] = useState(true)
	const [people, setPeople] = useState([])

	const BASE_URL = 'http://localhost:4000/people'
	const fetchPeople = async (url) => {
		try {
			const response = await fetch(url)
			const data = await response.json()
			setPeople(data)
			setIsLoading(false)
		} catch (err) {
			console.error(err)
		}
	}

	useEffect(() => {
		fetchPeople(BASE_URL)
	}, [])

	return isLoading ? (
		<>loading...</>
	) : (
		<>
			<NewPersonForm />
			{JSON.stringify(people)}
		</>
	)
}

export default People
