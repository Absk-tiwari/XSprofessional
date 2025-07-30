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
        Schema::dropIfExists('before_after_transformations');
        Schema::create('before_after_transformations', function (Blueprint $table) {
            $table->id();
            $table->string("before_image_path");
            $table->string("after_image_path");
            $table->string("description");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('before_after_transformations');
    }
};
