export const TINYMCE_API_KEY ="aewofhkq2ngxma6fe53yy0yst23ybzwl9mbjb1d0d6op4qmy"


// import {Formik , Field,Form} from 'formik'
// import { Editor } from "@tinymce/tinymce-react";
// import * as appConst from "../util/ApplicationConstants";
// import { saveNotes } from '../services/notes.service';
// import { useNavigate } from 'react-router-dom';



// const AddNoteComponent = () => {

//         const navigate = useNavigate();

//     const handeleSubmit = async (values)=>{
//             const response = await saveNotes(values);
//             // console.log("form values",values)

//             if (!response) {
//                 throw Error('Error Occured While Storing to the database')
                
//             }
//             console.log(`printing the response object ${response.data}`)
//             navigate("/")

//     }

//     return (
//         <div>
//             <h1>Add New Note</h1>
//             <Formik
//                  initialValues={
//                     {
//                         title:'',
//                         body:'',
//                         category:''
//                     }
//                  }
//                  enableReinitialize
//                  onSubmit={handeleSubmit}
            
//             >
//                 <Form>
//                     <label >Title</label>
//                     <Field placeholder = "Enter Title" name='title'>

//                     </Field>
//                     <label >Description</label>
//                     <Field placeholder="Enter Description" name='body'>
//                         {({form})=>{
//                             const {setFieldValue}=form;
//                             return(
//                                 <>
//                                 <Editor 
//                                     apiKey= {appConst.TINYMCE_API_KEY}
//                                         value={form.values.body}
//                                         init={{
//                                             selector: 'textarea',
//                                             plugins: 'ai tinycomments mentions anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed permanentpen footnotes advtemplate advtable advcode editimage tableofcontents mergetags powerpaste tinymcespellchecker autocorrect a11ychecker typography inlinecss',
//                                             toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | align lineheight | tinycomments | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
//                                             tinycomments_mode: 'embedded',
//                                             tinycomments_author: 'Author name',
//                                             mergetags_list: [
//                                                 { value: 'First.Name', title: 'First Name' },
//                                                 { value: 'Email', title: 'Email' },
//                                             ],
//                                             ai_request: (request, respondWith) => respondWith.string(() => Promise.reject("See docs to implement AI Assistant"))
//                                         }}

//                                         onEditorChange={(content) => {
//                                             setFieldValue('body', content);
//                                         }}

//                                 />

                                
//                                 </>
//                             )
//                         }}
//                     </Field>
//                     <label >Category</label>
//                     <Field placeholder="Enter Category" name='category'>

//                     </Field>
//                 <button type='submit'>submit</button>
//                 </Form>
//             </Formik>
//         </div>
//     )
// }
 
// export default AddNoteComponent;