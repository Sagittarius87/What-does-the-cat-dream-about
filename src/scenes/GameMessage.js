import Phaser from "phaser";

export class GameMessage extends Phaser.GameObjects.Text
{
    message;

    constructor(scene, x, y, message, style)
    {
        super(scene, x, y);

        this.scene = scene;
        this.x = x;
        this.y = y;
        this.message = message;
        this.style = style;

        this.message = scene.add.text(this.x, this.y, this.message, this.style).setOrigin(0.5);
    } 
}