import React, {useState, useContext} from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Notes from './Pages/Notes'
import CreateNotes from './Pages/CreateNotes'
import EditNotes from './Pages/EditNotes'
import SearchNotes from './Pages/SearchNotes'

import Mycontext from "./MyContext";

 const App = () => {
  const [notes, setNotes] = useContext(Mycontext);

  
  console.log("Notessss",notes);

  
  // useEffect(() => {
  //   console.log("Updated notes state:", notes); 
  // }, [notes]);
  

  // useEffect(() => {
  //   localStorage.setItem('notes',JSON.stringify(notes))
  // }, [notes]);



  const [showdelete, setShowDelete] = useState(false);
  return (
    <div>
      <BrowserRouter>
        <Routes>
           <Route  path='/' element={<Notes notes={notes}/>} />
           <Route  path='/create-note' element={<CreateNotes notes={notes} showdelete={showdelete} setShowDelete = {setShowDelete} updateNotes = {updateNotes}/>} />
           <Route  path='/edit-note/:id' element={<EditNotes notes= {notes} setNotes={setNotes} showdelete={showdelete} setShowDelete = {setShowDelete} updateNotes = {updateNotes}/>} />
           <Route  path='/search-note' element={<SearchNotes notes= {notes}  />} />
        </Routes>
      </BrowserRouter>
    </div>
    // <></>
  )
}

export default App