import Phaser from "phaser";

export class GameMessage extends Phaser.GameObjects.Text
{
    nameFont;
    message;

    constructor(scene, x, y, nameFont, message)
    {
        super(scene, x, y);

        this.scene = scene;
        this.x = x;
        this.y = y;
        this.nameFont = nameFont;
        this.message = message;

        //this.message = scene.add.text(this.x, this.y, this.message, this.style).setOrigin(0.5);
        this.message = scene.add.bitmapText(this.x, this.y, this.nameFont, this.message).setOrigin(0.5);
    } 
}