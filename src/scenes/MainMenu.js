import { Scene } from 'phaser';
import { CustomizableButton } from './СustomizableButton';

const LOGO_KEY = 'logo';
const PORTRAIT_KEY = 'portrait';
const BUTTON_UP_KEY = 'buttonNewGame';
const BUTTON_OVER_KEY = 'buttonNewGame1';
const BUTTON_CLICK_KEY = 'buttonNewGame2';
const BUTTON_NAME = 'Начать';

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

        const buttonNewGame = new CustomizableButton(this, width / 2, height / 2, BUTTON_NAME, BUTTON_UP_KEY, BUTTON_OVER_KEY, BUTTON_CLICK_KEY);
        this.add.existing(buttonNewGame);

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
