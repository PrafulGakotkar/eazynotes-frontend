import './App.css';
import NoteViewComponent from './components/NoteViewComponent';
import Notes from './components/Notes';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddNoteComponent from './components/AddNoteComponent'; // Make sure this path is correct

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Notes />} />
          <Route path="/mynotes" element={<Notes />} />
          <Route path="/newnotes" element={<AddNoteComponent />} />
          <Route path="/view/:id" element={<NoteViewComponent />} />
          <Route path="/editnote/:id" element={<AddNoteComponent />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
