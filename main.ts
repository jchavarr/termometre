input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showString("humitat")
})
input.onButtonPressed(Button.A, function () {
    basic.showString("temperatura")
    basic.showString("" + (input.temperature()))
})
input.onButtonPressed(Button.B, function () {
    basic.showString("llum")
    basic.showString("" + (input.lightLevel()))
})
basic.forever(function () {
    basic.showString("Hello!")
})
