// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`0a0008000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
`, [myTiles.transparency16,sprites.dungeon.floorLight5,sprites.dungeon.floorLightMoss,sprites.dungeon.floorLight2,sprites.builtin.brick], TileScale.Sixteen);
            case "level0":
            case "level2":return tiles.createTilemap(hex`0a0008000000000000000000000000000001010000000000000000000000000101000000010000000001000100000100000000000001000001000000000000000000000000010100000000000000010101000000`, img`
. . . . . . . . . . 
. . . 2 2 . . . . . 
. . . . . . . 2 2 . 
. . 2 . . . . 2 . 2 
. . 2 . . . . . . 2 
. . 2 . . . . . . . 
. . . . . 2 2 . . . 
. . . . 2 2 2 . . . 
`, [myTiles.transparency16,sprites.builtin.brick], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
