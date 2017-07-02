Vue.component('modal', {
    data: function () {
        return {
            visible: false
        }
    },
    template: `
                 <div class="modal is-active">
                    <div class="modal-background"></div>
                    <div class="modal-content">
                        <div class="box"><slot></slot></div>
                    </div>
                    <button class="modal-close" @click="$emit('close-modal')"></button>
                </div>
             `
})

var app = new Vue({
    el: '#app',
    data: {
        openModal: false
    },
    methods: {
        showOrCloseModal: function () {
            this.openModal = !this.openModal ;
        }
    }
})