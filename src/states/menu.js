export default class Menu extends Phaser.State {
    create() {
        this.add.sprite(0,0, 'bg');
        let startScreen = this.add.sprite(0, 0, 'start');

        let spaceKey = this.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        startScreen.alignIn(this.world.bounds, Phaser.CENTER);
        spaceKey.onDown.add(this.start, this);
        this.input.onTap.add(this.start, this);
    }

    start() {
        this.state.start('Play')
    }
}