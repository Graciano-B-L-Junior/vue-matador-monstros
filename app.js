new Vue({
    el: '#app',
    data: {
        inicio: false,
        win: false,
        loose: false,
        vida_mostro: 100,
        vida_jogador: 100,
        logBatalha: []
    },
    methods: {
        inicioPartida() {
            this.inicio = true,
                this.win = false,
                this.loose = false,
                this.vida_mostro = 100,
                this.vida_jogador = 100,
                this.logBatalha = []
        },
        desistirPartida() {
            if (this.win == false && this.loose == false) {
                this.inicio = false,
                    this.win = false,
                    this.loose = false,
                    this.vida_mostro = 100,
                    this.vida_jogador = 100
            }

        },
        getRandomInt(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min)) + min;
        },
        atacar() {
            if (this.win == false && this.loose == false) {
                ataqueMonstro = this.getRandomInt(7, 15)
                ataquePlayer = this.getRandomInt(6, 13)
                this.vida_jogador -= ataqueMonstro
                this.vida_mostro -= ataquePlayer
                if (this.vida_jogador <= 0) {
                    this.vida_jogador = 0
                    this.loose = true
                }
                else if (this.vida_mostro <= 0) {
                    this.vida_mostro = 0
                    this.win = true
                }
                this.logBatalha.push("Monstro atingiu jogador com " + ataqueMonstro)
                this.logBatalha.push("Jogador atingiu monstro com " + ataquePlayer)
            }
        },
        ataqueEspecial() {
            if (this.win == false && this.loose == false) {
                ataqueMonstro = this.getRandomInt(7, 15)
                ataquePlayer = this.getRandomInt(9, 18)
                this.vida_jogador -= ataqueMonstro
                this.vida_mostro -= ataquePlayer
                if (this.vida_jogador <= 0) {
                    this.vida_jogador = 0
                    this.loose = true
                    this.inicio=false
                }
                else if (this.vida_mostro <= 0) {
                    this.vida_mostro = 0
                    this.win = true
                    this.inicio=false
                }
                this.logBatalha.push("Monstro atingiu jogador com " + ataqueMonstro)
                this.logBatalha.push("Jogador atingiu monstro com " + ataquePlayer)
            }
        },
        curar() {
            if (this.win == false && this.loose == false) {
                ataqueMonstro = this.getRandomInt(7, 15)
                curaPlayer = this.getRandomInt(8, 16)
                this.vida_jogador -= ataqueMonstro
                this.vida_jogador += curaPlayer
                if (this.vida_jogador <= 0) {
                    this.vida_jogador = 0
                    this.loose = true
                }
                this.logBatalha.push("Monstro atingiu jogador com " + ataqueMonstro)
                this.logBatalha.push("Jogador ganhou força de " + curaPlayer)
            }
        },
        barraVidaPlayer() {
            return {
                width: this.vida_jogador + "%",
            }
        },
        barraVidaMonstro() {
            return {
                width: this.vida_mostro + "%"
            }
        }
    },
    computed: {

    }
})