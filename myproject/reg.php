<?php
session_start();
header("Content-type:text/html;charset=utf-8");
$link = mysqli_connect('localhost','root','root','mykjt');
mysqli_set_charset($link,'utf8');
 
$name=$_GET['username'];
$pwd=$_GET['password'];
// $yzm=$_GET['yzm'];
// $hadden=$_GET['myKjt'];

// if($name==''){

//  echo"<script>alert('你的用户名不能为空，请重新输入');location='".$_SERVER['HTTP_REFERER']. "'</script>";
//  exit;

// }
// if($phone_number==''){

//     echo"<script>alert('你的手机号不能为空，请重新输入');location='".$_SERVER['HTTP_REFERER']. "'</script>";
//     exit;
   
//    }
// if($pwd==''){

//  echo"<script>alert('你的密码不能为空，请重新输入');location='".$_SERVER['HTTP_REFERER']. "'</script>";
//  exit;

// }
// if($pwd != $pwdconfirm){

//  echo"<script>alert('你输入的两次密码不一致，请重新输入');location='".$_SERVER['HTTP_REFERER']. "'</script>";
//  exit;

// }
// if($yzm!=$_SESSION['VCODE']){

//  echo"<script>alert('你的验证码不正确，请重新输入');location='".$_SERVER['HTTP_REFERER']. "'</script>";
//  exit;

// }


$insert_sql="insert into login(name,password)values(? , ? )";

$stmt=mysqli_prepare($link,$insert_sql);

mysqli_stmt_bind_param($stmt,'ss',$name,$pwd);


$result_insert=mysqli_stmt_execute($stmt);

if($result_insert){

 echo "1";
 exit;

}else {
 echo "0";
 exit;
}

?>