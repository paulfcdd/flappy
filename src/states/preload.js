export default class Preload extends Phaser.State {
    preload() {
        this.load.image('bg', '../media/src/bg.png');
        this.load.image('start', '../media/src/start.png');
        this.load.image('bird', '../media/src/yellowbird-midflap.png');
        this.load.image('base', '../media/src/base.png');
        this.load.image('pipe', '../media/src/pipe.png');
        this.load.image('finish', '../media/src/gameover.png');
    }

    create() {
        this.state.start('Menu')
    }
}