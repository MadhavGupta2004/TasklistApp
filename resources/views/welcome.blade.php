<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Laravel React</title>
    @vite(['resources/sass/app.scss', 'resources/js/app.jsx'])
    <link rel="stylesheet" href="{{ asset('css/index.css') }}">
    <link rel="shortcut icon" href="{{ asset('favicon.ico') }}" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat">
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
</head>
<body>
<div id="main" data-projects="{{ json_encode($projects) }}"></div>
</body>
</html>
