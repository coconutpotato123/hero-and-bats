// When hero wins game
scene.onOverlapTile(SpriteKind.Player, img`
    . . . . . . . . . . . . . . . . 
    . . . . . . 6 6 6 . . . . . . . 
    . . . . 6 6 6 6 6 6 6 . . . . . 
    . . . 6 3 6 7 6 8 6 3 6 . . . . 
    . . 6 3 6 6 6 6 6 6 6 3 6 . . . 
    . 6 6 6 . 6 6 1 6 6 . 6 6 6 . . 
    . . . . . . 6 6 6 . . . . . . . 
    . . . . . 6 6 6 6 6 . . . . . . 
    . c 6 . . 6 6 3 3 6 6 . . 6 c . 
    . . 6 . 6 6 3 3 3 3 6 6 . 6 . . 
    . . 6 6 6 6 3 3 3 3 6 6 6 6 . . 
    . . . . 6 6 3 3 3 3 6 6 . . . . 
    . . . . 6 6 3 3 3 3 6 6 . . . . 
    . . . . 6 6 6 3 3 6 6 6 . . . . 
    . . . . 6 6 6 6 6 6 6 6 . . . . 
    . . . . . . 6 6 6 6 . . . . . . 
    `, function (sprite, location) {
    game.showLongText("BROTHER I FOUND YOU BROTHAAAH!!", DialogLayout.Center)
    game.over(true)
})
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
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprite.destroy()
    otherSprite.startEffect(effects.fire)
    otherSprite.destroy()
})
// When hero and enemy collide
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    otherSprite.startEffect(effects.bubbles)
    otherSprite.destroy()
})
let enemy: Sprite = null
let projectile: Sprite = null
let y = 0
let x = 0
let hero: Sprite = null
let projectileImg: Image = null
let dir = ""
game.showLongText("Try to get to your long lost brother! Each time you roll, the number you land on is the amount of spaces you can move. ADD MORE ", DialogLayout.Center)
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
let enemyImg = img`
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
tiles.setTilemap(tilemap`level`)
info.setLife(5)
// Create hero sprite
hero = sprites.create(heroImg, SpriteKind.Player)
tiles.placeOnRandomTile(hero, sprites.dungeon.collectibleInsignia)
controller.moveSprite(hero)
scene.cameraFollowSprite(hero)
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
// Spawn enemies
game.onUpdateInterval(1000, function () {
    enemy = sprites.create(enemyImg, SpriteKind.Enemy)
    tiles.placeOnRandomTile(enemy, sprites.dungeon.purpleOuterWest0)
    enemy.setVelocity(50, 0)
    enemy.setFlag(SpriteFlag.DestroyOnWall, true)
})
