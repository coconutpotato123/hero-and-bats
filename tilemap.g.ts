// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile5 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level":
            case "level":return tiles.createTilemap(hex`100020000003070707070707070707070707010000050d11100f100f100f100f0c0d060000050d120d0d0d0d0d0d0d0d0d0d060000050d140d0d0309090909090909060000050d120d0d0a0d0d0d0d0d0d0d060000050d140d0d0a0d0d11100f100f060000050d120d0d0a0d0d1203080808060000050d140d0d0a0d0d14060d0d14060000050d120d0d0a0d0d12060d0d12060000050d140d0d0a0d0d14060d0d14060000050d120d0d0a0d0d12060d0d12060000050d140d0d0a0d0d14060d0d14060000050d120d08020d0d120d0d0d12060000050d151017100f1019100f101a060000050d0d0d120d0d0d0d0d0d0d0d060000050d0d0d140d0d0d0d0d0d0d0d06000005080808120d0d030808080808060000050d0d0d140d0d0b0d0d0d0d14060000050d0d0d120d0d0b0d0d0d0d12060000050d11101a0d0d0b0d0d0d0d14060000050d120d0d0d0d0b0d0d0d0d12060000050d140d0808080b0d0d0d0d14060000050d120d0d0d0d0d0d0d0d0d12060000050d18100f100f100f100f101a060000050d130d0d0d0d0d0d0d0d0d0d060000050d140d080808080808080808060000050d130d0d0d0d0d0d0d0d0d0d0600000a0d15100f100f10160d0d0d0d06000005080808080d0d0d18101c0e0d06000005100f100f100f101a0d0d0d0d06000004080808080808080808080808020000000000000000000000000000000000`, img`
.22222222222222.
.2............2.
.2............2.
.2....222222222.
.2....2.......2.
.2....2.......2.
.2....2...22222.
.2....2...2...2.
.2....2...2...2.
.2....2...2...2.
.2....2...2...2.
.2....2...2...2.
.2...22.......2.
.2............2.
.2............2.
.2............2.
.2222...2222222.
.2......2.....2.
.2......2.....2.
.2......2.....2.
.2......2.....2.
.2...2222.....2.
.2............2.
.2............2.
.2............2.
.2...2222222222.
.2............2.
.2............2.
.22222........2.
.2............2.
.22222222222222.
................
`, [myTiles.transparency16,sprites.dungeon.purpleOuterNorthEast,sprites.dungeon.purpleOuterSouthWest,sprites.dungeon.purpleOuterNorthWest,sprites.dungeon.purpleOuterSouthEast,sprites.dungeon.purpleOuterWest0,sprites.dungeon.purpleOuterEast0,sprites.dungeon.purpleOuterNorth1,sprites.dungeon.purpleOuterSouth1,sprites.dungeon.purpleOuterSouth0,sprites.dungeon.purpleOuterWest1,sprites.dungeon.purpleOuterEast1,sprites.dungeon.collectibleInsignia,sprites.dungeon.floorLight0,sprites.dungeon.floorLight4,sprites.vehicle.roadHorizontal,myTiles.tile3,sprites.vehicle.roadTurn1,myTiles.tile4,myTiles.tile5,sprites.vehicle.roadVertical,sprites.vehicle.roadTurn3,sprites.vehicle.roadTurn2,sprites.vehicle.roadIntersection3,sprites.vehicle.roadIntersection2,sprites.vehicle.roadIntersection1,sprites.vehicle.roadTurn4,myTiles.tile2,sprites.dungeon.hazardSpike], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile1":
            case "tile3":return tile3;
            case "myTile":
            case "tile1":return tile1;
            case "myTile3":
            case "tile5":return tile5;
            case "myTile2":
            case "tile4":return tile4;
            case "myTile0":
            case "tile2":return tile2;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
