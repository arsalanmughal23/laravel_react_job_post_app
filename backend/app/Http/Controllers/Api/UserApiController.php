<?php

namespace App\Http\Controllers\Api;

use App\Http\Requests\Api\UserUpdateApiRequest;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class UserApiController extends BaseApiController
{

    public function authUserProfile(Request $request)
    {
        $data = [ 'user' => $request->user() ];
        return $this->sendResponse($data, 'User profile data');
    }

    public function updateAuthUserProfile(UserUpdateApiRequest $request)
    {
        $validatedData = $request->validated();
        $user = $request->user();

        $user->update($validatedData);
        $data = [ 'user' => $user ];
        return $this->sendResponse($data, 'User profile updated successfully');
    }

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
