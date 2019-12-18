<?php

Route::get('/', function () {
    return view('welcome');
});

Route::get('/api/lugares','LugarController@index');

Route::post('/usuario/{tipo_usuario}', 'UsuarioController@store');