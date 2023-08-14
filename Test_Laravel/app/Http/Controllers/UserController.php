<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    //
    public function index()
    {
        $users = User::all();
        return response()->json($users);
    }
    public function store(Request $request)
    {
        $user = User::create([
            "name" => $request->name,
            "email"=>$request->email,
            "password" => $request->password
        ]);
      return response()->json($request);
    }
}