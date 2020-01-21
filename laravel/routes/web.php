<?php

Route::get('/', function () {
    return view('welcome');
});

Route::get('/api/lugares','LugarController@index');

Route::get('/api/lugares/{id_lugar}','LugarController@search');

Route::post('/usuario/{tipo_usuario}', 'UsuarioController@store');