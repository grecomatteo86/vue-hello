var app = new Vue (
  {
    el:'#root',
    data:{
      message: {
        nome:'',
        cognome:''
      },
      classe:'red',
      img:'https://scontent-mxp1-1.xx.fbcdn.net/v/t1.0-9/120084522_3311103872302474_28583631948239804_o.png?_nc_cat=111&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=aege21bmrJYAX-ukA-B&_nc_ht=scontent-mxp1-1.xx&oh=f75dc79f5c139b433fffd55a32b4f2b7&oe=6082A97C',
    },
    methods:{
      miaFunzione:function(){
        this.classe='blu';
      }
    }
  }
);
