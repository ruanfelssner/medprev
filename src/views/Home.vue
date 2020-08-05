<template>
  <div class="home">
    <datatable :columns="columns" :data="rows" :per-page="5">
      <template slot-scope="{ row }">
            <tr>
                <td align="center">{{row._id}}</td>
                <td align="center" v-if="row.tipo == 2">Pessoa juridica</td>
                <td align="center" v-if="row.tipo == 1">Pessoa física</td>
                <td align="center">{{row.nome}}</td>
                <td align="center">{{row.razao}}</td>
                <td align="center">{{row.cpf}}</td>
                <td align="center">{{row.cnpj}}</td>
                <td align="center">{{row.sexo}}</td>
                <td align="center">{{row.nascimento}}</td>
                <td align="center">{{row.email}}</td>
                <td align="center">{{row.telefone}}</td>
                <td align="center">{{row.celular}}</td>
                <td align="center">{{row.foto}}</td>
                <td align="center">{{`${row.enderecos[0].endereco},
                  ${row.enderecos[0].numero},
                  ${row.enderecos[0].complemento},
                  ${row.enderecos[0].bairro}, ${row.enderecos[0].cidade},
                  ${row.enderecos[0].estado}`}}</td>
                <!-- <td>status {{row.evento_status_id}}</td> -->
                <td><router-link tag="button" :to="{name: 'editar',
                params: { id: row._id }}"><span>Editar</span></router-link></td>
                <td><button @click="deletar(row._id)" type="button">
                  <span>Deletar</span></button></td>
            </tr>
        </template>
    </datatable>
    <datatable-pager v-model="page"></datatable-pager>
  </div>
</template>

<script>
/* eslint no-underscore-dangle: ["error", { "allow": ["_id"] }] */

export default {
  name: 'Home',
  data() {
    return {
      filter: '',
      columns: [
        { label: 'id', field: '' },
        { label: 'Tipo', field: '' },
        { label: 'Nome', field: '' },
        { label: 'Razão Social', field: '' },
        { label: 'CPF', field: '' },
        { label: 'CNPJ', field: '' },
        { label: 'Sexo', field: '' },
        { label: 'Data de Nascimento', field: '' },
        { label: 'E-mail', field: '' },
        { label: 'Telefone', field: '' },
        { label: 'Celular', field: '' },
        { label: 'Foto', field: '' },
        { label: 'Endereço', field: '' },
        { label: 'Editar', field: '' },
        { label: 'Deletar', field: '' },
      ],
      rows: [],
      page: 1,
    };
  },
  mounted() {
    this.$http.get('https://jsonbox.io/box_5bafe5f4bb577e7a9831').then((res) => {
      this.rows = res.data;
    });
  },
  methods: {
    deletar(id) {
      this.$http.delete(`https://jsonbox.io/box_5bafe5f4bb577e7a9831/${id}`)
        .then((res) => {
          alert(res.data.message);
          this.$router.go(this.$router.currentRoute);
        }).catch((res) => {
          alert(res.data.message);
        });
    },
  },
};
</script>
