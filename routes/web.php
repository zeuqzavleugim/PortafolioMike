<?php

use App\Http\Controllers\ContactoController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('home');
})->name('home');
Route::get('/contacto', function () {
    return Inertia::render('contacto');
})->name('contacto');

Route::get('/estamos-trabajando-para-ti', function () {
    return Inertia::render('construccion');
})->name('construccion');

Route::post('/contact', [ContactoController::class, 'store'])->name('contact.store');


require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
