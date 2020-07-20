<?php
header("Content-type:text/html;charset=utf-8");

$servername = "localhost";
$username = "root";
$password = "root";
$dbname = "myKjt";
$conn1 = new mysqli($servername, $username, $password);
if ($conn1->connect_error) {
    die("连接失败： " . $conn1->connect_error);
}

$sql = "CREATE DATABASE myKjt";
if ($conn1->query($sql) === TRUE) {
    echo "数据库创建成功";
} else {
    echo "Error creating database: " . $conn1->error;
}
$conn1->close();

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die("连接失败： " . $conn->connect_error);
}

$sql = "CREATE TABLE Login (
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY, 
    name VARCHAR(30) unique NOT NULL,
    password VARCHAR(30) NOT NULL
    )";
if ($conn->query($sql) === TRUE) {
    echo "Table Login created successfully";
} else {
    echo "创建数据表错误: " . $conn->error;
}

$conn->close();
