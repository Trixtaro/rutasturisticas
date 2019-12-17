<?php

Route::get('/', function () {
    return view('welcome');
});

Route::post('/usuario/{tipo_usuario}', 'UsuarioController@store');