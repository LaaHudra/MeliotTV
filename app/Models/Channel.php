<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Channel extends Model
{
    use HasFactory;
    protected $fillable = ['name', 'logo', 'country_id'];

    public function country(): BelongsTo
    {
        return $this->belongsTo(
            \App\Models\Country::class
        );
    }
}
