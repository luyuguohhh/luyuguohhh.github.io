var posts=["2023/12/06/CentOS的bash安装+ssh远程登录/","2023/12/07/HTML标签/","2024/01/12/Hackademic-RTB1靶机/","2023/12/21/Postman抓包/","2024/01/26/MoriartyCory(靶机)/","2023/12/01/Quasar远控/","2023/12/02/Typora配置手册/","2024/01/11/Wireshark抓包2-0/","2023/12/05/Wirshark抓包软件+Proxifier/","2024/01/16/XSS跨站脚本攻击/","2023/12/21/Yakit使用/","2024/02/20/csrf漏洞/","2024/01/24/easy-cloudantivirus靶机/","2023/12/01/flash钓⻥/","2023/12/02/linux基础命令/","2024/01/24/medium-socnet靶机/","2023/12/12/mysql远程连接/","2023/12/12/php学习笔记/","2024/01/08/pikachu靶场/","2023/12/03/python学习笔记-1/","2023/12/10/python学习笔记-2/","2023/11/28/python环境配置+永恒之黑/","2023/12/04/shell的介绍/","2023/12/22/sqlmap/","2023/12/27/sql常见绕过/","2023/12/22/sql注入/","2023/12/20/sql注入前期准备/","2023/12/21/sql闯关1-41/","2023/12/28/sql闯关42-65/","2024/02/20/ssrf-redis靶机/","2024/02/20/ssrf漏洞/","2023/11/30/vscode/","2023/12/20/vue数据绑定与交互/","2023/12/16/vue的安装和基本使用方法/","2024/01/11/webshell工具/","2024/01/14/使用Burp解决sql注入问题/","2024/01/05/信息收集汇总/","2024/01/21/免杀/","2023/12/01/利用github搭建hexo博客/","2024/01/20/命令执行漏洞/","2023/12/01/大灰狼远程控制/","2023/12/04/安卓木马监听+java环境配置/","2024/01/09/文件上传漏洞/","2024/01/25/文件包含/","2024/01/21/权限维持/","2023/12/31/模拟环境下的信息收集namp(靶机)/","2024/01/07/漏洞挖掘之支付漏洞/","2023/12/20/网络安全/","2024/01/13/计算机病毒/","2023/12/04/计算机网络基础/","2023/11/29/钓鱼数据库/","2024/01/10/靶机/","2024/02/21/PHP序列化-反序列化/","2024/01/04/Debian Custum CTF(靶机)/","2024/02/27/chronos靶机/","2024/02/28/Linux提权思路/","2024/03/01/CS-多人运动/","2024/03/04/红日4/","2024/03/15/应急响应/","2024/02/28/常见的框架漏洞/","2024/03/19/Xray的配合使用/","2024/03/19/小程序抓包/","2024/03/22/红队笔记/","2024/04/01/小程序业务逻辑漏洞/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };