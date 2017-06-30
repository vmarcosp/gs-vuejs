var app = new Vue({
    el:'#app',
    data:{
        fruits:[
            {
                name:'Banana'
            },
            {
                name:'Orange'
            },
            {
                name:'Apple'
            },
        ],
        newFruit:{name:''}
    },
    methods:{
        say:function(msg){
            alert(msg)
        },
        addFruit:function(){
            this.fruits.push(this.newFruit)
            this.newFruit = {name:''}
        }
    }
})