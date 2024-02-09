<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;


class Country extends Model
{
    use HasFactory;
    protected $fillable = ['name', 'abbreviation'];

    public function owner(): BelongsTo
    {
        return $this->BelongsTo(
            \App\Models\Channel::class,
            'country_id'
        );
    }
}
