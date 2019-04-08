var app = new Vue({
    el: '#gochiusa',
    data: {
        index : 0,
        name: "",
        org: "",
        fullname: "",
        image: "",
        select: "",
        members: [
            {
                id: 1,
                name: 'cocoa',
                org: 'rabbithouse',
                fullname: '保登心愛'
            },{
                id: 2,
                name: 'chino',
                org: 'rabbithouse',
                fullname: '香風智乃'
            },{
                id: 3,
                name: 'rize',
                org: 'rabbithouse',
                fullname: '天々座理世'
            },{
                id: 4,
                name: 'chiya',
                org: 'amausaan',
                fullname: '宇治松千夜'
            },{
                id: 5,
                name: 'syaro',
                org: 'fleurdulapin',
                fullname: '桐間紗路'
            }
          ]
    },
    methods: {
        doAdd: function(){
            var maxid = this.members.reduce(function (a,b){
                return a > b.id ? a : b.id
            },0)
            this.members.push({
                id: maxid + 1,
                name: this.name,
                org: this.org,
                fullname: this.fullname
            })
        },
        doRemove: function(index){
            this.members.splice(index,1)
        }
    }
});