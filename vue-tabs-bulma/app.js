
Vue.component('tabs', {
    template: `
            <div>
                <div class="tabs">
                    <ul>
                        <li v-for="tab in tabs" :class="{'is-active':tab.isActive}">
                            <a @click="selectTab(tab)">{{tab.name}}</a>
                        </li>
                    </ul>
                </div>
                <div class="tabs-details">
                    <slot></slot>
                </div>
            </div>
             `,
    created: function () {
        this.tabs = this.$children;
    },
    methods: {
        selectTab: function (selectedTab) {
            this.tabs.forEach(function (tab) {
                tab.isActive = (tab.name === selectedTab.name);
            }, this);
        }
    },
    data: function () {
        return {
            tabs: []
        };
    }
});

Vue.component('tab', {
    props: {
        name: { required: true, type: String },
        selected: { type: Boolean, default: false }
    },
    data:function(){
        return {
            isActive:false
        };
    },
    mounted:function(){
        this.isActive = this.selected;
    },
    template: `<div v-show="isActive"><slot></slot></div>`
})

var app = new Vue({
    el: '#app',
});