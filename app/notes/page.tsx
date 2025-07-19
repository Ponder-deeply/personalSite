"use client"
import { useState, useEffect } from "react";
import { fetchNotes, addNote, toggleNote, deleteNote } from "@/app-content/notes/notes";
import type { Note } from "@/app-content/notes/notes";


export default function Notes() {
    const [notes, setNotes] = useState<Note[]>([]);
    const [newNote, setNewNote] = useState(["", ""]);

    // Effect 
    
    useEffect(() => {

    } 
    , []);

    return (
        <div className={`sec flex-auto
        p-[5vw] border-t-2 mt-
        border-(--color-foreground)
        
        `}>
            <h1 className="text-center animate-pulse" >Notes page</h1>

            <div className="border-3 mt-3 p-3
                duration-500 flex flex-col
                hover:bg-(--color-foreground) group text-center">
                <h3 className="flex-row">New Note</h3>

                {/* Note title input */}
                <div className="flex-row"><label htmlFor="title" 
                className="peer/title">
                    Note title:
                </label>
                    <input
                        id="title"
                        type="text"
                        required
                        value={newNote[0]}
                        onChange={(e) => { setNewNote([e.target.value, newNote[1]]) }}
                        placeholder="..."
                        className="peer-hover/title:text-[red]
                duration-300 flex-row
                m-2 pl-3 pr-3 border-1"
                    />
                </div>

                {/* Note content input */}
                <label htmlFor="content" className="block peer/content">Content: </label>
                <textarea
                    id="content"
                    value={newNote[1]}
                    onChange={ (e) => setNewNote([newNote[0], e.target.value]) }
                    placeholder=""
                    className="peer-hover/content:text-[red]
                duration-300 rounded flex-row
                m-2 p-2 border-1 text-sm "
                />
                
                {/* AddNote Button */}
                <button onClick={() => addNote(newNote, setNewNote) }
                    className="bg-(--color-foreground) rounded pr-2 pl-2
                    w-15 border-2 border-black
                    group-hover:text-(--color-foreground) group-hover:bg-(--color-background)">
                    Add
                </button>
            </div>

            <ul className="m-3 flex">
                { notes.map((note : Note) => (
                        <li key={note.id} className={`flex-1 border-1 text-center
                        ${ note.completed ? "bg-white" : "bg-red" }`}>
                            <span className="" 
                            onClick={() => toggleNote(note.id, note.completed)}>
                                <h3>{note.title}</h3>
                                <p>{note.completed}</p>
                            </span>

                            <p>{note.content}</p>
                        </li>
                    ))}
            </ul>
        </div>
    );
}