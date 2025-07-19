export {fetchNotes, addNote, toggleNote, deleteNote};
export type {Note};

interface Note {
    id: number;
    title: string;
    content: string;
    completed: boolean;
}

// Fetch Notes
async function fetchNotes(): Promise<Note[]> {
    const res = await fetch("/api/notes");
    const data = await res.json();
    return await data; 
};

// Post a Note
const addNote = async (newNote : string[], setNewNote : (arg0 : string[]) => void  ) => {
    if (!newNote) return;
    await fetch('/api/notes', {
        method: "POST",
        body: JSON.stringify({ title: newNote[0], content: newNote[1] }),
        headers: { "Content-Type": "application/json" },
    });
    setNewNote(["", ""])
    location.reload();
};

// Toggle completition
const toggleNote = async (id: number, completed: boolean) => {
    await fetch("/api/notes", {
        method: "PUT",
        body: JSON.stringify({ id, completed: !completed }),
        headers: { "Content-Type": "application/json" },
    });
    location.reload();
}

// Delete a Note
const deleteNote = async (id: number) => {
    await fetch('/api/notes', {
        method: "DELETE",
        body: JSON.stringify({ id }),
        headers: { "Content-Type": "application/json" },
    });
    location.reload();
}