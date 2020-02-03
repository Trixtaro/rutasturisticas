<?php

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/api/lugar/{id_lugar}','LugarController@show');
Route::get('/api/lugares','LugarController@index');
Route::get('/api/lugares/{id_lugar}','LugarController@search');

Route::get('/registerx',function (){
    return view('register');
});

Route::post('/usuario/{tipo_usuario}', 'UsuarioController@store');