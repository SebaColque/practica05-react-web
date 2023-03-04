<?php

if(isset($_FILES['file'])){
    $name = $_FILES['file']['name'];
    $file = $_FILES['file']['tmp_name'];
    $error = $_FILES['file']['error'];
    $destination = "/src/files/$name";
    $upload = move_uploaded_file($file, $destination);

    if($upload){
        $response = array(
            "err" => false,
            "status" => http_response_code(200),
            "statusText" => "Archivo $name subido con éxtio",
            "files" => $_FILES['file']
        );
    } else{
        $response = array(
            "err" => true,
            "status" => http_response_code(400),
            "statusText" => "Error al subir el archivo $name",
            "files" => $_FILES['file']
        );
    }

    echo json_encode($response);
}