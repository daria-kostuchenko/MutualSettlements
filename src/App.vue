<template>
<div id="app">
  <div class="content-wrapper">
      <h1 class="settlements-title">Карточка взаиморасчетов за общежитие ФГБОУ ВО "ИГУ"</h1>
      <JsonDataCommonBlock
        v-if="!loading"
        :json_data="json_data">
      </JsonDataCommonBlock>
      <p class="loader" v-else>
        Подождите
      </p>
  </div>
</div>
</template>

<script>
import JsonDataCommonBlock from './components/JsonDataCommonBlock.vue'

export default {
  name: 'App',
  components: {
    JsonDataCommonBlock
  },

  data: function() {
    return {
      json_data: {},
      loading: true
    }
  },

  mounted() {
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url = "http://py.isu.ru/hs/jsonpost/mutual_settlements/";

    fetch(proxyurl+url, {
        method: "post",
        headers: {
            'Content-Type': 'application/json; charset=utf-8'
        },
        body: JSON.stringify({val: 'val'})
    })
    .then(response => response.json())
    .then(json => {
      this.json_data = json['hs_json']['Output']['Data']
      this.loading = false
      console.log(this.json_data)
    })

    // fetch('./a.json')
    //   .then(response => response.json())
    //   .then(json => {
    //     this.json_data = json['hs_json']['Output']['Data']
    //     this.loading = false
    //     console.log(this.json_data)
    //   })
  }
}
</script>

<style lang="sass">
@import './assets/sass/main'

</style>
