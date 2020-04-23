<template>
  <div class="container">
    <div class="col-md-12"> 
      <div class="text-center page-header">
        <h1>Catálogo de Filmes</h1>
      </div>
    </div>

    <div class="input-group">
      <input type="text" class="form-control" v-model="nomeDoFilme" placeholder="Nome do Filme" />
      <div class="input-group-btn">
        <button class="btn btn-xs btn-success" @click="adicionarFilme()">Adicionar</button>
      </div>
    </div>

    <br />

    <div>
      <ul class="list-group">
        <li class="list-group-item" v-for="(nomeDosFilmes, key) in nomesDeFilmes" :key="key">
          {{ nomeDosFilmes.nomeDoFilme  }}


          <span class="input-group">
            <input type="text" class="form-control" v-model="editForm[key]" placeholder="Digite o nome" />
            <button class="btn btn-xs btn-info" @click="editFilme(key)">editar</button>
            <button class="btn btn-xs btn-danger" @click="removerFilme(key)">remove</button>

          </span>

        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { db } from './database/firebase'

export default {
  data () {
    return {
      nomeDoFilme: 'Vingadores',
      nomesDeFilmes: [],
      editForm: []
    }
  },

  mounted() {
    db.ref('filmes/').on('value', (snapshot) => {
      this.nomesDeFilmes = snapshot.val()
    })
  },
  methods: {
    adicionarFilme() {
      db.ref('filmes/').push( { nomeDoFilme: this.nomeDoFilme })
        .then( (data) => { console.log(data)} )
        .catch( (error) => { console.log(error) } )
    },

    editFilme(key){
      db.ref('filmes/' + key).set({
        nomeDoFilme: this.editForm[key]
      })
    },

    removerFilme(key){
      db.ref('filmes/' + key).remove()
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
