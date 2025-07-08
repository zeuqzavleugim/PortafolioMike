<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Nuevo contacto desde tu sitio web</title>
</head>
<body>
    <h1>Nuevo mensaje de contacto</h1>
    <p><strong>Nombre:</strong> {{ $data['nombre'] }}</p>
    <p><strong>Correo:</strong> {{ $data['correo'] }}</p>
    <p><strong>Asunto:</strong> {{ $data['asunto'] }}</p>
    <p><strong>Telefono:</strong> {{ $data['telefono'] }}</p>
    <p><strong>Ciudad:</strong> {{ $data['ciudad'] }}</p>
    <p><strong>Mensaje:</strong></p>
    <p>{{ $data['mensaje'] }}</p>
</body>
</html>