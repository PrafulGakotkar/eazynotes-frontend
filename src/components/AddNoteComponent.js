import {Formik , Field,Form} from 'formik'
import { Editor } from "@tinymce/tinymce-react";
import * as appConst from "../util/ApplicationConstants";
import { readOne, saveNotes, updateOne } from '../services/notes.service';
import { useNavigate, Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';




const AddNoteComponent = () => {

        const navigate = useNavigate();
        const {id} =useParams()

        const [title, setTitle] = useState('');
        const [body, setBody] = useState('');
        const [category, setCategory] = useState('');
        const [autoIncrementId,setAutoIncrementId] = useState(null)

    const handeleSubmit = async (values)=>{
                let response = null;
            if (values.id) {
                  response = await updateOne(values);
                
            }else{
                  response = await saveNotes(values);
                    navigate("/");
            }


            // console.log("form values",values)

            if (!response) {
                throw Error('Error Occured While Storing to the database')
                
            }
            console.log(`printing the response object ${response.data}`)
            navigate("/")
    }

    const getNoteById = async (id) => {
        try {
            const response = await readOne(id);
            const existingNote = response.data;

            setTitle(existingNote.title);
            setBody(existingNote.body);
            setCategory(existingNote.category);
            setAutoIncrementId(existingNote.id);
            }
         catch (error) {
            console.error('Error occurred while retrieving the data from API');
        }
    }

    useEffect(()=>{
        if (id) {
            getNoteById(id);
        }
    })



    return (
        <div>
            <h1>Add New Note</h1>
            <Formik
                 initialValues={
                    {
                        title:title,
                        body:body,
                        category:category,
                        id:autoIncrementId
                    }
                 }
                 enableReinitialize
                 onSubmit={handeleSubmit}
            
            >
                <Form>
                    <Field id='id' name='id' type= "hidden" />
                    <label >Title</label>
                    <Field placeholder = "Enter Title" name='title'>

                    </Field>
                    <label >Description</label>
                    <Field placeholder="Enter Description" name='body'>
                        {({form})=>{
                            const {setFieldValue}=form;
                            return(
                                <>
                                <Editor 
                                    apiKey= {appConst.TINYMCE_API_KEY}
                                        value={form.values.body}
                                        init={{
                                            selector: 'textarea',
                                            plugins: 'ai tinycomments mentions anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed permanentpen footnotes advtemplate advtable advcode editimage tableofcontents mergetags powerpaste tinymcespellchecker autocorrect a11ychecker typography inlinecss',
                                            toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | align lineheight | tinycomments | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
                                            tinycomments_mode: 'embedded',
                                            tinycomments_author: 'Author name',
                                            mergetags_list: [
                                                { value: 'First.Name', title: 'First Name' },
                                                { value: 'Email', title: 'Email' },
                                            ],
                                            ai_request: (request, respondWith) => respondWith.string(() => Promise.reject("See docs to implement AI Assistant"))
                                        }}

                                        onEditorChange={(content) => {
                                            setFieldValue('body', content);
                                        }}

                                />

                                
                                </>
                            )
                        }}
                    </Field>
                    <label >Category</label>
                    <Field placeholder="Enter Category" name='category'>

                    </Field>
                <button type='submit'>submit</button>
                </Form>
            </Formik>
            <Link to='/mynotes'>Back To Notes</Link>
        </div>
    )
}
 
export default AddNoteComponent; 