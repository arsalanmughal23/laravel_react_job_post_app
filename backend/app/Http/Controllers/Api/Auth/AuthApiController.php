<?php

namespace App\Http\Controllers\Api\Auth;

use App\Http\Controllers\Api\BaseApiController;
use App\Http\Requests\Api\Auth\LoginApiRequest;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthApiController extends BaseApiController
{
    /**
     * Handle an incoming authentication request.
     */
    public function store(LoginApiRequest $request): JsonResponse
    {
        $request->authenticate();
        $user = $request->user();
        $token = $user->createToken('personal_access_token');

        $data = [
            'user' => $user,
            'token' => $token->plainTextToken
        ];

        return $this->sendResponse($data, 'User logged in successfully.', 200);
    }

    /**
     * Destroy an authenticated session.
     */
    public function destroy(Request $request): JsonResponse
    {
        $request->user()->currentAccessToken()->delete();

        return $this->sendResponse(null, 'User logged out successfully.', 200);
    }
}
