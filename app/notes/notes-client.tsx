"use client"
import type { Note } from './notes-logic';
import { fetchNotes, toggleNote, deleteNote, addNote } from './notes-logic';
import { useEffect, useState } from 'react';

export { NotesGrid as NotesDisplay, NotesNew }


function NoteCard(note: Note) {
  return (
    <li key={note.id} className={`text-center m-1 p-2 
                        ${note.completed ? "border-1" : "border-5"}`}>
      <span
        onClick={() => toggleNote(note.id, note.completed)}>
        <h3>{note.title}</h3>
        <p className={note.completed ? "text-red" : "text-green"}>{note.completed ? "Note done" : "Not done"}</p>
      </span>

      <p>{note.content}</p>
      <a className='relative bottom-0 right-0' onClick={() => deleteNote(note.id)}>Delete </a>
    </li>
  );

}

function NotesNew() {
  const [newNote, setNewNote] = useState<Note>({} as Note);

  return (
    <div className={`border-3 mt-3 p-3
  duration-500 flex flex-col
  hover: bg-(--color-foreground) group text-center`}>
      < h3 className="flex-row" > New Note</h3 >

      {/* -note title input */}
      < div className="flex-row" ><label htmlFor="title"
        className="peer/title">
        Note title:
      </label>
        <input
          id="title"
          type="text"
          required
          value={newNote.title}
          onChange={(e) => { setNewNote({ ...newNote, title: e.target.value }) }}
          placeholder="..."
          className="peer-hover/title:text-[red]
                duration-300 flex-row
                m-2 pl-3 pr-3 border-1"
        />
      </div >

      {/* -note content input */}
      < label htmlFor="content" className="block peer/content" > Content: </label >
      <textarea
        id="content"
        value={newNote.content}
        onChange={(e) => setNewNote({ ...newNote, content: e.target.value })}
        placeholder=""
        className="peer-hover/content:text-[red]
                duration-300 rounded flex-row
                m-2 p-2 border-1 text-sm "
      />

      {/* -addNote Button */}
      <button onClick={() => addNote(newNote, setNewNote)}
        className="bg-(--color-foreground) rounded pr-2 pl-2
                    w-15 border-2 border-3 duration-300
                    group-hover:text-(--color-foreground) group-hover:bg-(--color-background)">
        Add
      </button>
    </div >
  );
}


function NotesGrid() {
  const [notes, setNotes] = useState<Note[]>([]);

  // fetchNotes
  useEffect(() => {
    const notesEffect = async () => {
      try {
        const data = await fetchNotes();
        setNotes(data);
        console.log("Wonderful");
      } catch (e) {
        // cry 
        console.log("FUCK FUCK FUCK");
      }
    }
    notesEffect();
  }
    , []);


  return < ul className="m-3 grid grid-cols-2 border-2" >
    {
      notes.map((note: Note) => NoteCard(note))
    }

  </ul >
}
