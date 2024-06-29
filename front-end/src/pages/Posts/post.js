import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import Button from '@mui/material/Button';
import AddPostModal from "./add-post-modal";

const Post = () => {
  const [posts, setPosts] = useState([]);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    fetch("http://localhost/react-laravel-crud/back-end/public/api/home")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setPosts(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  console.log(posts, "posts");
  
  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "title", headerName: "Title", width: 130 },
    {
      field: "description",
      headerName: "Description",
      description: "This column has a value getter and is not sortable.",
      width: 160,
    },
    { field: "created_at", headerName: "Created At", width: 130 },
    {
      field: "updated_at",
      headerName: "Updated At",
      type: "number",
      width: 90,
    },
   
  ];

  return (
   <>
      <div>
      <Button onClick={handleOpen}>Open Modal</Button>
      </div>
       <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={posts}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
    <AddPostModal 
        open={open}
        handleClose={handleClose}
      />
    </>
  );
};

export default Post;
