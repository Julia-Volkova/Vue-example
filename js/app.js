//new Vue({//    el: '#app',//    data: {//        counter: 0,//        x: 0,//        y: 0//    },//    methods: {//        increase: function (step, event) {//            this.counter += step;//        },//        updateCoordinates: function (event) {//            this.x = event.clientX;//            this.y = event.clientY;//        }//    }//});////new Vue({//    el: '#exercise',//    data: {//        name: 'Julia',//        age: 24,//        img: 'https://vignette.wikia.nocookie.net/adventuretimewithfinnandjake/images/6/62/Princess_Bubblegum_with_her_hair_back.png/revision/latest?cb=20120711200410'//    },//    methods: {//        getRandomNumber: function () {//            return Math.random();//        },//        changeName: function (event) {//            this.name = event.target.value;//            return this.name;//        }//    }//});////new Vue({//    el: '#exercise2',//    data: {//        value_first: 'Change here)',//        value_second: 'Change here to Enter)'//    },//    methods: {//        showAlert: function () {//            alert('Danger!');//        },//        changeValue: function (event) {//            this.value_first = event.target.value;//        },//        changeValueSecond: function (event) {//            this.value_second = event.target.value;//        }//    }//});////new Vue({//    el: '#events',//    data: {//        counter: 0,//        secondCounter: 0//    },//    computed: {//        output: function () {//            //console.log('Computed');//            return this.counter > 5 ? 'Greater 5' : 'Smaller than 5';//        }//    },//    watch: {//        counter: function (value) {//            var vm = this;//            setTimeout(function () {//                vm.counter = 0;//            }, 5000)//        }//    },//    methods: {//        result: function () {//            //console.log('Methods');//            return this.counter > 5 ? 'Greater 5' : 'Smaller than 5';//        }//    }//});////new Vue({//    el: '#exercise3',//    data: {//        value: 0//    },//    computed: {//        result: function () {//            return this.value >= 37 ? 'done' : 'not there yet';//        }//    },//    watch: {//        result: function () {//            var vm = this;//            setTimeout(function () {//                vm.value = 0;//            }, 5000)//        }//    }//});new Vue({    el: '#cssManipulation',    data: {        attachRed: false,        color: 'green'    },    computed: {        divClasses: function () {            return {                red: this.attachRed,                blue: !this.attachRed            }        }    }});