<?php
    require_once('./manageteams.php');
    function sqlRequest($sql) {
        $pdo = new PDO('sqlite:database.db');
        $statement = $pdo->query($sql);
        $result = $statement->fetchAll(PDO::FETCH_ASSOC);
        return $result;
    }

    if (isset($_GET['sql'])) {
        $table = json_encode(sqlRequest($_GET['sql']));
        echoTableFunc($table);
    }
?>