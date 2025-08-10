export { fetchNotes, addNote, toggleNote, deleteNote };
export type { Note };

type Note = {
  id: number;
  title: string;
  content: string;
  completed: boolean;
}

// Fetch Notes
async function fetchNotes(): Promise<Note[]> {
  const res = await fetch("/api/notes");
  const data = await res.json();
  return data;
};

// Post a Note
const addNote = async (newNote: Note, setNewNote: (arg0: Note) => void) => {
  if (!newNote) return;
  await fetch('/api/notes', {
    method: "POST",
    body: JSON.stringify(newNote),
    headers: { "Content-Type": "application/json" },
  });
  setNewNote({} as Note)
  location.reload();
};

// Toggle completition
const toggleNote = async (id: number, completed: boolean) => {
  await fetch("/api/notes", {
    method: "PUT",
    body: JSON.stringify({ id, completed }),
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
