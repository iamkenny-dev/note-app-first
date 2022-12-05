import { useState, useEffect } from 'react'
import Sidebar from './components/Sidebar'
import Editor from './components/Editor'
import uuid from 'react-uuid'


function App() {


  const [notes, setNotes] = useState(
    () => JSON.parse(localStorage.getItem('notes')) || []
    )

  const [currentNoteId, setCurrentNoteId] = useState(false)


  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes))
  }, [notes])



  const deleteNote = (e, deleteId) => {
    e.stopPropagation()
      setNotes(notes.filter(note => note.id !== deleteId))
  }

  const createNewNote = () => {
      const newNote = {
        id: uuid(),
        title: "Note Title",
        body: "",
        lastModified: Date.now()
      }
      setNotes([newNote, ...notes])
  }

    const getNoteId = () => {
      return notes.find(note => note.id === currentNoteId)
    }

  const updateNote = (updatedNote) => {
    const updatedNotesArray = notes.map(note => {
      if (note.id === updatedNote.id) {
        return updatedNote
      }

      return note
    })
    setNotes(updatedNotesArray)
  }

  return (
    <div className="app">

      <Sidebar
      newNote={createNewNote}
      notes={notes}
      deleteNote={deleteNote}
      currentNoteId={currentNoteId}
      setCurrentNoteId={setCurrentNoteId}
      />
      <Editor
      currentNoteId={getNoteId()}
      updateNote={updateNote}
      />
    </div>
  )
}

export default App
