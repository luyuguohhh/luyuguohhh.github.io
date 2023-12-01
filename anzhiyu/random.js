var posts=["2023/12/01/hello-world/","2023/11/30/世界那么大我想去看看/","2023/12/01/flash钓⻥/","2023/12/01/vscode/","2023/12/01/python环境配置/","2023/12/01/利用github搭建hexo博客/","2023/12/01/大灰狼远程控制/","2023/12/01/钓鱼数据库/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };