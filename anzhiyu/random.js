var posts=["2023/12/02/linux基础命令/","2023/12/02/Typora配置手册/","2023/12/01/flash钓⻥/","2023/12/01/利用github搭建hexo博客/","2023/11/30/vscode/","2023/11/29/钓鱼数据库/","2023/12/01/大灰狼远程控制/","2023/11/28/python环境配置+永恒之蓝/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };