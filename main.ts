namespace SpriteKind {
    export const PC_projectile = SpriteKind.create()
}
sprites.onCreated(SpriteKind.Enemy, function (sprite) {
    sprite.startEffect(effects.ashes, 500)
    tiles.placeOnRandomTile(sprite, assets.tile`transparency16`)
    enemy_direction(sprite)
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (direction != -100) {
        mySprite.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . 2 2 2 . . . . . . 
            . . . . . . . 5 5 5 . . . . . . 
            . . . . . . . 5 5 5 . . . . . . 
            . . . . 4 4 . 5 5 5 . 4 4 . . . 
            . . . . d e b 5 5 5 3 e d . . . 
            . . . . 4 e b b b b 3 e 4 . . . 
            . . . . d e b b b 4 3 e d . . . 
            . . . . 4 e b b 4 4 3 e 4 . . . 
            . . . . d e b 4 4 4 3 e d . . . 
            . . . . 4 e 3 3 3 3 3 e 4 . . . 
            . . . . d e 2 2 2 2 2 e d . . . 
            . . . . 4 e . . . . . e 4 . . . 
            . . . . d d . . . . . d d . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
    }
    direction = -100
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Math.abs(direction) < 200) {
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . 5 3 . . . . . . . 
            . . . . . . . 3 5 . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, mySprite, 0, direction)
    } else {
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . 5 3 . . . . . . . 
            . . . . . . . 3 5 . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, mySprite, direction, 0)
    }
})
function enemy_direction (mySprite: Sprite) {
    if (Math.percentChance(50)) {
        if (Math.percentChance(50)) {
            mySprite.setImage(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . 2 2 2 . . . . . . . 
                . . . . . . 3 a 3 . . . . . . . 
                . . . . . . 3 a 3 . . . . . . . 
                . . . 8 8 . 3 a 3 . 8 8 . . . . 
                . . . b b a a a a a b b . . . . 
                . . . 8 8 c a a a c 8 8 . . . . 
                . . . b b c 3 3 3 c b b . . . . 
                . . . 8 8 c 3 3 3 c 8 8 . . . . 
                . . . b b c 3 3 3 c b b . . . . 
                . . . 8 8 c 3 3 3 c 8 8 . . . . 
                . . . b b c c c c c b b . . . . 
                . . . 8 8 . . . . . 8 8 . . . . 
                . . . b b . . . . . b b . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `)
            mySprite.setVelocity(0, randint(10, 30))
            mySprite.image.flipY()
            enemy_directions_list[enemy_sprite_list.indexOf(mySprite)] = 100
        } else {
            mySprite.setImage(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . 2 2 2 . . . . . . . 
                . . . . . . 3 a 3 . . . . . . . 
                . . . . . . 3 a 3 . . . . . . . 
                . . . 8 8 . 3 a 3 . 8 8 . . . . 
                . . . b b a a a a a b b . . . . 
                . . . 8 8 c a a a c 8 8 . . . . 
                . . . b b c 3 3 3 c b b . . . . 
                . . . 8 8 c 3 3 3 c 8 8 . . . . 
                . . . b b c 3 3 3 c b b . . . . 
                . . . 8 8 c 3 3 3 c 8 8 . . . . 
                . . . b b c c c c c b b . . . . 
                . . . 8 8 . . . . . 8 8 . . . . 
                . . . b b . . . . . b b . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `)
            mySprite.setVelocity(0, randint(-30, -10))
            enemy_directions_list[enemy_sprite_list.indexOf(mySprite)] = -100
        }
    } else {
        if (Math.percentChance(50)) {
            mySprite.setImage(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . b 8 b 8 b 8 b 8 b 8 . . . . 
                . . b 8 b 8 b 8 b 8 b 8 . . . . 
                . . . . c c c c c c a . . . . . 
                . . . . c 3 3 3 3 a a 3 3 3 2 . 
                . . . . c 3 3 3 3 a a a a a 2 . 
                . . . . c 3 3 3 3 a a 3 3 3 2 . 
                . . . . c c c c c c a . . . . . 
                . . b 8 b 8 b 8 b 8 b 8 . . . . 
                . . b 8 b 8 b 8 b 8 b 8 . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `)
            mySprite.setVelocity(randint(10, 30), 0)
            enemy_directions_list[enemy_sprite_list.indexOf(mySprite)] = 200
        } else {
            mySprite.setImage(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . b 8 b 8 b 8 b 8 b 8 . . . . 
                . . b 8 b 8 b 8 b 8 b 8 . . . . 
                . . . . c c c c c c a . . . . . 
                . . . . c 3 3 3 3 a a 3 3 3 2 . 
                . . . . c 3 3 3 3 a a a a a 2 . 
                . . . . c 3 3 3 3 a a 3 3 3 2 . 
                . . . . c c c c c c a . . . . . 
                . . b 8 b 8 b 8 b 8 b 8 . . . . 
                . . b 8 b 8 b 8 b 8 b 8 . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `)
            mySprite.image.flipX()
            mySprite.setVelocity(randint(-30, -10), 0)
            enemy_directions_list[enemy_sprite_list.indexOf(mySprite)] = -200
        }
    }
}
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (direction != -200) {
        mySprite.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . d 4 d 4 d 4 d 4 d 4 . . . . 
            . . d e e e e e e e e 4 . . . . 
            . . . . 2 3 b b b b b . . . . . 
            . . . . 2 3 4 b b b 5 5 5 5 2 . 
            . . . . 2 3 4 4 b b 5 5 5 5 2 . 
            . . . . 2 3 4 4 4 b 5 5 5 5 2 . 
            . . . . 2 3 3 3 3 3 3 . . . . . 
            . . d e e e e e e e e 4 . . . . 
            . . d 4 d 4 d 4 d 4 d 4 . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
        mySprite.image.flipX()
    }
    direction = -200
})
scene.onHitWall(SpriteKind.Enemy, function (sprite, location) {
    enemy_direction(sprite)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (direction != 200) {
        mySprite.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . d 4 d 4 d 4 d 4 d 4 . . . . 
            . . d e e e e e e e e 4 . . . . 
            . . . . 2 3 b b b b b . . . . . 
            . . . . 2 3 4 b b b 5 5 5 5 2 . 
            . . . . 2 3 4 4 b b 5 5 5 5 2 . 
            . . . . 2 3 4 4 4 b 5 5 5 5 2 . 
            . . . . 2 3 3 3 3 3 3 . . . . . 
            . . d e e e e e e e e 4 . . . . 
            . . d 4 d 4 d 4 d 4 d 4 . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
    }
    direction = 200
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    if (direction != 100) {
        mySprite.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . 2 2 2 . . . . . . 
            . . . . . . . 5 5 5 . . . . . . 
            . . . . . . . 5 5 5 . . . . . . 
            . . . . 4 4 . 5 5 5 . 4 4 . . . 
            . . . . d e b 5 5 5 3 e d . . . 
            . . . . 4 e b b b b 3 e 4 . . . 
            . . . . d e b b b 4 3 e d . . . 
            . . . . 4 e b b 4 4 3 e 4 . . . 
            . . . . d e b 4 4 4 3 e d . . . 
            . . . . 4 e 3 3 3 3 3 e 4 . . . 
            . . . . d e 2 2 2 2 2 e d . . . 
            . . . . 4 e . . . . . e 4 . . . 
            . . . . d d . . . . . d d . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
        mySprite.image.flipY()
    }
    direction = 100
})
let projectile: Sprite = null
let mySprite: Sprite = null
let direction = 0
let enemy_directions_list: number[] = []
let enemy_sprite_list: Sprite[] = []
tiles.setCurrentTilemap(tilemap`level0`)
enemy_sprite_list = sprites.allOfKind(SpriteKind.Enemy)
enemy_directions_list = []
let spawn_time = 5500
let enemy_count = 3
direction = -100
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . 2 2 2 . . . . . . 
    . . . . . . . 5 5 5 . . . . . . 
    . . . . . . . 5 5 5 . . . . . . 
    . . . . 4 4 . 5 5 5 . 4 4 . . . 
    . . . . d e b 5 5 5 3 e d . . . 
    . . . . 4 e b b b b 3 e 4 . . . 
    . . . . d e b b b 4 3 e d . . . 
    . . . . 4 e b b 4 4 3 e 4 . . . 
    . . . . d e b 4 4 4 3 e d . . . 
    . . . . 4 e 3 3 3 3 3 e 4 . . . 
    . . . . d e 2 2 2 2 2 e d . . . 
    . . . . 4 e . . . . . e 4 . . . 
    . . . . d d . . . . . d d . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
projectile = sprites.createProjectileFromSide(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, 50, 100)
let enemy_projectile = sprites.createProjectileFromSide(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, 50, 100)
game.onUpdateInterval(spawn_time, function () {
    if (enemy_sprite_list.length <= enemy_count) {
        enemy_directions_list.push(200)
        enemy_sprite_list.push(sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . b 8 b 8 b 8 b 8 b 8 . . . . 
            . . b 8 b 8 b 8 b 8 b 8 . . . . 
            . . . . c c c c c c a . . . . . 
            . . . . c 3 3 3 3 a a 3 3 3 2 . 
            . . . . c 3 3 3 3 a a a a a 2 . 
            . . . . c 3 3 3 3 a a 3 3 3 2 . 
            . . . . c c c c c c a . . . . . 
            . . b 8 b 8 b 8 b 8 b 8 . . . . 
            . . b 8 b 8 b 8 b 8 b 8 . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Enemy))
    }
})
forever(function () {
	
})
game.onUpdateInterval(500, function () {
    for (let value of enemy_sprite_list) {
        if (Math.percentChance(30)) {
            if (Math.abs(enemy_directions_list[enemy_sprite_list.indexOf(value)]) < 200) {
                enemy_projectile = sprites.createProjectileFromSprite(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . a a . . . . . . . 
                    . . . . . . . 5 a . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, value, 0, enemy_directions_list[enemy_sprite_list.indexOf(value)])
            } else {
                enemy_projectile = sprites.createProjectileFromSprite(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . a a . . . . . . . 
                    . . . . . . . 5 a . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, value, enemy_directions_list[enemy_sprite_list.indexOf(value)], 0)
            }
        }
    }
})
