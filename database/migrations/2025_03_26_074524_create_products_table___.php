<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::dropIfExists('products');
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('category');
            $table->string('price');
            $table->string('discount')->default(0);
            $table->json('filterItems')->nullable();
            $table->string('productNumber')->nullable();
            $table->json('imageGallery')->nullable();
            $table->text('description')->nullable();
            $table->boolean('isSale')->default(true);
            $table->boolean('isNew')->default(true);
            $table->boolean('isStocked')->default(true);
            $table->integer('ordered')->default(0);
            $table->timestamps();
        });

    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};
