<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('/register', [Api\Auth\RegisteredUserApiController::class, 'store']);

Route::post('/login', [Api\Auth\AuthApiController::class, 'store']);

Route::post('/forgot-password', [Api\Auth\PasswordResetLinkApiController::class, 'store']);

Route::post('/reset-password', [Api\Auth\ResetPasswordApiController::class, 'store']);

Route::middleware(['auth:sanctum'])->group(function(){

    Route::get('/auth-profile', [Api\UserApiController::class, 'authUserProfile']);
    Route::put('/update-auth-profile', [Api\UserApiController::class, 'updateAuthUserProfile']);

    Route::middleware(['throttle:6,1'])->group(function(){

        Route::get('/verify-email/{id}/{hash}', Api\Auth\VerifyEmailApiController::class)
            ->middleware(['signed']);
        
        Route::post('/email/verification-notification', [Api\Auth\EmailVerificationNotificationApiController::class, 'store']);
    });
    
    Route::post('/logout', [Api\Auth\AuthApiController::class, 'destroy']);
});
