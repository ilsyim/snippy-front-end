import * as tokenService from '../services/tokenService'

const BASE_URL = `${process.env.REACT_APP_BACK_END_SERVER_URL}/api/notes`

async function addNote(noteData, videoId) {
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: { 
      'Authorization': `Bearer ${tokenService.getToken()}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(noteData)
  })
  return await res.json()
}


async function show() {
  const res = await fetch(BASE_URL, {
    headers: { 
    'Authorization': `Bearer ${tokenService.getToken()}`,
    }
  })
  return await res.json()
}

async function deleteNote(noteId) {
  const res = await fetch(`${BASE_URL}/${noteId}`, {
    method: "DELETE",
    headers: { 
      'Authorization': `Bearer ${tokenService.getToken()}`,
    }
  })
  return await res.json()
}

async function updateNote(noteData, videoId) {
  const res = await fetch(`${BASE_URL}/${noteData._id}`, {
    method: "PUT",
    headers: { 
      'Authorization': `Bearer ${tokenService.getToken()}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(noteData, videoId)
  })
  return await res.json()
}


export {
  addNote,
  show,
  deleteNote,
  updateNote,

}
