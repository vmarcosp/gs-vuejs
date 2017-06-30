var app = new Vue({
    el: '#app',
    data: {
        tasks: [
            {
                id: 1,
                name: 'Learn Vue'
            },
            {
                id: 2,
                name: 'Learn React'
            },
            {
                id: 3,
                name: 'Learn Angular'
            },
        ],
        selected:{}
    }
})