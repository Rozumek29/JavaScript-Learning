<?php
$db_host = "localhost";
$db_user = "InteliJ";
$db_password = "zaq1@WSX";
$db_name = "wyrozumialski_egzamin";

$connection = mysqli_connect($db_host, $db_user, $db_password, $db_name);

function getRows()
{

    global $connection;

    $sql = "SELECT `czas`, `kierunek`, `nr_rejsu`, `status_lotu` FROM `przyloty` ORDER BY `dzien` ASC";
    $query = mysqli_query($connection, $sql);
    while ($row = mysqli_fetch_assoc($query)) {
        ?>
        <tr>
            <td><?php echo $row["czas"] ?></td>
            <td><?php echo $row["kierunek"] ?></td>
            <td><?php echo $row["nr_rejsu"] ?></td>
            <td><?php echo $row["status_lotu"] ?></td>
        </tr>
        <?php
    }
}

function checkCookies()
{
    if (!isset($_COOKIE['cookie'])) {
        ?>
        <p><b>Dzień dobry! Strona lotniska używa ciasteczek</b></p>
        <?php
        setcookie('cookie', 'cookie', time() + (2 * 60 * 60));
    } else {
        ?>
        <p><i>Witaj ponownie na stronie Lotniska</i></p>
        <?php
    }
}

mysqli_close($connection);
?>

<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Port Lotniczy</title>
    <link rel="stylesheet" href="styl5.css">
</head>
<body>
<div class="flex" id="baner">
    <div id="baner1">
        <img src="zad5.png" alt="logo lotnisko">
    </div>
    <div id="baner2">
        <h1>Przyloty</h1>
    </div>
    <div id="baner3">
        <h3>przydatne linki</h3>
        <a href="kwerendy.txt">Pobierz...</a>
    </div>
</div>
<div id="glowny">
    <table border="1">
        <tr>
            <th>czas</th>
            <th>kierunek</th>
            <th>numer rejsu</th>
            <th>status</th>
        </tr>
        <?php
        getRows();
        ?>
    </table>
</div>
<div class="flex" id="stopka">
    <div id="stopka1">
        <?php
        checkCookies();
        ?>
    </div>
    <div id="stopka2">
        Autor: 00000000000
    </div>
</div>
</body>
</html>