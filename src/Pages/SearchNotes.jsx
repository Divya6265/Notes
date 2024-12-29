import { React, useEffect, useState } from 'react'
import { FaAngleLeft } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import NoteItem from '../components/NoteItem';

function SearchNotes({ notes }) {

  const [searchNote, setSearchNote] = useState("")
  const navigate = useNavigate();
  const [filteredNotes, setFilteredNotes] = useState([]);

  const handleSearch = () => {
    {
      setFilteredNotes(
        notes.filter(item => {
          console.log(searchNote);
            if (item.title.toLowerCase().match(searchNote.toLowerCase()) || item.content.toLowerCase().match(searchNote.toLowerCase())) {
              return item;
            }
        })
      )
    }
  }
  useEffect(handleSearch, [searchNote]);
  return (
    <>
      <header className='search__notes'>
        <button className='btn' onClick={() => navigate(-1)}> <FaAngleLeft />  </button>
        <input type="text" autoFocus autoComplete='off' name="search" value={searchNote} id="search" onChange={(e) => {  setSearchNote(e.target.value); }} />
        {searchNote && searchNote.length > 0 ? (<button className='btn remove__search' onClick={() => setSearchNote("")} >  <IoClose />  </button>) : null}
      </header>
      <section className="notes_content">
        {
          filteredNotes.map(note => <NoteItem key={note.id} note={note} />)
        }
      </section>
    </>
  )
}

export default SearchNotes