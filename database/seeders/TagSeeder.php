<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use DateTime;

class TagSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('tags')->insert([
                'name' => '心霊',
                'created_at' => new DateTime(),
                'updated_at' => new DateTime(),
         ]);
        DB::table('tags')->insert([
                'name' => '人怖',
                'created_at' => new DateTime(),
                'updated_at' => new DateTime(),
         ]);
        DB::table('tags')->insert([
                'name' => 'サバイバル',
                'created_at' => new DateTime(),
                'updated_at' => new DateTime(),
         ]);
        DB::table('tags')->insert([
                'name' => 'パニック',
                'created_at' => new DateTime(),
                'updated_at' => new DateTime(),
         ]);
        DB::table('tags')->insert([
                'name' => '都市伝説',
                'created_at' => new DateTime(),
                'updated_at' => new DateTime(),
         ]);
        DB::table('tags')->insert([
                'name' => 'ミステリー',
                'created_at' => new DateTime(),
                'updated_at' => new DateTime(),
         ]);
        DB::table('tags')->insert([
                'name' => 'コズミックホラー',
                'created_at' => new DateTime(),
                'updated_at' => new DateTime(),
         ]);
    }
}
