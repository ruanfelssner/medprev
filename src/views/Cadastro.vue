<template>
  <div class="about">
    <h1>Cadastro</h1>
    <div class="columns">
      <div class="column col-6 col-mx-auto">
    <form action="" class="form-horizontal columns">
<div class="column col-12">
      <div class="form-group">
      <label class="form-label" for="tipo">Tipo:</label>
      <select class="form-select" name="tipo" id="tipo" v-model="cadastro.tipo"
      required @change="tipo($event)">
        <option disabled value="0">Escolha um item</option>
        <option value="1">Pessoa física</option>
        <option value="2">Pessoa jurídica</option>
      </select>
</div>
      <div class="form-group">
      <label class="form-label" for="nome">Nome: </label>
      <input class="form-input" type="text" name="nome" v-model="cadastro.nome" required>
</div>
<div class="form-group" v-show="cadastro.tipo == 2">
      <label class="form-label" for="razao">Razão social</label>
      <input class="form-input" type="text" name="razao" required
      v-model="cadastro.razao">
</div>
<div class="form-group">
      <label class="form-label" for="cpf" v-show="cadastro.tipo == 1">CPF</label>
      <input class="form-input" type="text" name="cpf" required v-mask="['###.###.###-##']"
      v-model="cadastro.cpf" v-show="cadastro.tipo == 1">
</div>
<div class="form-group">
      <label class="form-label" for="cnpj" v-show="cadastro.tipo == 2">CNPJ</label>
      <input class="form-input" type="text" name="cnpj" required v-mask="['##.###.###/####-##']"
      v-model="cadastro.cnpj" v-show="cadastro.tipo == 2">
</div>
<div class="form-group">
      <label class="form-label" for="sexo" v-show="cadastro.tipo == 1">Sexo</label>
      <input class="form-input" type="text" name="sexo" required
      v-model="cadastro.sexo" v-show="cadastro.tipo == 1">
</div>
<div class="form-group">
      <label class="form-label" for="nascimento"
      v-show="cadastro.tipo == 1">Data de nascimento </label>
      <input class="form-input"
      type="text" name="nascimento" v-mask="'##/##/####'" v-model="cadastro.nascimento"
      required v-show="cadastro.tipo == 1">
</div>
<div class="form-group">
      <label class="form-label" for="email">Email</label>
      <input class="form-input" type="email" name="email" v-model="cadastro.email">
</div>
<div class="form-group">
      <label class="form-label" for="telefone">Telefone</label>
      <input class="form-input" type="text" name="telefone" v-model="cadastro.telefone"
      v-mask="['(##) ####-####', '(##) #####-####']">
</div>
<div class="form-group">
      <label class="form-label" for="celular">Celular</label>
      <input class="form-input" type="text" name="celular" v-model="cadastro.celular"
      v-mask="['(##) ####-####', '(##) #####-####']">
</div>
<div class="form-group">
      <label class="form-label" for="foto">Foto</label>
      <input class="form-input" type="file" name="foto"  @change=uploadImage>
</div>
</div>
      <hr>
      <h2 class="column col-12">Endereços -
        <button @click="addEndereco()" type="button">+</button></h2>
        <div v-for="(item, id) of cadastro.enderecos" :key="id" class="column col-6 p-relative">
<button @click="removeEndereco(id)" v-if="id >= 1" class="removeEndereco" type="button">x</button>
<div class="form-group">
      <label class="form-label" for="endereco">Endereço</label>
      <input class="form-input" type="text" name="endereco" required
      v-model="cadastro.enderecos[id].endereco">

</div>
<div class="form-group">
      <label class="form-label" for="numero">Numero</label>
      <input class="form-input" type="text" name="numero"
      required v-model="cadastro.enderecos[id].numero">

</div>
<div class="form-group">
      <label class="form-label" for="complemento">Complemento</label>
      <input class="form-input" type="text" name="complemento"
      v-model="cadastro.enderecos[id].complemento">

</div>
<div class="form-group">
      <label class="form-label" for="bairro">Bairro</label>
      <input class="form-input" type="text" name="bairro"
      v-model="cadastro.enderecos[id].bairro">

</div>
<div class="form-group">
      <label class="form-label" for="cidade">Cidade</label>
      <input class="form-input" type="text" name="cidade"
      required v-model="cadastro.enderecos[id].cidade">

</div>
<div class="form-group">
      <label class="form-label" for="estado">Estado</label>
      <input class="form-input" type="text" name="estado"
      required v-model="cadastro.enderecos[id].estado">

</div>
<div class="form-group">
      <label class="form-label" for="cep">CEP</label>
      <input class="form-input" type="text" name="cep"
      v-mask="'##.###-###'"
       v-model="cadastro.enderecos[id].cep">
</div>

      <hr>
        </div>
    </form>

      <button @click="envia()" type="button">Cadastrar</button>
      </div>
    </div>
  </div>
</template>
<script>
/* eslint no-underscore-dangle: 0 */

export default {
  data: () => ({
    cadastro: {
      tipo: 1,
      nome: null,
      razao: null,
      cpf: null,
      cnpj: null,
      sexo: null,
      nascimento: null,
      email: null,
      telefone: null,
      celular: null,
      foto: null,
      enderecos: [
        {
          endereco: null,
          numero: null,
          complemento: null,
          bairro: null,
          cidade: null,
          estado: null,
          cep: null,
        },
      ],
    },
  }),
  mounted() {
  },
  methods: {
    uploadImage(b) {
      const image = b.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(image);
      reader.onload = (e) => {
        this.trocaFoto(e.target.result);
      };
    },
    trocaFoto(valor) {
      this.cadastro.foto = valor;
    },
    tipo(valor) {
      this.cadastro.tipo = valor.target.value;
    },
    envia() {
      this.$http.post('https://jsonbox.io/box_5bafe5f4bb577e7a9831', this.cadastro)
        .then(() => {
          alert('Cadastrado com sucesso!');
        }).catch((res) => {
          alert(res.data.message);
        });
    },
    addEndereco() {
      this.cadastro.enderecos.push({
        endereco: null,
        numero: null,
        complemento: null,
        bairro: null,
        cidade: null,
        estado: null,
        cep: null,
      });
    },
    removeEndereco(id) {
      this.cadastro.enderecos.splice(id, 1);
    },
  },
};
</script>
<style lang="scss" scoped>
.removeEndereco{
  position:absolute;
  right:0;
  top:0;
}
</style>
