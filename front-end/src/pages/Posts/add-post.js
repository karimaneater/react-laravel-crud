import React, { useState } from 'react'
import Button from '@mui/material/Button';

const AddPost = () => {

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

      const addPosts = async (title, description) => {
        await fetch('http://localhost/react-laravel-crud/back-end/public/api/home', {
        method: 'POST',
        body: JSON.stringify({
           title: title,
           description: description,
        }),
        headers: {
           'Content-type': 'application/json; charset=UTF-8',
        },
        })
        .then((response) => response.json())
        .then((data) => {
         console.log(data);
          //  setPosts((posts) => [data, ...posts]);
           setTitle('');
           setDescription('');
        })
        .catch((err) => {
           console.log(err.message);
        });
        }

        const handleSubmit = (e) => {
          e.preventDefault();
          addPosts(title, description);
       };    


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