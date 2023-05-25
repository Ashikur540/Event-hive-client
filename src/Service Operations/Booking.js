

export const BookService = async bookingsData => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/items`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            authorization: `Bearer ${localStorage.getItem('EventHive-token')}`,
        },
        body: JSON.stringify(bookingsData),
    })

    const data = await response.json()
    return data
}
