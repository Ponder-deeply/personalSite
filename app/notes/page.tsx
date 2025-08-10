import { NotesDisplay, NotesNew } from './notes-client';

export default function Notes() {


  // fetchNotes and side effects are handled by notesDisplay 

  return (
    < div className={`sec flex-auto
        p-[5vw] border-t-2 mt-
        border-(--color-foreground)
        
        `}>
      {/* Title */}
      < h1 className="text-center animate-pulse" > Notes page</h1 >
      {/* New note interface */}
      <NotesNew />
      {/* Notes display - client side */}
      <NotesDisplay />
    </div >
  );
}
