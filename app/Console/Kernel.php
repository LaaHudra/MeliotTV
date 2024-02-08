<?php

namespace App\Console;

use Illuminate\Console\Scheduling\Schedule;
use Illuminate\Foundation\Console\Kernel as ConsoleKernel;
use Illuminate\Support\Facades\Artisan;

class Kernel extends ConsoleKernel
{
    /**
     * Define the application's command schedule.
     */
    protected function m3uFileExists()
    {
        $files = glob(public_path('*.m3u')); 
        return !empty($files);
    }
     
    protected function schedule(Schedule $schedule): void
    {
        if ($this->m3uFileExists()) {
            $schedule->call(function () {
                Artisan::call('command:M3uParser');
            })->daily(); 
        }    }

    /**
     * Register the commands for the application.
     */
    protected function commands(): void
    {
        $this->load(__DIR__.'/Commands');

        require base_path('routes/console.php');
    }
}
