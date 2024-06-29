import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import Button from '@mui/material/Button';

const Post = () => {
  const [posts, setPosts] = useState([]);
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
      <Button variant="contained">Add Post</Button>
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
    </>
  );
};

export default Post;
