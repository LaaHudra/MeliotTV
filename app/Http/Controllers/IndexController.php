<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Channel; 
use App\Models\Country; 

class IndexController extends Controller
{


    public function __invoke(Request $request)
    { 

        $countries = Country::all();
        $channels = Channel::all();

        return Inertia::render('Index/Index', [
            'countries' => $countries,
            'channels' => $channels,
        ]);

    }
}
