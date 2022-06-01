namespace SpriteKind {
    export const Dice = SpriteKind.create()
}
// shoot projectiles
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (dir == "up") {
        x = 0
        y = -50
    } else if (dir == "down") {
        x = 0
        y = 50
    } else if (dir == "left") {
        x = -50
        y = 0
    } else if (dir == "right") {
        x = 50
        y = 0
    }
    projectile = sprites.createProjectileFromSprite(projectileImg, hero, x, y)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Player, function (sprite, otherSprite) {
    game.showLongText("BROTHER I FOUND YOU BROTHAAAH!!", DialogLayout.Center)
    game.over(true)
})
// })
function diceRoll () {
    let diceImgs: Image[] = []
    roll = sprites.create(diceImgs[randint(0, diceImgs.length - 1)], 0)
}
let roll: Sprite = null
let projectile: Sprite = null
let y = 0
let x = 0
let hero: Sprite = null
let projectileImg: Image = null
let dir = ""
game.showLongText("Try to get to your long lost brother! Each time you roll, the number you land on is the amount of spaces you can move. GOOD LUCK!!", DialogLayout.Center)
// Initialize
dir = "right"
let heroImg = img`
    . . . c c c c c . . . . . . . . 
    . . b b b b b b b b b . . . . . 
    . b b b b b b b b 3 3 b . . . . 
    b b b 8 b b 6 b b 3 3 3 b . . . 
    3 b b b b b b b b b b 3 3 b . . 
    3 b b b f f b b b . . b b b . . 
    b b . b b b b b . . . . . . . . 
    b . . b b b b b . . . . . . . c 
    . . b b b b b b b b b . . . . b 
    . . b b b b b b b b b b b . b b 
    . . b b b b b b b b b b b b b . 
    . . b b b b b b b b b b b b . . 
    . . b b b b b b b b b b b . . . 
    . . b b b b b b b b b b b . . . 
    . . b b . b b . b b . b b . . . 
    . . c c . c c . c c . c c . . . 
    `
let enemyImg3 = img`
    . . . . . . . . . . . . . . . . 
    . . . . . 4 4 . 4 . . 4 . . . . 
    . . . 4 . 4 4 4 5 4 4 . . . . . 
    . . . . 4 5 5 5 5 5 4 . . . . . 
    . . . 4 4 5 f 5 f 5 4 . . . . . 
    . . . 4 4 5 5 5 5 5 4 4 . . . . 
    . . . . 4 5 5 3 5 5 4 . . . . . 
    . . 4 4 4 5 f f f 5 4 . . . . . 
    . . . 4 4 4 4 4 4 4 4 4 . . . . 
    . 5 5 . 5 4 4 4 4 4 5 . 5 5 . . 
    . . 5 5 5 5 5 5 5 5 5 5 5 . . . 
    . . . . 5 5 5 5 5 5 5 . . . . . 
    . . . . 5 5 5 5 5 5 5 . . . . . 
    . . . . 5 5 5 5 5 5 5 . . . . . 
    . . . . . 5 5 5 5 5 . . . . . . 
    . . . . . . 5 5 5 . . . . . . . 
    `
projectileImg = img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . 9 . . . . . . . 
    . . . . . . . 9 1 9 . . . . . . 
    . . . . . . 9 1 1 1 9 . . . . . 
    . . . . . . 9 1 1 1 9 . . . . . 
    . . . . . 9 1 6 1 1 1 9 . . . . 
    . . . . 9 1 6 1 1 1 1 1 9 . . . 
    . . . . 9 1 6 1 1 1 1 1 9 . . . 
    . . . . 9 1 1 1 1 1 1 1 9 . . . 
    . . . . 9 1 1 1 1 1 1 1 9 . . . 
    . . . . . 9 1 1 1 1 1 9 . . . . 
    . . . . . . 9 1 1 1 9 . . . . . 
    . . . . . . . 9 9 9 . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `
let brotherImg = img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . 6 6 f 6 6 6 f 6 6 . . . 
    . . . 6 6 6 3 6 6 6 3 6 6 6 . . 
    . . 6 6 6 6 6 6 6 6 6 6 6 6 6 . 
    . 6 6 6 . . 6 6 3 6 6 . 6 6 6 6 
    . 6 6 . . . 6 f 6 f 6 . . . 6 6 
    . . . . . . . 6 6 6 . . . . . . 
    . . . . . . . 6 6 6 . . . . . . 
    . . . . 6 6 6 6 6 6 6 6 6 6 . . 
    . . 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
    . . 6 6 6 6 6 3 3 3 3 6 6 6 6 6 
    . . 6 6 6 6 3 3 3 3 3 3 6 6 6 6 
    . . 6 6 6 6 3 3 3 3 3 3 6 6 6 6 
    . . 6 6 6 6 3 3 3 3 3 3 6 6 6 6 
    . . 6 6 6 6 3 3 3 3 3 3 6 6 6 6 
    `
let diceImg1 = img`
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 f f f f 1 1 1 1 1 1 f f f f 1 
    1 f f f f 1 1 1 1 1 1 f f f f 1 
    1 f f f f 1 1 1 1 1 1 f f f f 1 
    1 f f f f 1 1 1 1 1 1 f f f f 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 f f f f 1 1 1 1 1 1 
    1 1 1 1 1 1 f f f f 1 1 1 1 1 1 
    1 1 1 1 1 1 f f f f 1 1 1 1 1 1 
    1 1 1 1 1 1 f f f f 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 f f f f 1 1 1 1 1 1 f f f f 1 
    1 f f f f 1 1 1 1 1 1 f f f f 1 
    1 f f f f 1 1 1 1 1 1 f f f f 1 
    1 f f f f 1 1 1 1 1 1 f f f f 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    `
let diceImg2 = img`
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 f f f f 1 1 1 1 1 1 f f f f 1 
    1 f f f f 1 1 1 1 1 1 f f f f 1 
    1 f f f f 1 1 1 1 1 1 f f f f 1 
    1 f f f f 1 1 1 1 1 1 f f f f 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 f f f f 1 1 1 1 1 1 f f f f 1 
    1 f f f f 1 1 1 1 1 1 f f f f 1 
    1 f f f f 1 1 1 1 1 1 f f f f 1 
    1 f f f f 1 1 1 1 1 1 f f f f 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 f f f f 1 1 1 1 1 1 f f f f 1 
    1 f f f f 1 1 1 1 1 1 f f f f 1 
    1 f f f f 1 1 1 1 1 1 f f f f 1 
    1 f f f f 1 1 1 1 1 1 f f f f 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    `
let diceImg3 = img`
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 f f f f 1 
    1 1 1 1 1 1 1 1 1 1 1 f f f f 1 
    1 1 1 1 1 1 1 1 1 1 1 f f f f 1 
    1 1 1 1 1 1 1 1 1 1 1 f f f f 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 f f f f 1 1 1 1 1 1 1 1 1 1 1 
    1 f f f f 1 1 1 1 1 1 1 1 1 1 1 
    1 f f f f 1 1 1 1 1 1 1 1 1 1 1 
    1 f f f f 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    `
let diceImg4 = img`
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 f f f f 1 1 1 1 1 1 
    1 1 1 1 1 1 f f f f 1 1 1 1 1 1 
    1 1 1 1 1 1 f f f f 1 1 1 1 1 1 
    1 1 1 1 1 1 f f f f 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    `
let diceImg5 = img`
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 f f f f 1 
    1 1 1 1 1 1 1 1 1 1 1 f f f f 1 
    1 1 1 1 1 1 1 1 1 1 1 f f f f 1 
    1 1 1 1 1 1 1 1 1 1 1 f f f f 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 f f f f 1 1 1 1 1 1 
    1 1 1 1 1 1 f f f f 1 1 1 1 1 1 
    1 1 1 1 1 1 f f f f 1 1 1 1 1 1 
    1 1 1 1 1 1 f f f f 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 f f f f 1 1 1 1 1 1 1 1 1 1 1 
    1 f f f f 1 1 1 1 1 1 1 1 1 1 1 
    1 f f f f 1 1 1 1 1 1 1 1 1 1 1 
    1 f f f f 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    `
let diceImg6 = img`
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 f f f f 1 1 1 1 1 1 f f f f 1 
    1 f f f f 1 1 1 1 1 1 f f f f 1 
    1 f f f f 1 1 1 1 1 1 f f f f 1 
    1 f f f f 1 1 1 1 1 1 f f f f 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 f f f f 1 1 1 1 1 1 
    1 1 1 1 1 1 f f f f 1 1 1 1 1 1 
    1 1 1 1 1 1 f f f f 1 1 1 1 1 1 
    1 1 1 1 1 1 f f f f 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 f f f f 1 1 1 1 1 1 f f f f 1 
    1 f f f f 1 1 1 1 1 1 f f f f 1 
    1 f f f f 1 1 1 1 1 1 f f f f 1 
    1 f f f f 1 1 1 1 1 1 f f f f 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    `
let diceImg7 = img`
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 f f f f 1 
    1 1 1 1 1 1 1 1 1 1 1 f f f f 1 
    1 1 1 1 1 1 1 1 1 1 1 f f f f 1 
    1 1 1 1 1 1 1 1 1 1 1 f f f f 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 f f f f 1 1 1 1 1 1 1 1 1 1 1 
    1 f f f f 1 1 1 1 1 1 1 1 1 1 1 
    1 f f f f 1 1 1 1 1 1 1 1 1 1 1 
    1 f f f f 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    `
let diceImg8 = img`
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 f f f f 1 1 1 1 1 1 f f f f 1 
    1 f f f f 1 1 1 1 1 1 f f f f 1 
    1 f f f f 1 1 1 1 1 1 f f f f 1 
    1 f f f f 1 1 1 1 1 1 f f f f 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 f f f f 1 1 1 1 1 1 f f f f 1 
    1 f f f f 1 1 1 1 1 1 f f f f 1 
    1 f f f f 1 1 1 1 1 1 f f f f 1 
    1 f f f f 1 1 1 1 1 1 f f f f 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 f f f f 1 1 1 1 1 1 f f f f 1 
    1 f f f f 1 1 1 1 1 1 f f f f 1 
    1 f f f f 1 1 1 1 1 1 f f f f 1 
    1 f f f f 1 1 1 1 1 1 f f f f 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    `
let diceImg9 = img`
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 f f f f 1 1 1 1 1 1 
    1 1 1 1 1 1 f f f f 1 1 1 1 1 1 
    1 1 1 1 1 1 f f f f 1 1 1 1 1 1 
    1 1 1 1 1 1 f f f f 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    `
let diceImg10 = img`
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 f f f f 1 1 1 1 1 1 f f f f 1 
    1 f f f f 1 1 1 1 1 1 f f f f 1 
    1 f f f f 1 1 1 1 1 1 f f f f 1 
    1 f f f f 1 1 1 1 1 1 f f f f 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 f f f f 1 1 1 1 1 1 f f f f 1 
    1 f f f f 1 1 1 1 1 1 f f f f 1 
    1 f f f f 1 1 1 1 1 1 f f f f 1 
    1 f f f f 1 1 1 1 1 1 f f f f 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    `
let diceImg11 = img`
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 f f f f 1 
    1 1 1 1 1 1 1 1 1 1 1 f f f f 1 
    1 1 1 1 1 1 1 1 1 1 1 f f f f 1 
    1 1 1 1 1 1 1 1 1 1 1 f f f f 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 f f f f 1 1 1 1 1 1 
    1 1 1 1 1 1 f f f f 1 1 1 1 1 1 
    1 1 1 1 1 1 f f f f 1 1 1 1 1 1 
    1 1 1 1 1 1 f f f f 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 f f f f 1 1 1 1 1 1 1 1 1 1 1 
    1 f f f f 1 1 1 1 1 1 1 1 1 1 1 
    1 f f f f 1 1 1 1 1 1 1 1 1 1 1 
    1 f f f f 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    `
let diceImg12 = img`
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 f f f f 1 
    1 1 1 1 1 1 1 1 1 1 1 f f f f 1 
    1 1 1 1 1 1 1 1 1 1 1 f f f f 1 
    1 1 1 1 1 1 1 1 1 1 1 f f f f 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 f f f f 1 1 1 1 1 1 
    1 1 1 1 1 1 f f f f 1 1 1 1 1 1 
    1 1 1 1 1 1 f f f f 1 1 1 1 1 1 
    1 1 1 1 1 1 f f f f 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 f f f f 1 1 1 1 1 1 1 1 1 1 1 
    1 f f f f 1 1 1 1 1 1 1 1 1 1 1 
    1 f f f f 1 1 1 1 1 1 1 1 1 1 1 
    1 f f f f 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    `
let diceImg13 = img`
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 f f f f 1 1 1 1 1 1 f f f f 1 
    1 f f f f 1 1 1 1 1 1 f f f f 1 
    1 f f f f 1 1 1 1 1 1 f f f f 1 
    1 f f f f 1 1 1 1 1 1 f f f f 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 f f f f 1 1 1 1 1 1 
    1 1 1 1 1 1 f f f f 1 1 1 1 1 1 
    1 1 1 1 1 1 f f f f 1 1 1 1 1 1 
    1 1 1 1 1 1 f f f f 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 f f f f 1 1 1 1 1 1 f f f f 1 
    1 f f f f 1 1 1 1 1 1 f f f f 1 
    1 f f f f 1 1 1 1 1 1 f f f f 1 
    1 f f f f 1 1 1 1 1 1 f f f f 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    `
let diceImg14 = img`
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 f f f f 1 
    1 1 1 1 1 1 1 1 1 1 1 f f f f 1 
    1 1 1 1 1 1 1 1 1 1 1 f f f f 1 
    1 1 1 1 1 1 1 1 1 1 1 f f f f 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 f f f f 1 1 1 1 1 1 
    1 1 1 1 1 1 f f f f 1 1 1 1 1 1 
    1 1 1 1 1 1 f f f f 1 1 1 1 1 1 
    1 1 1 1 1 1 f f f f 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 f f f f 1 1 1 1 1 1 1 1 1 1 1 
    1 f f f f 1 1 1 1 1 1 1 1 1 1 1 
    1 f f f f 1 1 1 1 1 1 1 1 1 1 1 
    1 f f f f 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    `
enemyImg3 = img`
    . . . . . . . 5 . . . 5 . . . . 
    . . 4 4 . 5 4 4 4 . 5 5 4 . . . 
    . . . 4 4 4 4 4 4 4 4 5 4 . . . 
    . . . 5 4 5 5 5 5 5 4 5 4 4 . . 
    . . . 5 4 5 f 5 f 5 4 4 4 4 . . 
    . . . 4 4 5 5 5 5 5 4 5 . 5 . . 
    . . 4 4 4 5 5 f 5 5 4 5 5 5 . . 
    . . 5 5 4 4 4 4 4 4 4 4 4 . . . 
    . . . . 4 5 5 5 5 4 4 . 4 . . . 
    . . . . 4 . 5 5 . . 4 . . . . . 
    . . . . . . 5 5 . . . . . . . . 
    . . . . . 5 5 5 5 . . . . . . . 
    . . . . 5 5 5 5 5 5 . . . . . . 
    . . . . 5 5 5 5 5 5 . . . . . . 
    . . . . 5 5 5 5 5 5 . . . . . . 
    . . . . 5 5 5 5 5 5 . . . . . . 
    `
enemyImg3 = img`
    . . . . . . . 5 . . . 5 . . . . 
    . . 4 4 . 5 4 4 4 . 5 5 4 . . . 
    . . . 4 4 4 4 4 4 4 4 5 4 . . . 
    . . . 5 4 5 5 5 5 5 4 5 4 4 . . 
    . . . 5 4 5 f 5 f 5 4 4 4 4 . . 
    . . . 4 4 5 5 5 5 5 4 5 . 5 . . 
    . . 4 4 4 5 5 f 5 5 4 5 5 5 . . 
    . . 5 5 4 4 4 4 4 4 4 4 4 . . . 
    . . . . 4 5 5 5 5 4 4 . 4 . . . 
    . . . . 4 . 5 5 . . 4 . . . . . 
    . . . . . . 5 5 . . . . . . . . 
    . . . . . 5 5 5 5 . . . . . . . 
    . . . . 5 5 5 5 5 5 . . . . . . 
    . . . . 5 5 5 5 5 5 . . . . . . 
    . . . . 5 5 5 5 5 5 . . . . . . 
    . . . . 5 5 5 5 5 5 . . . . . . 
    `
enemyImg3 = img`
    . . . . . . . 5 . . . 5 . . . . 
    . . 4 4 . 5 4 4 4 . 5 5 4 . . . 
    . . . 4 4 4 4 4 4 4 4 5 4 . . . 
    . . . 5 4 5 5 5 5 5 4 5 4 4 . . 
    . . . 5 4 5 f 5 f 5 4 4 4 4 . . 
    . . . 4 4 5 5 5 5 5 4 5 . 5 . . 
    . . 4 4 4 5 5 f 5 5 4 5 5 5 . . 
    . . 5 5 4 4 4 4 4 4 4 4 4 . . . 
    . . . . 4 5 5 5 5 4 4 . 4 . . . 
    . . . . 4 . 5 5 . . 4 . . . . . 
    . . . . . . 5 5 . . . . . . . . 
    . . . . . 5 5 5 5 . . . . . . . 
    . . . . 5 5 5 5 5 5 . . . . . . 
    . . . . 5 5 5 5 5 5 . . . . . . 
    . . . . 5 5 5 5 5 5 . . . . . . 
    . . . . 5 5 5 5 5 5 . . . . . . 
    `
tiles.setTilemap(tilemap`level`)
info.setLife(5)
// Create hero sprite
hero = sprites.create(heroImg, SpriteKind.Player)
tiles.placeOnRandomTile(hero, sprites.dungeon.collectibleInsignia)
// Create hero sprite
let enemyy3 = sprites.create(enemyImg3, SpriteKind.Enemy)
tiles.placeOnRandomTile(enemyy3, sprites.vehicle.roadVertical)
// Create hero sprite
enemyy3 = sprites.create(enemyImg3, SpriteKind.Enemy)
tiles.placeOnRandomTile(enemyy3, sprites.vehicle.roadTurn3)
// Create hero sprite
enemyy3 = sprites.create(enemyImg3, SpriteKind.Enemy)
tiles.placeOnRandomTile(enemyy3, sprites.vehicle.roadHorizontal)
controller.moveSprite(hero)
scene.cameraFollowSprite(hero)
let list = [0, 1]
// Create brother sprite
let brother = sprites.create(brotherImg, SpriteKind.Player)
tiles.placeOnTile(brother, tiles.getTileLocation(11, 28))
// Create brother sprite
let dice1 = sprites.create(diceImg1, SpriteKind.Player)
tiles.placeOnTile(dice1, tiles.getTileLocation(9, 2))
// Create brother sprite
let dice2 = sprites.create(diceImg2, SpriteKind.Player)
tiles.placeOnTile(dice2, tiles.getTileLocation(10, 2))
// Create brother sprite
let dice3 = sprites.create(diceImg3, SpriteKind.Player)
tiles.placeOnTile(dice3, tiles.getTileLocation(4, 3))
// Create brother sprite
let dice4 = sprites.create(diceImg4, SpriteKind.Player)
tiles.placeOnTile(dice4, tiles.getTileLocation(5, 3))
// Create brother sprite
let dice5 = sprites.create(diceImg5, SpriteKind.Player)
tiles.placeOnTile(dice5, tiles.getTileLocation(3, 14))
// Create brother sprite
let dice6 = sprites.create(diceImg6, SpriteKind.Player)
tiles.placeOnTile(dice6, tiles.getTileLocation(4, 14))
// Create brother sprite
let dice7 = sprites.create(diceImg7, SpriteKind.Player)
tiles.placeOnTile(dice7, tiles.getTileLocation(7, 10))
// Create brother sprite
let dice8 = sprites.create(diceImg8, SpriteKind.Player)
tiles.placeOnTile(dice8, tiles.getTileLocation(8, 10))
// Create brother sprite
let dice9 = sprites.create(diceImg9, SpriteKind.Player)
tiles.placeOnTile(dice9, tiles.getTileLocation(8, 5))
// Create brother sprite
let dice10 = sprites.create(diceImg10, SpriteKind.Player)
tiles.placeOnTile(dice10, tiles.getTileLocation(7, 5))
// Create brother sprite
let dice11 = sprites.create(diceImg11, SpriteKind.Player)
tiles.placeOnTile(dice11, tiles.getTileLocation(6, 19))
// Create brother sprite
let dice12 = sprites.create(diceImg12, SpriteKind.Player)
tiles.placeOnTile(dice12, tiles.getTileLocation(7, 19))
// Create brother sprite
let dice13 = sprites.create(diceImg13, SpriteKind.Player)
tiles.placeOnTile(dice13, tiles.getTileLocation(4, 26))
// Create brother sprite
let dice14 = sprites.create(diceImg14, SpriteKind.Player)
tiles.placeOnTile(dice14, tiles.getTileLocation(5, 26))
img`
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . 1 1 1 1 1 1 1 1 1 1 . . .
    . . . 1 1 1 1 1 1 1 1 1 1 . . .
    . . . 1 1 1 1 1 1 1 1 1 1 . . .
    . . . 1 1 1 1 1 1 1 1 1 1 . . .
    . . . 1 1 1 1 f f 1 1 1 1 . . .
    . . . 1 1 1 1 f f 1 1 1 1 . . .
    . . . 1 1 1 1 1 1 1 1 1 1 . . .
    . . . 1 1 1 1 1 1 1 1 1 1 . . .
    . . . 1 1 1 1 1 1 1 1 1 1 . . .
    . . . 1 1 1 1 1 1 1 1 1 1 . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
`,
img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . 1 1 1 1 1 1 1 1 1 1 . . . 
    . . . 1 1 1 1 1 1 1 1 1 1 . . . 
    . . . 1 1 1 1 1 1 f f 1 1 . . . 
    . . . 1 1 1 1 1 1 f f 1 1 . . . 
    . . . 1 1 1 1 1 1 1 1 1 1 . . . 
    . . . 1 1 1 1 1 1 1 1 1 1 . . . 
    . . . 1 1 f f 1 1 1 1 1 1 . . . 
    . . . 1 1 f f 1 1 1 1 1 1 . . . 
    . . . 1 1 1 1 1 1 1 1 1 1 . . . 
    . . . 1 1 1 1 1 1 1 1 1 1 . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,
img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . 1 1 1 1 1 1 1 1 1 1 . . . 
    . . . 1 1 1 1 1 1 1 f f 1 . . . 
    . . . 1 1 1 1 1 1 1 f f 1 . . . 
    . . . 1 1 1 1 1 1 1 1 1 1 . . . 
    . . . 1 1 1 1 f f 1 1 1 1 . . . 
    . . . 1 1 1 1 f f 1 1 1 1 . . . 
    . . . 1 1 1 1 1 1 1 1 1 1 . . . 
    . . . 1 f f 1 1 1 1 1 1 1 . . . 
    . . . 1 f f 1 1 1 1 1 1 1 . . . 
    . . . 1 1 1 1 1 1 1 1 1 1 . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,
img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . 1 1 1 1 1 1 1 1 1 1 . . . 
    . . . 1 f f 1 1 1 1 f f 1 . . . 
    . . . 1 f f 1 1 1 1 f f 1 . . . 
    . . . 1 1 1 1 1 1 1 1 1 1 . . . 
    . . . 1 1 1 1 1 1 1 1 1 1 . . . 
    . . . 1 1 1 1 1 1 1 1 1 1 . . . 
    . . . 1 1 1 1 1 1 1 1 1 1 . . . 
    . . . 1 f f 1 1 1 1 f f 1 . . . 
    . . . 1 f f 1 1 1 1 f f 1 . . . 
    . . . 1 1 1 1 1 1 1 1 1 1 . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,
img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . 1 1 1 1 1 1 1 1 1 1 . . . 
    . . . 1 f f 1 1 1 1 f f 1 . . . 
    . . . 1 f f 1 1 1 1 f f 1 . . . 
    . . . 1 1 1 1 1 1 1 1 1 1 . . . 
    . . . 1 1 1 1 f f 1 1 1 1 . . . 
    . . . 1 1 1 1 f f 1 1 1 1 . . . 
    . . . 1 1 1 1 1 1 1 1 1 1 . . . 
    . . . 1 f f 1 1 1 1 f f 1 . . . 
    . . . 1 f f 1 1 1 1 f f 1 . . . 
    . . . 1 1 1 1 1 1 1 1 1 1 . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,
img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . 1 1 1 1 1 1 1 1 1 1 . . . 
    . . . 1 f f 1 1 1 1 f f 1 . . . 
    . . . 1 f f 1 1 1 1 f f 1 . . . 
    . . . 1 1 1 1 1 1 1 1 1 1 . . . 
    . . . 1 f f 1 1 1 1 f f 1 . . . 
    . . . 1 f f 1 1 1 1 f f 1 . . . 
    . . . 1 1 1 1 1 1 1 1 1 1 . . . 
    . . . 1 f f 1 1 1 1 f f 1 . . . 
    . . . 1 f f 1 1 1 1 f f 1 . . . 
    . . . 1 1 1 1 1 1 1 1 1 1 . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `
// Keep track of last direction
game.onUpdate(function () {
    if (controller.up.isPressed()) {
        dir = "up"
    } else if (controller.down.isPressed()) {
        dir = "down"
    } else if (controller.right.isPressed()) {
        dir = "right"
    } else if (controller.left.isPressed()) {
        dir = "left"
    }
})
