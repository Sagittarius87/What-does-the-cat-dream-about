import { Scene } from 'phaser';

const LOGO_KEY = 'logo';
const PORTRAIT_KEY = 'portrait';
const BUTTON_KEY = 'buttonNewGame'


export class MainMenu extends Scene
{
    constructor ()
    {
        super('MainMenu');
    }

    create ()
    {
        const width = this.sys.game.config.width;
        const height = this.sys.game.config.height;
       
        this.add.image(width / 2, 60, LOGO_KEY);
        this.add.image(width / 2, 210, PORTRAIT_KEY);
    


        /*
        this.add.text(512, 460, 'Main Menu', {
            fontFamily: 'Arial Black', fontSize: 38, color: '#ffffff',
            stroke: '#000000', strokeThickness: 8,
            align: 'center'
        }).setOrigin(0.5);

        this.input.once('pointerdown', () => {

            this.scene.start('Game');

        });
        */
        
        console.log('MainMenu is created')
        console.log(width)
    }
}
