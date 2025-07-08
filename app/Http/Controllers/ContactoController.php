<?php

namespace App\Http\Controllers;

use App\Mail\ContactoMailable;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class ContactoController extends Controller
{
    public function store(Request $request)
    {
        $request->validate([
            'nombre' => 'required',
            'asunto' => 'required',
            'correo' => 'required',
            'mensaje' => 'required',
        ]);

        // Enviar correo
        Mail::to('contacto@maykcoffe.com.mx')->send(new ContactoMailable($request->all()));

        return;
    }
}
