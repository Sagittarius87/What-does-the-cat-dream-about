import Phaser from "phaser";

export class CustomizableButton extends Phaser.GameObjects.Container
{
    buttonText;
    upImage;
    overImage;
    clickImage;
    
    constructor(scene, x, y, buttonName, upTexture, overTexture, clickTexture)
    {
        super(scene, x, y);

        this.scene = scene;
        this.x = x;
        this.y = y;
        this.buttonName = buttonName;
        this.upTexture = upTexture;
        this.overTexture = overTexture;
        this.clickTexture = clickTexture;

        this.buttonText = scene.add.text(0, 0, this.buttonName, { fontFamily: 'Arial Black', fontSize: 38, color: '#000000', align: 'center' }).setOrigin(0.5);
        this.upImage = scene.add.image(0, 0, this.upTexture);
        this.overImage = scene.add.image(0, 0, this.overTexture);
        this.clickImage = scene.add.image(0, 0, this.clickTexture);
        
        this.add(this.upImage);
        this.add(this.overImage);
        this.add(this.clickImage);
        this.add(this.buttonText);

        this.overImage.setVisible(false);
        this.clickImage.setVisible(false);

        this.setSize(this.upImage.width, this.upImage.height);

        this.setInteractive()
            .on(Phaser.Input.Events.GAMEOBJECT_POINTER_OVER, () => {
                console.log('mouse over')
            })
            .on(Phaser.Input.Events.GAMEOBJECT_POINTER_OUT, () => {
                console.log('mouse out')
            })
            .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {
                console.log('mouse click')
            });
    }
}