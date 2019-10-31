const remoteURL = 'http://localhost:5002';

export default {
	getUser(userName) {
    console.log('username for login', userName)
		return fetch(`${remoteURL}/users?username=${userName}`).then(result =>
			result.json()
		);
	},
	createUser(user) {
		return fetch(`${remoteURL}/users/`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(user)
		}).then(Response => Response.json());
	},
	getUserById(id) {
		return fetch(`${remoteURL}/users/${id}`).then(result => result.json());
	}
};