let button_A_enabled = 0
input.onButtonPressed(Button.A, function () {
    button_A_enabled = 1
    if (button_A_enabled) {
        serial.writeLine("A pressed")
    }
})
basic.forever(function () {
	
})
