<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Model;

class BeforeAfterTransformation extends Model
{
    protected $guarded=[];

    public function createdAt():Attribute
    {
        return Attribute::make(
            get:fn($value) => date('d-M-Y',strtotime($value))
        );
    }
}
