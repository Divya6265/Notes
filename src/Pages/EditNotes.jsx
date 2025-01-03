import { TiTick } from "react-icons/ti";
import React, { useState, useRef, useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import { IoChevronBack } from "react-icons/io5";
import { useCreateDateDetails } from "../components/useCreateDate";
import Footer from "../components/Footer";
import {db} from "../assets/js/firebase";
import { collection, getDoc, updateDoc, doc } from "firebase/firestore";

function EditNotes({ notes, setNotes, showdelete, setShowDelete, updateNotes }) {

  useEffect(()=>{
    setShowDelete(true);
  }, [setShowDelete]);
  
  const { id } = useParams();
  const note = notes.find((item) => { return item.id == id});
  const [title, setTitle] = useState(note.title || " ")
  const [content, setContent] = useState(note.content || " ")

  const defaultValue = useRef(note?.content || "");

  const date = useCreateDateDetails();

  const handleSubmit = async (e) => {
    e.preventDefault()
    const contentHTML = document.getElementById('content').innerHTML; 
    if (title || content) {
     try{
      const fileDbRef = collection(db, "files")
      const fileRef = doc(fileDbRef, id)
      await updateDoc(fileRef, {
          content : contentHTML,
          date : date,
          title : title
      })
     }catch(err){
      console.log("Error with firebase store in create note", err);
     }
    }
  }


  return (
    <>
      <form className='note__form' action="" onSubmit={handleSubmit}>
        <button className='btn' >  <Link to={`/`}> <IoChevronBack className="backicon" />   </Link> </button>
        <input type="text" name="title" id='title' value={title} onChange={(e) => setTitle(e.target.value)} autoComplete="off" className="title" placeholder='Title' />
        <div className='content' id="content" contentEditable="true" onInput={(e) => setContent(e.currentTarget.textContent)} dangerouslySetInnerHTML={{ __html: defaultValue.current }} autoFocus suppressContentEditableWarning={true} >

        </div>
        {(title.length > 0) || (content.length > 0) ? (
          <button className='btn save__note'>
            <TiTick />
          </button>
        ) : null}

      </form>
      <Footer showdelete={showdelete} setShowDelete={setShowDelete} notes = {notes} id = {id} setNotes = {setNotes}/>

    </>

  )
}

export default EditNotes