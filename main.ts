// Initialize 
let heroImg = sprites.duck.duck2
let enemyImg = sprites.builtin.clownFish2



tiles.setTilemap(tilemap`level`)
// Create hero sprite

let hero = sprites.create(heroImg, SpriteKind.Player)

tiles.placeOnRandomTile(hero, sprites.dungeon.collectibleInsignia)
controller.moveSprite(hero)
scene.cameraFollowSprite(hero)
