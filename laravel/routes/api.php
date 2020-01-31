<?php

use Illuminate\Http\Request;

Route::post('register','CustomAuthController@register');
Route::post('login','CustomAuthController@login');
Route::get('register','CustomAuthController@getAuthenticatedUser');

Route::middleware('auth:api')->get('/usuario', function(Request $request){
    return $request->user();
});