<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Order extends Model
{
    use SoftDeletes;
    use HasFactory;
    protected $guarded=[];
    protected static function boot()
    {
        parent::boot();
        static::creating(function ($product) {
            $product->orderNumber = $product->generateOrderNumber();
        });
    }

    public function generateOrderNumber()
    {
        $uniqueId = str_pad($this->id ?? mt_rand(10000, 99999), 5, '0', STR_PAD_LEFT); // Random or ID
        return "#{$uniqueId}";
    }

    public function orderData():Attribute
    {
        return Attribute::make(
            get: fn($value) => json_decode($value),
            set: fn($value) => json_encode($value)
        );
    }

}
