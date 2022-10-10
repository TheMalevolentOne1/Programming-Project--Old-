<!DOCTYPE html>
<html lang="en">
<head>
    <link rel="stylesheet" href="style.css">
    <?php include './sql.php'; ?>
    <meta charset="UTF-8">
    <title>Manage Teams</title>
    <script>
        window.teamsObj = <?php echo json_encode(sqlRequest("SELECT * FROM tblTeams"));?>;
        window.studentsObj = <?php echo json_encode(sqlRequest("SELECT * FROM tblStudents"));?>; 
    </script>
</head>

<body>
    <script src="./scripts/tblTeamsSQL.js" type="text/javascript"></script>
    <script src="./scripts/tblStudentsSQL.js" type="text/javascript"></script>
</body>
</html>