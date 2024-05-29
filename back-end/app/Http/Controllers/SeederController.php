<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Artisan;

class SeederController extends Controller
{
    public function seed() {
        try {
            // Run the seeder command
            Artisan::call('migrate:fresh --seed');

            // Return a success response
            return response()->json([
                'success' => true,
                'message' => 'Database seeding completed successfully.'
            ]);
        } catch (\Exception $e) {
            // Handle exceptions
            return response()->json([
                'success' => false,
                'message' => 'Database seeding failed: ' . $e->getMessage()
            ], 500);
        }
    }
}
