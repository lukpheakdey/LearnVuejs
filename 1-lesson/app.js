new Vue ({
    el: '#vue-app',
    data: {
        name: 'pheakdey',
        job: 'Developer',
        website: 'http://wwww.thenetninja.co.uk',
        websiteTag: '<a href="http://wwww.thenetninja.co.uk"> The Net Ninja Webiste </a>',
        age: 25,
        x: 0,
        y: 0,
        nameTwoBinding: '',
        ageTwoBinding: '',

        ageAdd: 20,
        a: '',
        b:''
    },
    methods: {
        greet: function(time){
            return 'Good ' + time + ' ' + this.name;
        },
        add: function(inc){
            this.age += inc;
        },
        subtract: function(dec){
            this.age -= dec;
        },
        updateXY: function(event) {
            this.x = event.offsetX;
            this.y = event.offsetY;
        },
        click: function(){
            alert("You clicked me");
        },

        logName: function(){
            console.log("you enter the name");
        },
        logAge: function(){
            console.log("you enter your age");
        },

        // addToA: function() {
        //     console.log('AddToA');
        //     return this.a + this.ageAdd;
        // },
        // addToB: function() {
        //     console.log('AddToB');
        //     return this.b + this.ageAdd;
        // }
    },
    computed: {
       addToA: function() {
            console.log('AddToA');
            return this.a + this.ageAdd;
        },
        addToB: function() {
            console.log('AddToB');
            return this.b + this.ageAdd;
        }     
    }
});