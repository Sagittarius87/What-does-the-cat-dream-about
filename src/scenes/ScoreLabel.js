import Phaser from "phaser";

const formatScore = (score) => {
    return `Счет: ${score}`;
}

export class ScoreLabel extends Phaser.GameObjects.Text
{
    nameFont;
    score;

    constructor(scene, x, y, nameFont, score)
    {
        super(scene, x, y);

        this.scene = scene;
        this.x = x;
        this.y = y;
        this.nameFont = nameFont;
        this.score = score;
        
        //this.score = scene.add.text(this.x, this.y, formatScore(this.score), this.style).setOrigin(0.5);
        this.score = scene.add.bitmapText(this.x, this.y, this.nameFont, formatScore(this.score)).setOrigin(0.5);
    }
}