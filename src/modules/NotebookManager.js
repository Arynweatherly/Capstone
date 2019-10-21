const remoteURL = "http://localhost:5002"

export default {
  get(id) {
    return fetch(`${remoteURL}/notebooks/${id}`).then(result => result.json())
  },
  getAll() {
    return fetch(`${remoteURL}/notebooks`).then(result => result.json())
  },
  delete(id) {
    return fetch(`http://localhost:5002/notebooks/${id}`, {
        method: "DELETE"
    })
    .then(result => result.json())
  },
  post(newNotebook) {
    return fetch(`${remoteURL}/notebooks`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newNotebook)
    }).then(data => data.json())
}
}