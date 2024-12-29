import { useState } from 'react'
import { TiTick } from "react-icons/ti";
import { v4 as uuid } from 'uuid';
import { useCreateDateDetails } from "../components/useCreateDate";
import { IoChevronBack } from "react-icons/io5";
import { Link, useNavigate } from 'react-router-dom';

function CreateNotes({ setNotes }) {

  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const navigate = useNavigate();

  const handleSumbit = (e) => {
    e.preventDefault()
    if (title || content) {
      const note = { id: uuid(), title: title, content: content, date: useCreateDateDetails() }
      setNotes(prevNotes => [note, ...prevNotes])
      navigate(`/edit-note/${note.id}`);
    }

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
      <form className='note__form' action="">
        <button className='btn' >  <Link to={`/`}> <IoChevronBack className="backicon" />   </Link> </button>
        <input type="text" name="title" id='title' value={title} onChange={(e) => setTitle(e.target.value)} autoComplete='off' autoFocus className="title" placeholder='Title' />
        <div className='content' id='content' onInput={(e) => setContent(e.currentTarget.textContent)} suppressContentEditableWarning={true} contentEditable="true">

        </div>
        {(title.length > 0) || (content.length > 0) ? (
          <button onClick={handleSumbit} className='btn save__note'>
            <TiTick />
          </button>
        ) : null}
        <input type="file" onChange={uploaadImage} name="imgUpload" id="imgUpload" />
      </form>
    </>
  )
}

export default CreateNotes