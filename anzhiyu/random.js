var posts=["2023/12/01/hello-world/","2023/11/30/世界那么大我想去看看/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };