const remoteURL = "http://localhost:5002"

export default {
  get(id) {
    return fetch(`${remoteURL}/reviews/${id}`).then(result => result.json())
  },
  getAll() {
    return fetch(`${remoteURL}/reviews?_sort=rating&_order=desc`)
    .then(result => result.json())
},
  getMyReviews(id) {
    return fetch(`${remoteURL}/reviews/?noteId=${id}`)
    .then(result => result.json())
},
  delete(id) {
    return fetch(`http://localhost:5002/reviews/${id}`, {
        method: "DELETE"
    })
    .then(result => result.json())
  },


post(newReview) {
    return fetch(`${remoteURL}/reviews`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newReview)
    })
    .then(data => data.json())
},
deleteReview(id) {
    return fetch(`${remoteURL}/reviews/${id}`,
    {method: "DELETE"
    })
    .then(response => response.json())
},
editReview(editedReview) {
    return fetch (`${remoteURL}/reviews/${editedReview.id}`,  {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(editedReview)
    })
    .then(response => response.json());
},
}