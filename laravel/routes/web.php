<?php

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/api/lugar/{id_lugar}','LugarController@show');
Route::get('/api/zonas','ZonaController@index');
Route::get('/api/lugares/{id_lugar}','LugarController@search');

Route::get('/registerx',function (){
    return view('register');
});

Route::post('/usuario/{tipo_usuario}', 'UsuarioController@store');

Route::post('api/zona', 'ZonaController@store');
Route::get('api/zona', 'ZonaController@index');

Route::post('api/lugar', 'LugarController@store');

Route::post('api/guia', 'GuiaController@store');