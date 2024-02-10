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
        if ($request->has('country_id')) {
            $channels = Channel::where('country_id', $request->input('country_id'))
                               ->get(['name', 'logo']);
            return response()->json($channels);
        } else {
            $channels = collect([]);
        }

    
        return Inertia::render('Index/Index', [
            'countries' => $countries,
            'channels' => $channels,
        ]);
    }
}
