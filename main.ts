input.onButtonPressed(Button.A, function () {
    radio.sendString(poopEmoji)
})
input.onButtonPressed(Button.AB, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == poopEmoji) {
        basic.showLeds(`
            . . . . .
            . # . . .
            . . # . .
            . # . # .
            # # # # #
            `)
    }
    if (receivedString == animatePoopEmoji) {
        for (let index = 0; index < 1000000000; index++) {
            basic.showLeds(`
                # . . . .
                . . . # .
                . . # . .
                . # . # .
                # # # # #
                `)
            basic.pause(100)
            basic.showLeds(`
                . . . . #
                . # . . .
                . . # . .
                . # . # .
                # # # # #
                `)
            basic.pause(100)
        }
    }
})
input.onButtonPressed(Button.B, function () {
    radio.sendString(animatePoopEmoji)
})
let animatePoopEmoji = ""
let poopEmoji = ""
poopEmoji = "poopEmoji"
animatePoopEmoji = "animatePoopEmoji"
radio.setGroup(77)
