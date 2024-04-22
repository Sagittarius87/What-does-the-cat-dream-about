import { Scene } from 'phaser';

export class Preloader extends Scene
{
    constructor ()
    {
        super('Preloader');
    }

    init ()
    {   /*
        //  We loaded this image in our Boot Scene, so we can display it here
        this.add.image(512, 384, 'background');

        //  A simple progress bar. This is the outline of the bar.
        this.add.rectangle(512, 384, 468, 32).setStrokeStyle(1, 0xffffff);

        //  This is the progress bar itself. It will increase in size from the left based on the % of progress.
        const bar = this.add.rectangle(512-230, 384, 4, 28, 0xffffff);

        //  Use the 'progress' event emitted by the LoaderPlugin to update the loading bar
        this.load.on('progress', (progress) => {

            //  Update the progress bar (our bar is 464px wide, so 100% = 464px)
            bar.width = 4 + (460 * progress);

        });
        */
    }

    preload ()
    {        
        //  Load the assets for the game - Replace with your own assets
        this.load.setPath('assets');

        this.load.image('portrait', 'portrait.png');
        this.load.image('logo', 'logo.png');
        this.load.image('catIsWaiting', 'catIsWaiting.png');
        this.load.image('catIsHappy', 'catIsHappy.png');
        this.load.image('catIsDissapointed', 'catIsDissapointed.png');
        this.load.image('card9', 'card9.png');
        this.load.image('card8', 'card8.png');
        this.load.image('card7', 'card7.png');
        this.load.image('card6', 'card6.png');
        this.load.image('card7', 'card7.png');
        this.load.image('card6', 'card6.png');
        this.load.image('card5', 'card5.png');
        this.load.image('card4', 'card4.png');
        this.load.image('card3', 'card3.png');
        this.load.image('card2', 'card2.png');
        this.load.image('card1', 'card1.png');
        this.load.image('buttonNewGame2', 'buttonNewGame2.png');
        this.load.image('buttonNewGame1', 'buttonNewGame1.png');
        this.load.image('buttonNewGame', 'buttonNewGame.png');

        this.load.bitmapFont('PixeloidSans38', 'fonts/PixeloidSans38/PixeloidSans38.png', 'fonts/PixeloidSans38/PixeloidSans38.xml');
        
        console.log('assets is loaded');
    }

    create ()
    {   /*
        //  When all the assets have loaded, it's often worth creating global objects here that the rest of the game can use.
        //  For example, you can define global animations here, so we can use them in other scenes.
        */
        //  Move to the MainMenu. You could also swap this for a Scene Transition, such as a camera fade.
        this.scene.start('MainMenu');
    }
}
