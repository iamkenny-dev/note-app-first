import React from 'react'
import ReactMarkdown from 'react-markdown'

const Editor = ({ currentNoteId, updateNote } ) => {

  const onEditNote = (key, value) => {
    updateNote({
    ...currentNoteId,
    [key]: value,
    lastModified: Date.now(),
  })
  }

  if (!currentNoteId) return <div className="no-active-note">No Active Note</div>;


  return (
    <div className='editor_container'>
      <div className='editor_input'>
        <input
        id='title'
        type="text"
        value={currentNoteId.title}
        onChange={(e) => onEditNote('title', e.target.value)}
        autoFocus
        />

        <textarea
        id='body'
        placeholder='write your notes here'
        value={currentNoteId.body}
        onChange={(e) => onEditNote('body', e.target.value)}
        type="text"
        />
      </div>

      <div className='preview-container'>
        <h1>{currentNoteId.title}</h1>
        <ReactMarkdown className='markdown-preview'>{currentNoteId.body}</ReactMarkdown>
      </div>
    </div>
  )
}

export default Editor