new Vue({
    el: '#game',
    data() {
        return {
            message: 'Hero game',
            showButton: true,
            myHealth: 0,
            monsterHealth: 0,
            myDamage: 0,
            monsterDamage: 0,
            totalDamage: [],
            hundred: 100
        }
    },
    methods: {
        startGame() {
            this.myHealth = this.hundred
            this.monsterHealth = this.hundred
            this.showButton = false
        },
        myAttackStyle() {
            return {
                width: this.myHealth + '%',
                height: this.hundred + '%',
                backgroundColor: 'olive'
            }
        },
        monsterAttackStyle() {
            return {
                width: this.monsterHealth + '%',
                height: this.hundred + '%',
                backgroundColor: 'olive'
            }
        },
        attack() {
            this.damage(10)
        },
        specialAttack() {
            this.damage(10, true)
        },
        damage(val1, spec = null) {
            let damage = val1;
            if (spec) {
                damage = val1 * 4
            } else {
                damage = val1 * 2
            }
            this.myDamage = Math.floor(Math.random() * val1);
            this.myHealth -= this.myDamage;
            this.monsterDamage = Math.floor(Math.random() * damage);
            this.monsterHealth -= this.monsterDamage;
            this.totalDamage.unshift(this.hundred - this.monsterHealth)
            this.totalDamage.unshift(this.hundred - this.myHealth)
            console.log(JSON.stringify(this.totalDamage))
        },
        giveUp() {
            this.showButton = true
            this.totalDamage = []
        },
        heal() {
            if (this.myHealth < 95) {
                this.myHealth += 5;
                setTimeout(() => {
                    this.myHealth -= 4;
                }, 500);
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