<?php

use App\Http\Controllers\FrontpageController;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Session;
use Inertia\Inertia;

Route::get('language/{locale}', function ($locale) {
    if (in_array($locale, ['en', 'id'])) {
        Session::put('locale', $locale);
    }

    return redirect()->back();
})->name('language.switch');

Route::get('/', [FrontpageController::class, 'homepage'])->name('home');
Route::get('/about', [FrontpageController::class, 'about'])->name('about');
Route::get('/services', [FrontpageController::class, 'services'])->name('services');
Route::get('/contact', [FrontpageController::class, 'contact'])->name('contact');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
