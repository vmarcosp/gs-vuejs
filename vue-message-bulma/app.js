
Vue.component('message', {
    props:['title','message'],
    data: function () {
        return {
            visible: true,
        }
    },
    template: `<article v-show="visible" class="message">
                    <div class="message-header">
                        <p>{{title}}</p>
                        <button class="delete" @click="hideMessage()"></button>
                    </div>
                    <div class="message-body">
                        {{message}}
                    </div>
                </article>`,
    methods: {
        hideMessage: function () {
            this.visible = false;
        }
    }
});

var app = new Vue({
    el: '#app'
})