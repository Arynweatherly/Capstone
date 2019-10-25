const remoteURL = 'http://localhost:5002';

export default {
    getFriends(currentUserId) {
        return fetch(
          `http://localhost:5002/friends/?initiatorId=${currentUserId}&_expand=user`
        ).then(response => response.json());
      },
      getAll(resource) {
        return fetch(`${remoteURL}/${resource}`).then(newObj => newObj.json());
      },

      delete(resource, id) {
        return fetch(`${remoteURL}/${resource}/${id}`, {
          method: "DELETE"
        }).then(newObj => newObj.json());
      },
      put(resource, editObj) {
        return fetch(`${remoteURL}/${resource}/${editObj.id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(editObj)
        }).then(editObj => editObj.json());
      },
    delete(id) {
        return fetch(`http://localhost:5002/friends/${id}`, {
            method: "DELETE"
        })
        .then(result => result.json())
      },
      post(newFriend) {
        return fetch(`${remoteURL}/friends`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newFriend)
        }).then(data => data.json())
      },
      findFriend(username) {
        return fetch(`${remoteURL}/users?username_like=${username}`).then(result => result.json())
    }
};
