controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (cat.vy == 0) {
        cat.vy = -200
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`tile0`, function (sprite, location) {
	
})
let cat: Sprite = null
scene.setBackgroundColor(9)
cat = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . f . . . 
    . . . . . . . . . . . . f f f . 
    . . . . . . . . . . . . f f 5 f 
    f f f f f f f f f f f f f f f f 
    . . . . f f f f f f f f f f . . 
    . . . . f f f f f f f f f . . . 
    . . . . f . f . . . f . f . . . 
    . . . . f . f . . . f . f . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(cat, 100, 0)
tiles.setTilemap(tilemap`level1`)
cat.ay = 350
scene.cameraFollowSprite(cat)
