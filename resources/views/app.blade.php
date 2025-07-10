<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" >
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">


        <title inertia>{{ config('app.name', 'Portafolio Mike') }}</title>
        <meta name="description" content="Desarrollador web, creo sitios completos, landing pages y maquetados visuales para negocios. Optimizo tu página con SEO técnico y estrategias para que Google te posicione y atraigas más clientes sin depender solo de anuncios." />
        <meta name="keywords" content="desarrollador web freelance, creación de sitios web, landing pages, SEO, optimización para Google, consultoría SEO, maquetación web, marketing digital, posicionamiento web, México" />

        <meta property="og:title" content="Desarrollador Web | Sitios, SEO y Marketing Digital" />
        <meta property="og:description" content="Transformo tu idea en un sitio web que vende. Desde páginas completas, optimización SEO, consultorías y estrategias para que tu negocio aparezca primero en Google y atraiga clientes." />
        <meta property="og:type" content="website" />
        <!-- <meta property="og:url" content="https://tusitio.com" /> -->
        <!-- <meta property="og:image" content="https://tusitio.com/tu-imagen-destacada.jpg" /> -->

        <meta name="twitter:title" content="Desarrollador Web | Sitios, SEO y Marketing Digital" />
        <meta name="twitter:description" content="Sitios web profesionales, optimización SEO y marketing digital para que tu negocio crezca online. Atrae más clientes desde Google y vende sin complicarte." />
        <meta name="twitter:card" content="summary_large_image" />
        <!-- <meta name="twitter:image" content="https://tusitio.com/tu-imagen-destacada.jpg" /> -->

        <!-- <link rel="icon" href="/favicon.ico" sizes="any">
        <link rel="icon" href="/favicon.svg" type="image/svg+xml"> -->
        <link rel="icon" href="{{ Vite::asset('resources/assets/Logo3.png') }}" type="image/png">

        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-LN+7fdVzj6u52u30Kp6M/trliBMCMKTyK833zpbD+pXdCLuTusPj697FH4R/5mcr" crossorigin="anonymous">
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/js/bootstrap.bundle.min.js" integrity="sha384-ndDqU0Gzau9qJ1lfW4pNLlhNTkCfHzAVBReH9diLvGRem5+R9g2FzA8ZGN954O5Q" crossorigin="anonymous"></script>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-LN+7fdVzj6u52u30Kp6M/trliBMCMKTyK833zpbD+pXdCLuTusPj697FH4R/5mcr" crossorigin="anonymous">
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/js/bootstrap.bundle.min.js" integrity="sha384-ndDqU0Gzau9qJ1lfW4pNLlhNTkCfHzAVBReH9diLvGRem5+R9g2FzA8ZGN954O5Q" crossorigin="anonymous"></script>

        @routes
        @viteReactRefresh
        @vite(['resources/js/app.tsx', "resources/js/pages/{$page['component']}.tsx"])
        @inertiaHead
    </head>
    <body class="font-sans antialiased">
        @inertia
    </body>
</html>
