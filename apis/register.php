<?php


$_POST = json_decode(file_get_contents('php://input'), true);

if(isset($_POST) && !empty($_POST)){
    $data = [
        'success'=>true,
        'message'=>(string) $_POST['email']." | ".$_POST['password']
    ];
    print_r(json_encode($data));
}
