<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\Storage;
use M3uParser\M3uParser as Parser;
use App\Models\Channel;
use App\Models\Country;

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
        $progressBar = $this->output->createProgressBar(count($data));
        Country::query()->delete();

        foreach ($data as $key => $entry) {
            $extTags = $entry->getExtTags();
            $channelName = $extTags[0]->getAttribute('tvg-name');
            $channelLogo = $extTags[0]->getAttribute('tvg-logo');
            $countryName = $extTags[0]->getAttribute('group-title');

            $country = Country::firstOrCreate(['name' => $countryName, 'abbreviation' => $countryName]);
            $channel = Channel::where('name', $channelName)->first();
            if (!$channel) {
                // Jeśli kanał nie istnieje, utwórz nowy z powiązaniem do kraju
                $channel = new Channel(['name' => $channelName, 'logo' => $channelLogo]);
                $channel->country()->associate($country);
                $channel->save();
            }
            $progressBar->advance();
        }
        $progressBar->finish();
    }
}