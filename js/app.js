$(document).mousemove(function (e) { 
    // $('#follower').css({left: e.clientX, top: e.clientY});
    setTimeout(function() {
        $('#follower').css({left: e.clientX, top: e.clientY});
    }, 1);
});

class Game {
    constructor(name) {
        this.name = name
        this.score = 0 // the initial score when game start
        this.isGameRuning = false // before the game start

        this.timeLine = new TimelineMax({smoothChildTiming: true}) // 
        this.speed = 1.5 // the initial drop speed of the ball
        this.colors = ['#bf0a0a', '#13803b', '#37b5f0']; // the colors will be using in the game
        this.colorRGB = ['rgb(191, 10, 10)', 'rgb(19, 128, 59)', 'rgb(55, 181, 240)'];
        this.color = this.color[0] // the initial color of the gem
        


    }
    getScreenScale() {
        this.screenWidth = $(window).width(); // screen width
        this.screenHeight = $(window).height(); // screen height
        this.scale = (this.screen > this.screenHeight) ? this.screenHeight/800 : this.screen/1200;
    }

    generateGems() {
        this.gemBetween = new TimelineMax({repeat: -1, paused: 1});
        $('.scene .ball-holder').append('<div class="ball red" id="ball"></div>');
        this.bounce();
    }

    generateTweet() {
        let top = $(window).height() / 2 - 150;
        let left = $(window).width() / 2 - 300;
        window.open("https://twitter.com/intent/tweet?url=https://codepen.io/gregh/full/yVLOyO&amp;text=I scored "+ this.score +" points on Coloron! Can you beat my score?&amp;via=greghvns&amp;hashtags=coloron", "TweetWindow", "width=600px,height=300px,top=" + top + ",left=" + left);
    }
}

