import React, { useEffect, useState } from "react";
import { readAll } from "../services/notes.service";
import { Link } from "react-router-dom";

const Notes = () => {
    const [notes, setNotes] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        readAll()
            .then((response) => {
                
                console.log(`received the data from API ${response.data}`);
                setNotes(response.data);
            })
            .catch((error) => {
                console.log(`error occurred ${error}`);
                setError(error);
            });
    }, []);

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div>
            <h1>Notes</h1>
            <Link to='/newnotes'>New Note</Link>
            <table border={1}>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {notes.map((note) => (
                        <tr key={note.id}>
                            <td>{note.title}</td>
                            <td>{note.body}</td>
                            <td>
                                <Link to={`/view/${note.id}`}>View</Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Notes;
