<!DOCTYPE html>
<html lang="en">
<head>
    <link rel="stylesheet" href="style.css">
    <meta charset="UTF-8">
    <title>Manage Teams</title>
</head>
<body>
    <script src="./tblTeamsSQL.js" type="text/javascript"></script>
    <script type="text/javascript">
        const getTable = (table) => {
            console.log(table);
        }
    </script>
    <script>
        fetch("./sql.php?sql=SELECT * FROM \"tblTeams\"", {method: 'GET'}).then((res) => { console.log(res); }).catch(err => { if (err) throw err; });
    </script>
    <div>
        <?php 
            function echoTableFunc($table){
                echo "<p> getTable($table); </p>";
            }
        ?>
    </div>
</body>
</html>