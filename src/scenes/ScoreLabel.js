import Phaser from "phaser";

const formatScore = (score) => {
    return `Счет: ${score}`;
}

export class ScoreLabel extends Phaser.GameObjects.Text

{
    constructor(scene, x, y, score, style)
    {
        super(scene, x, y);

        this.scene = scene;
        this.x = x;
        this.y = y;
        this.score = score;
        this.style = style;

        this.score = scene.add.text(this.x, this.y, formatScore(this.score), this.style).setOrigin(0.5);
    }
}