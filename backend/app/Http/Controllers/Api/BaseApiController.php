<?php

namespace App\Http\Controllers\Api;

use Illuminate\Routing\Controller as BaseController;

class BaseApiController extends BaseController
{
    protected function sendResponse($data, $message, $code = 200) 
    {
        return response()->json([
            'success' => $code < 300,
            'message' => $message,
            'data' => $data

        ], $code);
    }
    
    protected function sendError($data, $message, $code = 403) 
    {
        return response()->json([
            'success' => false,
            'message' => $message

        ], $code);
    }
    
    protected function sendSuccess($data, $message, $code = 200) 
    {
        return response()->json([
            'success' => true,
            'message' => $message,
            'data' => $data

        ], $code);
    }
}
