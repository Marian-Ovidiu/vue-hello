var app = new Vue({
  el : '#root',
  data : {
    sciao: 'Sciao belo, kebab con o senza scipola?',
    altezza : '',
    lunghezza: '',
    coloreSfondo: '',
    coloreScritta: '',
    bordi: '',
    arrodondamento: '',
    testo: '',
    contenitore: 'box'
  },
  methods: {
    siONo : function() {
      alert('Non mi interessa ti meto scipola lo stesso')
    }
  }
})
