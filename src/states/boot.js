export default class Boot extends Phaser.State {
    create() {
        this.game.physics.startSystem(Phaser.Physics.ARCADE);
        this.state.start('Preload')
    }
}