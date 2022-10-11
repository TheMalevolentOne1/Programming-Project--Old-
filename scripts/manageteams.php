<!DOCTYPE html>
<html lang="en">
<head>
    <link rel="stylesheet" href="style.css">
    <?php include './sql.php'; ?>
    <meta charset="UTF-8">
    <title>Manage Teams</title>
    <script>
        const getTable = (table) => {
            console.log("hello world")
        }
    </script>
</head>
<body>
    <script src="./tblTeamsSQL.js" type="text/javascript"></script>
    <script>
        fetch("./sql.php?sql=SELECT * FROM tblTeams", {method: 'GET'}).then(() => { console.log('done'); }).catch(err => { if (err) throw err; });
    </script>
</body>
</html>