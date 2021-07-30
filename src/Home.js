import { useHistory, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import useFetch from "./useFetch";
import NoteList from "./NoteList";


const Home = () => {

    const { id } = useParams();
    const [notes, setNotes] = useState(null);
    const { data: Note, error, isPending } = useFetch('http://localhost:3000/Notes/' + id);
    const history = useHistory();

    const handleDelete=(id)=>{
        fetch('http://localhost:3000/notes/' + id, {
          method: 'DELETE'
        }).then(() => {
          history.push('/');
          reLoadData();
        }) 
    }
    const reLoadData =  ()=>{
      fetch(' http://localhost:3000/notes')
      .then(res => {
        return res.json();
      })
      .then(data => {
        setNotes(data);
      })
    }
    useEffect(() => {
      reLoadData();
      }, [])

    return ( 
        <div>
            <h1>Home Page</h1>
        {notes && <NoteList notes={notes} title="All Notes!" handleDelete={handleDelete}></NoteList>}
        </div>
     );
}
 
export default Home;