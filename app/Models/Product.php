<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Product extends Model
{
    use HasFactory;
    protected $guarded = [];
    protected $with=['reviews'];
    protected static function boot()
    {
        parent::boot();
        static::creating(function ($product) {
            $product->productNumber = $product->generateSku();
        });
    }

    public function generateSku()
    {
        $prefix = strtoupper(substr($this->name, 0, 3)); // First 3 letters of the name
        $categoryCode = strtoupper(substr($this->category, 0, 2)); // First 2 letters of category
        $uniqueId = str_pad($this->id ?? mt_rand(1000, 9999), 4, '0', STR_PAD_LEFT); // Random or ID
        return "{$prefix}-{$categoryCode}-{$uniqueId}";
    }
    public function reviews():HasMany
    {
        return $this->hasMany(Review::class,'product_id');
    }

    public function imageGallery():Attribute
    {
        return Attribute::make(
            get: fn($value) => $value ? json_decode($value): [],
            set: fn($value) => json_encode($value)
        );
    }
}
