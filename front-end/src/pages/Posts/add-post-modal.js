import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const AddPostModal = ({open, handleClose}) => {

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
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-tiFtle"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Add Post Modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          <form action="">
        <label for="fname">Title</label><br/>
        <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)}/><br/>
        <label for="lname">Description</label><br/><br/>
        <input type="text" id="description" value={description} onChange={(e) => setDescription(e.target.value)}/><br/><br/>
        <Button variant="contained" onClick={handleSubmit}>Add Post</Button>
        </form> 
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}

export default AddPostModal