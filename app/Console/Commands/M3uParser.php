<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\Storage;
use M3uParser\M3uParser as Parser;
class M3uParser extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'app:m3u-parser';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $m3uParser = new Parser();
        $m3uParser->addDefaultTags();
        $filePath = Storage::disk('public')->path('tv_channels_9948086841_plus.m3u');
        $data = $m3uParser->parseFile($filePath);

        //print_r($data->getAttributes());
        foreach ($data as $entry) {
            print_r($entry);
            exit;
        }
        die();
    }
}
