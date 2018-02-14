import * as states from './states';
const GAME = new Phaser.Game(288, 512, Phaser.AUTO, 'game');
Object.keys(states).forEach(state => GAME.state.add(state, states[state]));
let bird,
    base,
    ground,
    pipe,
    labelScore,
    score = -1,
    pipes,
    spaceKey;

GAME.state.start('Boot');