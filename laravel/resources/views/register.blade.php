<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <form action="/api/register" method="POST">
        <input type="text" name="cedula" value="1314011774">
        <input type="text" name="nombres" value="nombres">
        <input type="text" name="nickname" value="nickname">
        <input type="email" name="correo" value="correo@correo.com">
        <input type="text" name="clave" value="clave">
        <input type="text" name="nacionalidad" value="Ecuatoriano">
        <input type="date" name="f_nacimiento">
        <input type="hidden" name="genero" value="M">
        <input type="hidden" name="pasaporte" value="0">
        <button>Ingresar</button>
    </form>
</body>
</html>