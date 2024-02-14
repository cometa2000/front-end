<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pokédex</title>
    <link rel="stylesheet" href="./css/main.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
</head>
<body class="fondo">
    
    <header>
        <div class="sidebar-container">
            <button id="toggleSidebar"><i class="fas fa-bars"></i></button>
            <div style="margin-top: 46px; color: red;">Nota: No funciona los btn, trate</div>
            <!-- Tu contenido de la barra lateral aquí -->
            <nav class="nav">
                <ul class="nav-list">
                    <li class="nav-item"><button class="btn btn-header" id="ver-todos">Ver todos</button></li> 
                    <li class="nav-item"><button class="btn btn-header normal" id="normal">Normal</button></li>
                    <li class="nav-item"><button class="btn btn-header fire" id="fire">Fire</button></li>
                    <li class="nav-item"><button class="btn btn-header water" id="water">Water</button></li>
                    <li class="nav-item"><button class="btn btn-header grass" id="grass">Grass</button></li>
                    <li class="nav-item"><button class="btn btn-header electric" id="electric">Electric</button></li>
                    <li class="nav-item"><button class="btn btn-header ice" id="ice">Ice</button></li>
                    <li class="nav-item"><button class="btn btn-header fighting" id="fighting">Fighting</button></li>
                    <li class="nav-item"><button class="btn btn-header poison" id="poison">Poison</button></li>
                    <li class="nav-item"><button class="btn btn-header ground" id="ground">Ground</button></li>
                    <li class="nav-item"><button class="btn btn-header flying" id="flying">Flying</button></li>
                    <li class="nav-item"><button class="btn btn-header psychic" id="psychic">Psychic</button></li>
                    <li class="nav-item"><button class="btn btn-header bug" id="bug">Bug</button></li>
                    <li class="nav-item"><button class="btn btn-header rock" id="rock">Rock</button></li>
                    <li class="nav-item"><button class="btn btn-header ghost" id="ghost">Ghost</button></li>
                    <li class="nav-item"><button class="btn btn-header dark" id="dark">Dark</button></li>
                    <li class="nav-item"><button class="btn btn-header dragon" id="dragon">Dragon</button></li>
                    <li class="nav-item"><button class="btn btn-header steel" id="steel">Steel</button></li>
                    <li class="nav-item"><button class="btn btn-header fairy" id="fairy">Fairy</button></li>
                </ul>
            </nav>
        </div>
        
    </header>
    <main>
        <div class="imagen">
            <img src="./img/logo.png" class="logoPokedex" alt="Logo Pokédex">
        </div>
        <div id="todos">
            <div class="pokemon-todos" id="listaPokemon">
            </div>
        </div>
        
        <div class="pagination" id="pagination">
            <button id="prevPage"><i class="fa-solid fa-chevron-left"></i>  Anterior</button>
            <span id="currentPage">1</span>
            <button id="nextPage">Siguiente <i class="fa-solid fa-chevron-right"></i></button>
        </div>
    </main>

    <script src="./js/fetch.js"></script>
</body>
</html>