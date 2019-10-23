const remoteURL = "http://localhost:5002"

export default {
  get(id) {
    return fetch(`${remoteURL}/deadlines/${id}`).then(result => result.json())
  },
  getMyDeadlines(currentUserId) {
    return fetch(`${remoteURL}/deadlines/?userId=${currentUserId}`)
      .then(result => result.json())
  },
  getAll() {
    return fetch(`${remoteURL}/deadlines`).then(result => result.json())
  },
delete(id) {
  return fetch(`http://localhost:5002/deadlines/${id}`, {
      method: "DELETE"
  })
  .then(result => result.json())
},
post(newDeadline) {
  return fetch(`${remoteURL}/deadlines`, {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(newDeadline)
  }).then(data => data.json())
},
update(editedDeadline) {
  return fetch(`${remoteURL}/deadlines/${editedDeadline.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(editedDeadline)
  }).then(data => data.json());
}
}