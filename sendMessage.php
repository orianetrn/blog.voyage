<?php
echo "ok";

$new_message = [
    'nom' => $_POST['nom'],
    'prenom' => $_POST['prenom'],
    'email' => $_POST['email'],
    'message' => $_POST['message']
];

require ('queries.php');
$messageQueries = new Queries() ;
$messageQueries -> startConnection();
$succeed =$messageQueries -> sendMessage($new_message); 

if ($succeed == true){
    header('Location:contactEnglish.html?alert=created');
} else header('Location:contactEnglish.html?alert=error');

?>