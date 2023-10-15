import httpClient from "../api/http-common";

export const readAll =()=>{
    return httpClient.get("/notes")
}

export const saveNotes =(note)=>{
    return httpClient.post("/notes",note)
}

export const readOne = (id) =>{
    return httpClient.get(`/notes/${id}`);
}
export const deleteOne = (id) =>{
    return httpClient.delete(`/notes/${id}`);
}

export const updateOne =(note)=>{
    return httpClient.put("/notes",note)
}
