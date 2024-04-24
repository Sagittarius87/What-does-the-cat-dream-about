import Phaser from "phaser";

export class PortraitChange extends Phaser.GameObjects.Container
{
    waitingImage;
    happyImage;
    disappointedImage;

    constructor(scene, x, y, waitingTexture, happyTexture, disappointedTexture)
    {
        super(scene, x, y);

        this.scene = scene;
        this.x = x;
        this.y = y;
        this.waitingTexture = waitingTexture;
        this.happyTexture = happyTexture;
        this.disappointedTexture = disappointedTexture;

        this.waitingImage = scene.add.image(0, 0, this.waitingTexture);
        this.happyImage = scene.add.image(0, 0, this.happyTexture);
        this.disappointedImage = scene.add.image(0, 0, this.disappointedTexture);

        this.add(this.waitingImage);
        this.add(this.happyImage);
        this.add(this.disappointedImage);

        this.happyImage.setVisible(false);
        this.disappointedImage.setVisible(false);
    }
}