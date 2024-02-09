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


        $count = 0;

        foreach ($data as $entry) {
            // print_r($entry);
            if ($count >= 12) { // Przerwij pętlę po przetworzeniu 5 rekordów
                break;
            }


            foreach ($entry->getExtTags() as $extTag) {
                switch ($extTag) {
                    case $extTag instanceof \M3uParser\Tag\ExtInf: 

                        if ($extTag->hasAttribute('tvg-id')) { 
                            echo $extTag->getAttribute('tvg-id') . "\n";
                        }
                        if ($extTag->hasAttribute('tvg-name')) { 
                            $tvgName = $extTag->getAttribute('tvg-name');
                            $tvgName = str_replace('#EXTINF:-1 tvg-id="" tvg-name="', '', $tvgName); 
                            $tvgName = rtrim($tvgName, '"'); 

                          
                            $parts = explode('| ', $tvgName);
                            $part1 = $parts[0] ?? ''; 
                            $part2 = $parts[1] ?? ''; 

                            echo $part1 . "\n"; 
                            echo $part2 . "\n"; 

                        }
                        if ($extTag->hasAttribute('tvg-logo')) { 
                            echo $extTag->getAttribute('tvg-logo') . "\n";
                        }
                        if ($extTag->hasAttribute('group-title')) { 
                            echo $extTag->getAttribute('group-title') . "\n";
                        }
                        echo("\n");
                        echo("----------------------------------------------------------------");
                        echo("\n");
                 
            }

            
         }

         $count++;

        }
        }
    }
 