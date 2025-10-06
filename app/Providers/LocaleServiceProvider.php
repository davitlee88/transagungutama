<?php

namespace App\Providers;

use Illuminate\Support\Facades\Session;
use Illuminate\Support\ServiceProvider;
use Inertia\Inertia;

class LocaleServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap services.
     */
    public function boot(): void
    {
        Inertia::share([
            'locale' => function () {
                return Session::get('locale', config('app.locale', 'en'));
            },
            'available_locales' => [
                'en' => 'English',
                'id' => 'Indonesia',
            ],
        ]);
    }
}
