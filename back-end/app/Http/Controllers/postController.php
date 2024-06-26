<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Post;

class postController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
      $post = Post::all()->toArray();

      return response()->json($post);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
       $post = new Post;
       $post->title = $request->title;
       $post->description = $request->description;
       $post->save();

       return response()->json([
            'status' => 200,
            'message' => 'Saved Successfully',
            'data' => $post,
       ]);

    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $post = Post::findOrFail($id)->toArray();

        return response()->json($post);

    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $post = Post::findOrFail($id);

        $post->title = $request->title;
        $post->description = $request->description;
        $post->save();

        return response()->json([
            'status' => 200,
            'message' => 'Updated Successfully',
            'data' => $post,
       ]);

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $post = Post::findOrFail($id);

        $post->delete();
        return response()->json([
            'status' => 200,
            'message' => 'Deleted Successfully',
       ]);
    }
}
