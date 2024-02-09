<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Channel extends Model
{
    use HasFactory;
    protected $fillable = ['name', 'logo', 'country_id'];

    public function listings(): HasMany
    {
        return $this->hasMany(
            \App\Models\Country::class,
            'country_id'
        );
    }
}
