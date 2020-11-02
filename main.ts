let enemy: Sprite = null

// Initialize

let heroImg = sprites.duck.duck2
let enemyImg = sprites.builtin.clownFish2
tiles.setTilemap(tilemap`level`)
info.setLife(3)
// Create hero sprite

let hero = sprites.create(heroImg, SpriteKind.Player)
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

// When hero and enemy collide 

sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function(sprite: Sprite, otherSprite: Sprite) {
    info.changeLifeBy(-1)
    otherSprite.startEffect(effects.bubbles)
    otherSprite.destroy()
})
