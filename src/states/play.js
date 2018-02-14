let bird,
    base,
    ground,
    pipe,
    labelScore,
    score = -1,
    pipes,
    spaceKey;

export default class Play extends Phaser.State {

    create() {
        if (score > 0) {
            score = -1;
        }
        this.add.sprite(0, 0, 'bg');
        base = this.add.group();
        base.enableBody = true;
        ground = base.create(0, this.world.height - 64, 'base');
        ground.body.immovable = true;
        pipes = this.add.group();
        pipes.enableBody = true;
        this.world.bringToTop(base);
        bird = this.add.sprite(100, 250, 'bird');
        this.physics.arcade.enable(bird);
        bird.body.bounce.y = 0.2;
        bird.body.gravity.y = 850;
        bird.anchor.setTo(-0.2, 0.5);
        labelScore = this.add.text(140, 20, '0', {font: "30px flappy", fill: "#ffffff"});
        spaceKey = this.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        spaceKey.onDown.add(this.jump, this, bird);
        this.input.onTap.add(this.jumpOnTap, this);
        this.time.events.loop(1700, this.addRowOfPipes, this);
    }

    update () {

        if (bird.angle < 20)
            bird.angle += 1;

        let hitGround = this.physics.arcade.collide(bird, ground);

        this.physics.arcade.overlap(bird, pipes, this.restartGame, null, this);

        if (hitGround === true) {
            this.restartGame()
        }

    }

    jump() {
        bird.body.velocity.y = -330;
        this.add.tween(bird).to({angle: -20}, 100).start();
    }

    addRowOfPipes() {
        let bottomPos = this.getPipeYPos(100, 300),
            hole = 440,
            upperPos = bottomPos + hole;

        this.addPipe(280, bottomPos);
        this.addPipe(278, upperPos);
        this.addPoint();
    }

    addPipe(x, y) {
        pipe = this.add.sprite(x, this.world.height - y, 'pipe');
        // Add the pipe to our previously created group
        pipes.add(pipe);
        // Enable physics on the pipe
        this.physics.arcade.enable(pipe);
        // Add velocity to the pipe to make it move left
        pipe.body.velocity.x = -170;
        // Automatically kill the pipe when it's no longer visible
        pipe.checkWorldBounds = true;
        pipe.outOfBoundsKill = true;
    }

    jumpOnTap () {
        bird.body.velocity.y = -330; //-250
        this.add.tween(bird).to({angle: -20}, 100).start();
    }

    restartGame () {
        // console.log(score)
        this.state.start('Finish', true, false, score, spaceKey);
    }

    addPoint() {
        console.log(score);
        score += 1;
        labelScore.text = score;
    }

    getPipeYPos(min, max) {
        let rand = min - 0.5 + Math.random() * (max - min + 1);
        rand = Math.round(rand);
        return rand;
    }

}