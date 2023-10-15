import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { readOne, deleteOne } from "../services/notes.service";

const NoteViewComponent = () => {
    const { id } = useParams();
    const navigate =  useNavigate();
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [category, setCategory] = useState('');
    const [updatedAt, setUpdatedAt] = useState('');

    const getNoteById = async (id) => {
        try {
            const response = await readOne(id);
            const existingNote = response.data;

            setTitle(existingNote.title);
            setBody(existingNote.body);
            setCategory(existingNote.category);
            setUpdatedAt(existingNote.updatedAt);
            }
         catch (error) {
            console.error('Error occurred while retrieving the data from API');
        }
    }

    const deleteNote = async () => {
        try {
            await deleteOne(id);
            navigate("/mynotes");
        } catch (error) {
            console.error('Error occurring while deleting the note');
        }
    }

    useEffect(() => {
        
            // getNoteById(id);
            if (id) {
                getNoteById(id);
            }
        
    }, [id]);

    return (
        <div>
            <div>
                <h1>Note Details</h1>
                <hr />
                <h2>{title}</h2>
                 <p>Posted on {new Date(updatedAt).toDateString()} by Praful</p>
                <span>{category}</span>
            </div>
            <div dangerouslySetInnerHTML={{ __html: body }} ></div>
            <button onClick={deleteNote}>Delete</button>
            <Link to={`/editnote/${id}`}>Edit</Link>
            <Link to="/">Back to Notes</Link>
        </div>
    );
}

export default NoteViewComponent;
