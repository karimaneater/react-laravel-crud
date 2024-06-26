import React from 'react'
import Button from '@mui/material/Button';

const AddPost = () => {

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    const handleSubmit = () => {
    // add post here
    }

  return (
    <div>
        <p>Add Post</p>
        <form action="">
        <label for="fname">Title</label><br/>
        <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)}/><br/>
        <label for="lname">Description</label><br/><br/>
        <input type="text" id="description" value={description} onChange={(e) => setDescription(e.target.value)}/><br/><br/>
        <Button variant="contained" onClick={handleSubmit}>Add Post</Button>
        </form> 
    </div>
  )
}

export default AddPost