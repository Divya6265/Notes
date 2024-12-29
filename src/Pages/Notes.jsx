import React, { useState } from 'react'
import { CiSearch } from "react-icons/ci";
import { Link } from 'react-router-dom';
import { BsPlusLg } from "react-icons/bs";
import NoteItem from '../components/NoteItem';

function Notes({notes}) {
    const [showSearch, setShowSearch] = useState(false);
  return (
   <>
     <section>
        <header className="notes__header">
            <h1>Notes</h1>
            <button className='btn'><Link to={`/search-note`}>  <CiSearch className='searchicon' /> </Link></button>
        </header>
        <div className="notes__container">
            { 
                notes.map(note => <NoteItem key={note.id} note={note}/>)
            }
        </div>
        <Link to={`/create-note`} style={{ backgroundColor: 'rgba(52,52,52,255)'}} > <BsPlusLg className='add_btn'/> </Link>
    </section>
   </>
  )
}

export default Notes