<?php

use Illuminate\Http\Request;

Route::post('register','CustomAuthController@register');
Route::post('login','CustomAuthController@login');
Route::get('profile','CustomAuthController@getAuthenticatedUser');

Route::middleware('auth:api')->get('/user', function(Request $request){
    return $request->user();
});