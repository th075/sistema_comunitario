<?php if(!class_exists('Rain\Tpl')){exit;}?><div class="content-wrapper">

<section class="content" style="background-image: url('/resources/templates/dist/img/comunidade.jpg');">

  <div class="row">
    <div class="col-md-12">
      <div class="box">
        <div class="box-header with-border">
          <h3 class="box-title"><b><?php echo htmlspecialchars( $morador["desmorador"], ENT_COMPAT, 'UTF-8', FALSE ); ?></b></h3>
        </div>
        <form role="form" name="morador" action="/admin/moradores/<?php echo htmlspecialchars( $morador["idmorador"], ENT_COMPAT, 'UTF-8', FALSE ); ?>" method="post">
          <div class="box-body">
            <div class="form-group col-md-12">
              <label for="desmorador">Nome<span style="color:#E9967A; font-size: 12pt;">&nbsp&nbsp*</span></label>
              <input type="text" class="form-control" id="desmorador" name="desmorador" value="<?php echo htmlspecialchars( $morador["desmorador"], ENT_COMPAT, 'UTF-8', FALSE ); ?>" placeholder="Digite o nome (Nome e sobrenome)" minlength="12" maxlength="30" autocomplete="off" readonly="readonly">
            </div>
            <div class="form-row col-md-6">
              <label for="desidentidade">Identidade<span style="color:#E9967A; font-size: 12pt;">&nbsp&nbsp*</span></label>
              <input type="text" class="form-control" id="desidentidade" name="desidentidade" placeholder="Digite a identidade (Apenas números)" value="<?php echo htmlspecialchars( $morador["desidentidade"], ENT_COMPAT, 'UTF-8', FALSE ); ?>" autocomplete="off"  onkeypress="$(this).mask('00.000.000')" readonly="readonly">
            </div>
            <div class="form-row col-md-6">
              <label for="descpf">CPF<span style="color:#E9967A; font-size: 12pt;">&nbsp&nbsp*</span></label>
              <input type="text" class="form-control" id="descpf" name="descpf" placeholder="Digite o CPF (Apenas números)" maxlength="14" value="<?php echo htmlspecialchars( $morador["descpf"], ENT_COMPAT, 'UTF-8', FALSE ); ?>" autocomplete="off" onkeypress="$(this).mask('000.000.000-00)" readonly="readonly">
            </div>
            <div class="form-row col-md-4">
              <label for="nrtel">Telefone<span style="color:#E9967A; font-size: 12pt;">&nbsp&nbsp*</span></label>
              <input type="text" class="form-control" id="nrtel" name="nrtel" placeholder="Digite o telefone" maxlength="15" value="<?php echo htmlspecialchars( $morador["nrtel"], ENT_COMPAT, 'UTF-8', FALSE ); ?>" autocomplete="off" onkeypress="$(this).mask('(00) 00000-0000)" readonly="readonly">
            </div>
            <div class="form-row col-md-2">
              <label for="nrpessoas">Nº Pessoas<span style="color:#E9967A; font-size: 12pt;">&nbsp&nbsp*</span></label>
              <select type="number"class="form-control" id="nrpessoas" name="nrpessoas" placeholder="0" readonly="readonly">
                <option><?php echo htmlspecialchars( $morador["nrpessoas"], ENT_COMPAT, 'UTF-8', FALSE ); ?></option>
                </select>
            </div><br>
            <div class="form-row col-md-6" >
              <label for="desemail">E-mail</label>
              <input type="email" class="form-control" id="desemail" name="desemail" maxlength="64" value="<?php echo htmlspecialchars( $morador["desemail"], ENT_COMPAT, 'UTF-8', FALSE ); ?>" autocomplete="off" readonly="readonly">
            </div>
          </div>

        <div class="box-body">
          <div class="box-header">
                 <h4 class="box-title">Endereço</h4>
              </div>
                  <div class="form-inline col-md-4">
                  <label for="descep">CEP<span style="color:#E9967A; font-size: 12pt;">&nbsp&nbsp*</span></label><br>
                    <input type="text" class="form-control" id="descep" name="descep" placeholder="00000-000" value="<?php echo htmlspecialchars( $morador["descep"], ENT_COMPAT, 'UTF-8', FALSE ); ?>" autocomplete="off" maxlength="10" readonly="readonly">
                  </div>
              <div class="form-row col-md-6">
                    <label for="desrua">Rua<span style="color:#E9967A; font-size: 12pt;">&nbsp&nbsp*</span></label>
                    <input type="text" class="form-control" id="desrua" name="desrua" placeholder="Rua" value="<?php echo htmlspecialchars( $morador["desrua"], ENT_COMPAT, 'UTF-8', FALSE ); ?>" maxlength="45" readonly="readonly">
              </div>
               <div class="form-row col-md-2">
                    <label for="desnumero">Numero<span style="color:#E9967A; font-size: 12pt;">&nbsp&nbsp*</span></label>
                    <input type="text" class="form-control" id="desnumero" name="desnumero" placeholder="Número" value="<?php echo htmlspecialchars( $morador["desnumero"], ENT_COMPAT, 'UTF-8', FALSE ); ?>" maxlength="5" readonly="readonly">
              </div>
                <div class="form-row col-md-4">
                    <label for="descomplemento">Complemento</label>
                    <input type="text" class="form-control" id="descomplemento" name="descomplemento" value="<?php echo htmlspecialchars( $morador["descomplemento"], ENT_COMPAT, 'UTF-8', FALSE ); ?>" autocomplete="off" maxlength="64" readonly="readonly">
              </div>
              <div class="form-row col-md-4">
                    <label for="desbairro">Bairro<span style="color:#E9967A; font-size: 12pt;">&nbsp&nbsp*</span></label>
                    <input type="text" class="form-control" id="desbairro" name="desbairro" placeholder="Bairro" value="<?php echo htmlspecialchars( $morador["desbairro"], ENT_COMPAT, 'UTF-8', FALSE ); ?>" maxlength="45" readonly="readonly">
              </div>
              <div class="form-row col-md-4">
                    <label for="descidade">Cidade<span style="color:#E9967A; font-size: 12pt;">&nbsp&nbsp*</span></label>
                    <input type="text" class="form-control" id="descidade" name="descidade" placeholder="Cidade" value="<?php echo htmlspecialchars( $morador["descidade"], ENT_COMPAT, 'UTF-8', FALSE ); ?>" maxlength="45" readonly="readonly">
              </div>
                <div class="form-row col-md-3">
                    <label for="desestado">Estado<span style="color:#E9967A; font-size: 12pt;">&nbsp&nbsp*</span></label>
                    <input type="text" class="form-control" id="desestado" name="desestado" placeholder="Estado" value="<?php echo htmlspecialchars( $morador["desestado"], ENT_COMPAT, 'UTF-8', FALSE ); ?>" maxlength="45" readonly="readonly">
              </div>
              <div class="form-row col-md-4" hidden="true">
                    <label for="despais">País</label>
                    <input type="text" class="form-control" id="despais" name="despais" placeholder="País" value="Brasil" readonly="readonly" readonly="readonly">
              </div>
          <div class="form-inline col-md-12">    
          <div class="box-footer">
            <a style="color: #000;" href="/admin/moradores"><button type="button" class="btn btn-secondary" style="float: left; width: 120px; height: 50px;">Voltar</button></a>
            <button type="button" class="btn btn-info" style="float: right; width: 120px; height: 50px;" onclick="window.print();"><i class="fa fa-print"></i>Imprimir</button>
          </div>
           </div>
        </form>
      </div>
    </div>
  </div>

</section>

</div>