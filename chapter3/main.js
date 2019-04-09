var section1 = new Vue({
    el: '#section1',
    data: {
        num: 0,
        click: false,
        textbox: "",
        keywords: ['保登心愛','香風智乃','天々座理世','桐間紗路','宇治松千夜']
    },
    methods: {
        handler: function(){
            this.num = this.keywords.indexOf(this.textbox)
            if(this.num >= 0 ){
                this.keywords.splice(this.num,1)
                this.textbox = ""
            }
        },
        handleClick: function(event,item){
            alert('ニャーン！')
            console.log(event)
            console.log(item)
        }
    }
})