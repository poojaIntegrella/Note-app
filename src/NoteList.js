

import {Link} from "react-router-dom"
const NoteList = ({ notes,title,handleDelete }) => {



    
    return (
      <div className="blog-list" style={{textDecoration:"none"}}>
          <h2>{title}</h2>
        {notes.map(note => (
          <div className="blog-preview" key={note.id} >
               <Link to={`/notes/${note.id}`}>
              <h2>{ note.heading }</h2>
            <p>{ note.description }</p>  
           
              </Link>
              <button onClick={()=>handleDelete(note.id)}> Delete note</button>

              
           
          </div>
        ))}
      </div>
    );
  }
   
  export default NoteList;