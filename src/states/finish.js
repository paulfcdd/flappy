import Play from "./play";

let finishSign,
    labelScore,
    playersScore,
    space;

export default class Finish extends Phaser.State {

    init(score, spaceKey) {
        playersScore = score;
        space = spaceKey;
    }

    create () {
        this.add.sprite(0,0, 'bg');
        finishSign = this.add.sprite(0,0, 'finish');

        if (playersScore === -1) {
            playersScore = 0;
        }
        labelScore = this.add.text(140, 285, playersScore, { font: "30px flappy", fill: "#ffffff" });
        finishSign.alignIn(this.world.bounds, Phaser.CENTER);
        space.onDown.add(this.restart, this);
        this.input.onTap.add(this.restart, this);
    }
    restart () {
        this.state.start('Menu');
        playersScore = -1;
    }
}