<?php if(!class_exists('Rain\Tpl')){exit;}?><div class="content-wrapper"style="background-image: url('/resources/templates/dist/img/comunidade.jpg')";>

<section class="content">

<section class="content">
  <div class="row">
  	<div class="col-md-12">
  		<div class="box">
        <div class="box-header with-border">
          <h3 class="box-title">Novo Produto</h3>
        </div>

        <?php if( $msgError != '' ){ ?>

        <div class="alert alert-danger alert-dismissible" style="margin:10px">
            <button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>
            <p><?php echo htmlspecialchars( $msgError, ENT_COMPAT, 'UTF-8', FALSE ); ?></p>
        </div>
        <?php } ?>

        <form role="form" action="/admin/produtos/cadastrar" method="post">
          <div class="box-body">
            <div class="form-row col-md-6">
              <label for="desproduto">Nome do produto<span style="color:#E9967A; font-size: 12pt;">&nbsp&nbsp*</span></label>
              <input type="text" class="form-control" id="desproduto" name="desproduto" placeholder="Digite o nome do produto" value="<?php echo htmlspecialchars( $registrarValoresProdutos["desproduto"], ENT_COMPAT, 'UTF-8', FALSE ); ?>" autocomplete="off">
            </div>
            <div class="form-row col-md-6">
              <label for="desdoador">Doador</label>
              <input type="text" class="form-control" id="desdoador" name="desdoador" value="<?php echo htmlspecialchars( $registrarValoresProdutos["desdoador"], ENT_COMPAT, 'UTF-8', FALSE ); ?>" placeholder="Doador">
            </div>
           <div class="form-inline col-md-12">  
          <div class="box-footer">
            <a style="color: #000;" href="/admin/produtos"><button type="button" class="btn btn-secondary" style="float: left; width: 120px; height: 50px;">Voltar</button></a>
            <button type="submit" onclick="return confirm('Deseja realmente cadastrar esse produto? ')" class="btn btn-success" style="float: right; width: 120px; height: 50px;">Cadastrar</button>
          </div>
           </div>
        </form>
      </div>
  	</div>
  </div>
</section>
</section>
</div>
