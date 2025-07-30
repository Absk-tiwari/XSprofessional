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
        Schema::dropIfExists('invoices');
        Schema::create('invoices', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('order_id');
            $table->string('invoiceNumber')->nullable();
            $table->string('name');
            $table->string('email');
            $table->string('phone');
            $table->string('city');
            $table->string('address');
            $table->string('payment_mode');
            $table->string('payment_status')->default('unpaid');
            $table->string('total');
            $table->integer('stage')->default(1); // 1 for pending , 2 for confirmed, 3 for packed, 4 for out-for-delivery, 5 delivered , 0 for cancelled, 6 for return pending, 7 for refunded
            $table->json('orderData')->nullable();
            $table->string('discount')->default('0%');
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('invoices');
    }
};
