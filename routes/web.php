<?php

use App\Http\Controllers\ContactoController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('home');
})->name('home');

Route::post('/contact', [ContactoController::class, 'store'])->name('contact.store');


require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
