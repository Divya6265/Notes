import { useEffect, useState } from 'react'
import { TiTick } from "react-icons/ti";
import { v4 as uuid } from 'uuid';
import { useCreateDateDetails } from "../components/useCreateDate";
import { IoChevronBack } from "react-icons/io5";
import { Link, useNavigate } from 'react-router-dom';
import Footer from "../components/Footer"

import {db} from "../assets/js/firebase"
import { collection, addDoc } from 'firebase/firestore';


function CreateNotes({ notes, showdelete, setShowDelete, updateNotes }) {
  useEffect(()=>{
    setShowDelete(false);  
  }, setShowDelete );
  
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault()
    const contentHTML = document.getElementById('content').innerHTML; // Get HTML content
    if (title || content) {
     try{
      const docRef = await addDoc(collection(db, "files"), {
        content : contentHTML,
        date : useCreateDateDetails(),
        title : title
      });
      navigate(`/edit-note/${docRef.id}`);
     }catch(err){
      console.log("Error with firebase store in create note", err);
     }
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
          <button onClick={handleSubmit} className='btn save__note'>
            <TiTick />
          </button>
        ) : null}
      </form>
      <Footer showdelete = {showdelete} setShowDelete = {setShowDelete}/>

    </>
  )
}

export default CreateNotes