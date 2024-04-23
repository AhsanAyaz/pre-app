import { FC } from "react";
import { Note } from "../types";
import StickyNote from "./StickyNote";

type NotesProps = {
  notes: Note[]
}

const Notes: FC<NotesProps> = ({
  notes
}) => {
  return (
    <ul className="mx-auto place-items-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {notes.map((noteItem) => {
        return (
          <StickyNote key={noteItem.id} note={noteItem} />
        );
      })}
    </ul>
  );
};

export default Notes;
