<?php if(!class_exists('Rain\Tpl')){exit;}?><!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>SAPC | Esqueceu a senha</title>

  <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">

  <link rel="stylesheet" href="/resources/templates/bootstrap/css/bootstrap.min.css">

  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.5.0/css/font-awesome.min.css">

  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/ionicons/2.0.1/css/ionicons.min.css">

  <link rel="stylesheet" href="/resources/templates/dist/css/formatacao.css">

  <link rel="icon
  " href="/resources/templates/img/sapc-logo.jpg"/>  


</head>
<body class="hold-transition lockscreen" style="background-image: url('/resources/templates/dist/img/comunidade.jpg');">
<div class="lockscreen-wrapper">
  <?php if( $error != '' ){ ?>
    <div class="alert alert-danger">
        <center><?php echo htmlspecialchars( $error, ENT_COMPAT, 'UTF-8', FALSE ); ?></center>
    </div>
  <?php } ?>
 <div class="login-box-body">
  <div class="lockscreen-logo">
    <b>Olá</b>
  </div>

  <div class="lockscreen-item">

    <form  action="/esqueceu" method="post">
      <div class="input-group">
        <input type="email" class="form-control" placeholder="Digite o e-mail" name="email" autocomplete="off">

        <div class="input-group-btn">
          <button type="submit" class="btn"><i class="fa fa-arrow-right text-muted"></i></button>
        </div>
      </div>
    </form>
  </div>

  <div class="help-block text-center" style="color: #000;  font-size: 13pt;">
    Digite seu e-mail e receba as instruções para redefinir a sua senha.
  </div>
  <div class="text-center">
    <u><a style="color: #72afd2; font-size: 12pt;" href="/login">Ou se preferir, entre com uma conta diferente</a></u>
  </div>
</div>
</div>
<script src="/resources/templates/plugins/jQuery/jquery-2.2.3.min.js"></script>

<script src="/resources/templates/bootstrap/js/bootstrap.min.js"></script>
</body>
</html>
