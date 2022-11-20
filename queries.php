<?php

class Queries {
    
    private $dbh ;
    private $user = 'root' ; 
    private $pass = 'root' ;

    function startConnection(){

        try{
            $this->dbh = new PDO( 'mysql:host=localhost;dbname=message', $this -> user, $this -> pass);
            // echo("Connection OK");
        }
        catch(PDOException $ex){
            echo $ex->getMessage();
            die("Connection KO");
        }
    }

    function sendMessage($new_message) {
        
        $sql = "INSERT INTO formulaire (nom, prenom, email, message) VALUES (:nom, :prenom, :email, :message)";
        $stmt = $this->dbh->prepare($sql);
        $succeed = $stmt->execute($new_message);
        return $succeed; 
    }
}

?>