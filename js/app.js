class Game {
    constructor(name) {
        this.name = name
        this.score = 0 // the initial score when game start
        this.isGameRuning = false // before the game start

        this.timeLine = new TimelineMax({smoothChildTiming: true}) // 
        this.speed = 1.5 // the initial drop speed of the ball
        this.colors = []; // the colors will be using in the game
        this.colorRGBA = [];
        


    }
    getScreenScale() {
        this.screenWidth = $(window).width(); // screen width
        this.screenHeight = $(window).height(); // screen height
        this.scale = (this.screen > this.screenHeight) ? this.screenHeight/800 : this.screen/1200;
    }

    generateObject() {
        
    }

}

