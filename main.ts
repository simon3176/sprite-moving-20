input.onButtonPressed(Button.A, function () {
    P1.change(LedSpriteProperty.X, 1)
    P1.change(LedSpriteProperty.Y, 1)
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < 5; index++) {
        for (let index = 0; index < 5; index++) {
            basic.pause(200)
            P2.move(1)
        }
        P2.turn(Direction.Right, 90)
    }
})
let P2: game.LedSprite = null
let P1: game.LedSprite = null
P1 = game.createSprite(0, 0)
P2 = game.createSprite(4, 0)
basic.forever(function () {
	
})
