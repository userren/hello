//面向对象

// function Banner() {
//     //这个里面写的代码相当于python中的__init__方法的代码
//     console.log('init')
//     //添加属性
//     this.person = 'zhiliao'
// }
// //给Banner添加方法
// //原型链
// Banner.prototype.greet = function () {
//     console.log('这是向Banner中添加了一个方法greet')
// }
// var banner = new Banner();
// banner.greet();
//================================//
//开始写轮播图                    //
//================================//
function Banner() {
    this.bannerGgroup = $("#banner-group");
    this.listenBannerHover();
    this.index = 0;
    this.left = $("#left");
    this.right = $("#right");
}
Banner.prototype.toggleArror = function(isshow){
    var self = this;
    if(isshow){
        self.left.show();
        self.right.show();
    }
    else {
        self.left.hide();
        self.right.hide();
    }
};
Banner.prototype.listenBannerHover = function(){
    var self = this;
    this.bannerGgroup.hover(
        function () {
            clearInterval(self.timer);
            self.toggleArror(true);
        },
        function () {
            self.loop();
            self.toggleArror(false);
        }
        
    )
};
Banner.prototype.loop = function(){
    var self = this;
    var bannerUl = $("#banner-ul");//选择器是用id选择器
    //定时器
    this.timer = setInterval(function(){
        //改变left值
        //bannerUl.css({"left": -798});//缺点一步到位
        if(self.index>=2){
            self.index = 0;
        }
        else{
            self.index +=1;
        }
        //改变left值 方法二
        bannerUl.animate({"left": -795*self.index},1000);
        },2000
    );
    //使用hover监听鼠标事件，
    // 当鼠标移动到轮播图上是自动轮播暂停
};

Banner.prototype.run = function () {

    this.loop()


};
//确保网页完全加载完后运行Banner
$(function () {
    var banner = new Banner();
    banner.run();
});