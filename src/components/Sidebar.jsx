import React from 'react'

const Sidebar = ({ notes, currentNoteId, setCurrentNoteId, deleteNote, newNote }) => {

const sortedNotes = notes.sort((a, b) => b.lastModified - a.lastModified)

const notesArray = sortedNotes.map(({ id, title, body, lastModified }, index) => (
        <div
        key={id}
        className={`notes_block ${id === currentNoteId && "active"}`}
        onClick={() => setCurrentNoteId(id)}
        >

            <div className='note_block'>
              <div className="note-title">
                <h1>{title}</h1>
                <h3>{ body } </h3>
              </div>
                <button onClick={(e) => deleteNote(e, id)}>delete</button>
            </div>

            <small className="note-meta">
              Last Modified{" "}
              {new Date(lastModified).toLocaleDateString("en-GB", {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </small>
            <hr />

        </div>
  )
)



  return (
    <div className='sidebar_container'>
        <div className='note_heading'>
            <h1>Notes</h1>
            <button onClick={newNote} className='note_button'>+</button>
        </div>

        {notesArray}


    </div>
  )
}

export default Sidebar