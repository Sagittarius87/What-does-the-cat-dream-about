import Phaser from "phaser";

export class GameCards extends Phaser.GameObjects.Container
{
    randomCardImage;
    //randomCardImage2;
    //randomCardImage3;

    constructor(scene, x, y, randomCardTexture)
    {
        super(scene, x, y);

        this.scene = scene;
        this.x = x;
        this.y = y;
        this.randomCardTexture = randomCardTexture;
        //this.randomCardTexture2 = randomCardTexture2;
        //this.randomCardTexture3 = randomCardTexture3;
        //this.randomNumber = randomNumber;

        this.randomCardImage = scene.add.image(0, 0, this.randomCardTexture);
        //this.randomCardImage2 = scene.add.image(0, 0, this.randomCardTexture2);
        //this.randomCardImage3 = scene.add.image(0, 0, this.randomCardTexture3);

        this.add(this.randomCardImage);
        //this.add(this.randomCardImage2);
        //this.add(this.randomCardImage3);
    }
}