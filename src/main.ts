/// <reference path="../node_modules/phaser/typescript/phaser.d.ts"/>

import {MainState} from "./mainState";
import {PreloadState} from "./preloadState";

// new Phaser.Game(width, height, レンダラ(Phaser.AUTOで自動選択), DOMエレメント指定)
let game    = new Phaser.Game(640, 480, Phaser.AUTO, "");

// MainStateクラスを、"mainState"という名前で状態登録
game.state.add("mainState", MainState);

function preload() {
    game.load.image('star', 'assets/images.jpg')
}

window.onload   = () => {
    // 登録した状態のうち、"mainState"をスタートする
    game.state.start("mainState");
    game.add.sprite(0,0,'star')
}