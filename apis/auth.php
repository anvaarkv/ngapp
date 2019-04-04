<?php

$_POST = json_decode(file_get_contents('php://input'), true);

if(isset($_POST) && !empty($_POST)){
    if($_POST['username'] == 'admin' && $_POST['password'] == 'admin'){
        $data = [
            'success'=>true,
            'message'=>'Login Success'
        ];
        print_r(json_encode($data));
    }else{
        $data = [
            'success'=>false,
            'message'=>'Login Failed'
        ];
        print_r(json_encode($data));
    }
   
    //print_r(json_encode($_POST));
}