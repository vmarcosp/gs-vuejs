
Vue.component('task-list',{
    template:('<div>\
                <task v-for="task in tasks">{{task.description}}</task>\
              </div>'),
    data(){
        return {
            tasks:[
                {description:'Go to the bank'},
                {description:'Learn VueJS'},
            ]
        }
    }
})

Vue.component('task',{
    template:'<li><slot></slot></li>'
});

var vm = new Vue({
    el:'#app',
})