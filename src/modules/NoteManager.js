const remoteURL = "http://localhost:5002"

export default {

get(id) {
    return fetch(`${remoteURL}/notes/${id}`).then(result => result.json())
},
getMyNotes(id) {
    return fetch(`${remoteURL}/notes/?notebookId=${id}`)
    .then(result => result.json())
},
getAll() {
    return fetch(`${remoteURL}/notes`).then(result => result.json())
  },
delete(id) {
    return fetch(`http://localhost:5002/notes/${id}`, {
        method: "DELETE"
    })
    .then(result => result.json())
  },
getEditedNote() {
  return fetch(`$`)
},

post(newNote) {
    return fetch(`${remoteURL}/notes`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newNote)
    }).then(data => data.json())
},

update(editedNote) {
  console.log("running")
  return fetch(`${remoteURL}/notes/${editedNote.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(editedNote)
  }).then(data => data.json());
}
}