var app = new Vue({
    el: '#app',
    data: {
        he: 0,
        textColor: 'black'
    },
    methods: {
        handleClick: function(event){
            alert(event.target)
        },
        increment: function(){
            if(this.he < 20){
                this.he++;
            }
            if(this.he == 20){
                this.textColor = "red";
            }
        }
    }
  })