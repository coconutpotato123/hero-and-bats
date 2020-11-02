// shoot projectiles 

controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    let x = 0
    let y = 0

    if(dir == "up"){
        x = 0 
        y = -50
    }
    else if (dir == "down"){
        x=  0
        y = 50
    }
    else if (dir == "left"){
        x = -50
        y = 0
    }
    else if (dir == "right"){
        x = 50
        y = 0
    }
    projectile = sprites.createProjectileFromSprite(projectileImg, hero, x, y)

})
game.onUpdate(function() {
    if (controller.up.isPressed()){
        dir = "up"
    }
    else if (controller.down.isPressed()){
        dir = "down"
    }

    else if (controller.right.isPressed()){
        dir = "right"
    }

    else if (controller.left.isPressed()){
        dir = "left"
    }

})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleBlueCrystal, function (sprite, location) {
    game.over(true)
})
// When hero and enemy collide
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    otherSprite.startEffect(effects.bubbles)
    otherSprite.destroy()
})
let enemy: Sprite = null
let projectile: Sprite = null
let hero: Sprite = null
let projectileImg: Image = null

// Initialize
let dir = "right"
let heroImg = sprites.builtin.forestMonkey6
let enemyImg = sprites.builtin.clownFish2
projectileImg = img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . 2 2 . . . . . . . 
    . . . . . . . 2 2 2 2 . . . . . 
    . . . . . . 2 2 4 4 2 2 . . . . 
    . . . . . 2 2 2 4 5 5 2 . . . . 
    . . . . . 2 4 4 4 5 4 2 2 . . . 
    . . . . . 2 4 2 5 2 5 2 2 . . . 
    . . . . . 2 2 2 5 4 4 2 2 . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `
tiles.setTilemap(tilemap`level`)
info.setLife(3)
// Create hero sprite
hero = sprites.create(heroImg, SpriteKind.Player)
tiles.placeOnRandomTile(hero, sprites.dungeon.collectibleInsignia)
controller.moveSprite(hero)
scene.cameraFollowSprite(hero)
// Spawn enemies
game.onUpdateInterval(500, function () {
    enemy = sprites.create(enemyImg, SpriteKind.Enemy)
    tiles.placeOnRandomTile(enemy, sprites.dungeon.purpleOuterWest0)
    enemy.setVelocity(50, 0)
    enemy.setFlag(SpriteFlag.DestroyOnWall, true)
})

sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function(sprite: Sprite, otherSprite: Sprite) {
    sprite.destroy()
    otherSprite.startEffect(effects.fire)
    otherSprite.destroy() 
})


