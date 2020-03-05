var app = new Vue({
  el:'#player',
  data:{
    query:'',
    musicList:[],
    musicUrl:'',
    // 歌曲封面
    musicCover:'',
    // 热门评论
    hotComments:[],
    // 动画播放状态
    isPlaying: false,
    // 遮罩层的显示状态
    isShow: false,
    // mv地址
    mvUrl:''
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

      // 获取歌曲封面
      axios.get("https://autumnfish.cn/song/detail?ids="+musicId)
      .then(function(response){
        that.musicCover = response.data.songs[0].al.picUrl;
      },function(err){})

      // 获取热门评论
      axios.get("https://autumnfish.cn/comment/hot?type=0&id="+musicId)
      .then(function(response){
        that.hotComments = response.data.hotComments;
      },function(err){})
    },
    play:function(){
      this.isPlaying = true;
    },
    pause:function(){
      this.isPlaying = false;
    },
    playMV:function(mvid){
      var that = this;
      axios.get("https://autumnfish.cn/mv/url?id="+mvid)
      .then(function(response){
        that.isShow=true;
        that.mvUrl = response.data.data.url;
      },function(err){})
    },
    hide:function(){
      this.isShow = false;
    }
  },
})