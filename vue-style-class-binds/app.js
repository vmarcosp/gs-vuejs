var app = new Vue({
    el:'#app',
    data:{
        darkClass:'dark',
        isDark : true,
        orangeColor:'#c75c35',
        isOrange:false,
        conditionClass:{
            'orange':true,
            'dark':false
        }
    },
    methods:{
        invertClasses:function(){
            this.darkClass  = 'orange';
            this.isDarked = true;
            this.isOrange = false;
            this.conditionClass = {'orange':false,'dark':true};
        }
    }
})