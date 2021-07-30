var app = new Vue (
  {
    el:'#root',
    data:{
      input: {
        name:'',
        lastname:''
      },
      colour:'red',
      img:'img/boolean.png',
    },
    methods:{
      myFunction:function(){
        this.colour='blu';
        this.img='img/vue.png';
      }
    }
  }
);
