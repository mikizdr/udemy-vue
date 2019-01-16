new Vue({
    el: '#game',
    data() {
        return {
            message: 'Simple game',
            width: 0,
            barWidth: 0,
            stop: 100
        }
    },
    methods: {
        progressBar() {
            setInterval(() => {
                if (this.width <= this.stop) {
                    this.barWidth = this.width++ + '%'
                    console.log(this.barWidth)
                }
            }, 50);
        },
        myClass() {
            return {
                width: this.barWidth,
                height: '100%',
                backgroundColor: 'olive'
            }
        },
        attack() {
            this.width -= 10
        },
        reset() {
            this.barWidth = 0
        }
    },
    computed: {
    }
})