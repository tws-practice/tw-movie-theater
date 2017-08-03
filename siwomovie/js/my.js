var comments = ['开篇长镜头惊险大气引人入胜 结合了水平不俗的快剪下实打实的真刀真枪 让人不禁热血沸腾 特别弹簧床架挡炸弹 空手接碎玻璃 弹匣割喉等帅得飞起！就算前半段铺垫节奏散漫主角光环开太大等也不怕 作为一个中国人 两个小时弥漫着中国强大得不可侵犯的氛围 还是让那颗民族自豪心砰砰砰跳个不停。', '首映礼看的。太恐怖了这个电影，不讲道理的，完全就是吴京在实现他这个小粉红的英雄梦。各种装备轮番上场，视物理逻辑于不顾，不得不说有钱真好，随意胡闹', '这部戏让人看的热血沸腾，对吴京路转粉，最后的彩蛋，让我们没有理由不期待下一部。', '心往一处想，劲往一处使，就能实现我们的梦想。看吧，比第一部好太多了。谢谢美队的动作指导'];
var image = [webwxgesgimg.jpg, webwxgetmsgimg(2).jpg, webwxgetmsgimg.jpg, webwxgesgimg.jpg]


function GetComments() {
    var commentlist = document.getElementById(commentlist);
    commentlist = '';
    var mycomment = document.getElementById(mycomment);
    if (mycomment !== null) {
        commentlist += mycomment;
    }
    for (var i = 0; i < comments.length; i++) {
        commentlist += "<ul><div><div class='preview'><a href=''><img src='images/image2/webwxgetmsgimg.jpg' height='45' width='45' class='img-responsive'alt=''></a></div><p>" + comments[i] + "</p><h2></h2></div><div class='clearfix'></div></li></ul>";

    }
    // commentlist.innerHTML = htmlstring;
    return commentlist;
}