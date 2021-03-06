<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/testpage', function () {
    return view('welcome');
});

Auth::routes();

// Route::get('/home', 'HomeController@index')->name('home');

route::post('app/create_tag', 'AdminController@addTag');
route::get('app/get_tags', 'AdminController@getTag');
route::post('app/edit_tag', 'AdminController@editTag');
route::get('new', 'TestController@Method');

route::any('{slug}', function(){
    return view('welcome');
});