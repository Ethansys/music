input.onPinPressed(TouchPin.P0, function () {
    basic.showLeds(`
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        . . . . .
        `)
    music.play(music.stringPlayable("C5 A B G A F C E ", 120), music.PlaybackMode.UntilDone)
    music.play(music.stringPlayable("B B A D E A D C5 ", 120), music.PlaybackMode.UntilDone)
    music.play(music.stringPlayable("A F E F D G E F ", 120), music.PlaybackMode.UntilDone)
})
input.onButtonPressed(Button.A, function () {
    music.play(music.stringPlayable("C5 B A C5 A G B C5 ", 120), music.PlaybackMode.UntilDone)
})
input.onPinPressed(TouchPin.P2, function () {
    basic.showIcon(IconNames.Heart)
})
input.onPinPressed(TouchPin.P1, function () {
    music.play(music.stringPlayable("G B A G C5 B A B ", 120), music.PlaybackMode.UntilDone)
})
basic.forever(function () {
	
})
