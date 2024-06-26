<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\postController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('home',[postController::class, 'index']);
Route::post('home',[postController::class, 'store'])                                                           ;
Route::get('home/{id}',[postController::class, 'show']);
Route::get('home/{id}/edit',[postController::class, 'show']);
Route::put('home/{id}/edit',[postController::class, 'update']);
Route::delete('home/{id}/delete',[postController::class, 'destroy']);
