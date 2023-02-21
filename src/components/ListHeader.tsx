import React from 'react'

function ListHeader({ listName }) {
	const signout = () => {
		console.log('signout')
	}

	return (
		<div className="list-header">
			<h1>{listName}</h1>
			<div className="button-container">
				<button className="create">Add New</button>
				<button className="signout" onClick={signout}>
					Sign Out
				</button>
			</div>
		</div>
	)
}

export default ListHeader
