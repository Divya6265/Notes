import {useState, useEffect} from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Notes from './Pages/Notes'
import CreateNotes from './Pages/CreateNotes'
import EditNotes from './Pages/EditNotes'
import SearchNotes from './Pages/SearchNotes'


 const App = () => {
  const [notes, setNotes] = useState(JSON.parse(localStorage.getItem('notes')) || []);
  useEffect(() => {
    localStorage.setItem('notes',JSON.stringify(notes))
  }, [notes]);

  
  return (
    <div>
      <BrowserRouter>
        <Routes>
           <Route  path='/' element={<Notes notes={notes}/>} />
           <Route  path='/create-note' element={<CreateNotes setNotes = {setNotes} /> } />
           <Route  path='/edit-note/:id' element={<EditNotes notes= {notes} setNotes={setNotes} />} />
           <Route  path='/search-note' element={<SearchNotes notes= {notes} />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App