<?php
session_start();
header("Content-type:text/html;charset=utf-8");
$link = mysqli_connect('localhost','root','root','mykjt');
mysqli_set_charset($link,'utf8'); 

$name=$_POST['username'];
$pwd=$_POST['password'];

echo $name;
echo $pwd;
// $hadden=$_GET['hadden'];

// if($hadden=="hadden"){
//  if($name==''){
//  echo "<script>alert('请输入用户名');location='" . $_SERVER['HTTP_REFERER'] . "'</script>";
//  exit;
//  }
//  if($pwd==''){

//  echo "<script>alert('请输入密码');location='" . $_SERVER['HTTP_REFERER'] . "'</script>";
//  exit;

//  }
// }

 $sql_select="select id,name,password from login where name= ?";
 $stmt=mysqli_prepare($link,$sql_select);
 mysqli_stmt_bind_param($stmt,'s',$name);
 mysqli_stmt_execute($stmt);
 $result=mysqli_stmt_get_result($stmt);
 $row=mysqli_fetch_assoc($result);

 print_r($row);

 if($row){

 if($pwd !=$row['password'] || $name !=$row['name']){

 echo "<script>alert('密码错误，请重新输入');location='login.html'</script>";
 exit;
 }
 else{
 $_SESSION['name']=$row['name'];
 $_SESSION['id']=$row['id'];

 echo "<script>alert('登录成功');location='index.html'</script>";
 }

 }else{
 echo "<script>alert('用户未注册,请前往注册');location='register.html'</script>";
 exit;
 };

