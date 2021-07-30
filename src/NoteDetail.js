import React,  { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import 'react-edit-text/dist/index.css'

const NoteDetail = () => {
  const [textState, setTextState] = useState({
    heading: "",
    description: "",
  });
  const onChange = (e) => {
    const { name, value } = e.target;
    setTextState({ ...textState, [name]: value });
  };
    const {id}=useParams();
    const {data:note, isPending, error}=useFetch('http://localhost:3000/notes/'+id);
    

    const updateNote=(e)=>{
      let item=textState;
      fetch(`http://localhost:3000/notes/${id}` ,

      {method: 'PUT',headers:{
              'Accept':'application/json',
              'Content-Type':'application/json'
            },
            body:JSON.stringify(item)
          }).then((result) => {
            result.json().then((resp) => {
              alert("Updated successfully");
              console.log(resp)})
          })    
    }
    useEffect(() => {
      if(note){
        setTextState({ 
          heading: note.heading,
          description: note.description
         });
      }
    }, [note])
    return ( 
        <div className="create">
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {note && (<div> 

            <label>Note Heading:</label>
            <input
              name="heading"
              type="text"
              required
              value={textState?.heading}
              onChange={(e) => onChange(e)}
            />
            <label>Note Description:</label>
            <textarea
              name={"description"}
              value={textState?.description}
              onChange={(e) => onChange(e)}
            />

                  <button onClick={updateNote} >Edit</button>
                    </div>)}
        </div>


       
     );
}
 
export default NoteDetail;