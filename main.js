var app = new Vue({
  el:'#player',
  data:{
    query:'',
    musicList:[],
    musicUrl:''
  },
  methods: {
    searchMusic:function(){
      var that = this;
      axios.get("https://autumnfish.cn/search?keywords="+this.query)
      .then(function(response){
        that.musicList = response.data.result.songs;
      },function(err){})
    },
    playMusic:function(musicId){
      var that = this;
      axios.get("https://autumnfish.cn/song/url?id="+musicId)
      .then(function(response){
        that.musicUrl = response.data.data[0].url;
      },function(err){})
    }
  },
})