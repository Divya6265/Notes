import { TiTick } from "react-icons/ti";
import React, { useState, useRef } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import { IoChevronBack } from "react-icons/io5";
import { useCreateDateDetails } from "../components/useCreateDate";


function EditNotes({ notes, setNotes }) {

  const { id } = useParams();
  const note = notes.find(item => item.id == id);

  const [title, setTitle] = useState(note.title || " ")
  const [content, setContent] = useState(note.content || " ")

  const defaultValue = useRef(note.content)

  const navigate = useNavigate();
  const date = useCreateDateDetails();

  const handleSubmit = (e) => {
    e.preventDefault()
    if (title || content) {
      const newnote = { ...note, title, content, date }

      const newNotes = notes.map(item => {
        if (item.id == id) {
          item = newnote
        }
        return item
      })

      setNotes(newNotes);
      navigate("/");
    }

  }


  const handleDelete = () => {
      const newNotes = notes.filter(item => item.id != id);

      setNotes(newNotes);
      navigate("/");
  }

  const uploaadImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const img = document.createElement('img');
        img.src = e.target.result;
        document.getElementById('content').innerHTML += img.outerHTML;
      }
      reader.readAsDataURL(file);
    }
  }


  return (
    <>
      <form className='note__form' action="" onSubmit={handleSubmit}>
        <button className='btn' >  <Link to={`/`}> <IoChevronBack className="backicon" />   </Link> </button>
        <input type="text" name="title" id='title' value={title} onChange={(e) => setTitle(e.target.value)} autoComplete="off" className="title" placeholder='Title' />
        <div className='content' contentEditable="true" onInput={(e) => setContent(e.currentTarget.textContent)} dangerouslySetInnerHTML={{ __html: defaultValue.current }} autoFocus suppressContentEditableWarning={true} >

        </div>
        {(title.length > 0) || (content.length > 0) ? (
          <button className='btn save__note'>
            <TiTick />
          </button>
        ) : null}

      </form>
      <button onClick={handleDelete}>delete</button>
    </>

  )
}

export default EditNotes