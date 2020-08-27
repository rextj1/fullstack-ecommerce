<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class TestController extends Controller
{
    public function Method()
    {

        return response()->json([
            'msg'=> 'We should return only json'
        ]);
    }

    public function test()
    {

        return 'yes it is';
    }

}
