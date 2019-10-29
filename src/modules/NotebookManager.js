const remoteURL = "http://localhost:5002"

export default {

  get(id) {
    return fetch(`${remoteURL}/notebooks/${id}`).then(result => result.json())
  },
  getMyNotebooks(id) {
    return fetch(`${remoteURL}/notebooks/?userId=${id}`)
      .then(result => result.json())
  },



//   getUserSpecificNotebooks(userId) {
//     return fetch(`${remoteURL}/notebooks/?userId=${userId}`)
//   },
//   getUserSpecificNotebooks(userId) {
//       let userFriends = [];
//       return this.getFriends(userId)
//       .then(data => {
//         data.forEach(obj => {
//             userFriends.push(obj.userId);
//         });
//       })
//       .then(() => {
       
//         return fetch(
//             `http://localhost:5002/notebooks/userId/?expand=userId`
//             ).then(response => response.json());
//         });

//     },
//     getFriends(user) {
//     return fetch(
//       `http://localhost:8088/friends/?initiatorId=${user}&_expand=user`
//     ).then(response => response.json());
//   }
// };

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
},
update(editedNotebook) {
  return fetch(`${remoteURL}/notebooks/${editedNotebook.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(editedNotebook)
  }).then(data => data.json());
}
}