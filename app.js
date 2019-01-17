new Vue({
    el: '#game',
    data() {
        return {
            message: 'Hero game',
            showButton: true,
            myHealth: 0,
            monsterHealth: 0,
            damageDone: [],
            visible: true
        }
    },
    methods: {
        startGame() {
            this.myHealth = 100
            this.monsterHealth = 100
            this.showButton = false
        },
        myAttackStyle() {
            return {
                width: this.myHealth + '%',
                height: '100%',
                backgroundColor: 'olive'
            }
        },
        monsterAttackStyle() {
            return {
                width: this.monsterHealth + '%',
                height: '100%',
                backgroundColor: 'olive'
            }
        },
        attack() {
            this.damage(10, 15)
        },
        specialAttack() {
            this.damage(10, 40)
        },
        damage(val1, val2) {
            this.myHealth -= Math.floor(Math.random() * val1);
            this.monsterHealth -= Math.floor(Math.random() * val2);
            this.damageDone.push(100 - this.myHealth)
            this.damageDone.push(100 - this.monsterHealth)
            console.log(JSON.stringify(this.damageDone))
            console.log(JSON.stringify(this.damageDone))
        },
        giveUp() {
            this.showButton = true
            this.damageDone = []
        },
        heal() {
            if (this.myHealth < 95) {
                this.myHealth += 5;
                setTimeout(() => {
                    this.myHealth -= 4;
                }, 1000);
                console.log(this.myHealth)
            }
        },
        myAlert(value, text) {
            if (value <= 0) {
                if (confirm(text)) {
                    this.giveUp()
                } else {
                    console.log('nothing')
                }
            }
        }
    },
    computed: {
    },
    watch: {
        myHealth(value) {
            this.myAlert(value, 'MONSTER IS THE WINNER!')
        },
        monsterHealth(value) {
            this.myAlert(value, 'VICTORY!')
        }
    }
})