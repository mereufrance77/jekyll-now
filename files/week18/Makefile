PROJECT=press
SOURCES=$(PROJECT).c
MMCU=attiny44
F_CPU = 8000000

CFLAGS=-mmcu=$(MMCU) -Wall -Os -DF_CPU=$(F_CPU)

$(PROJECT).hex: $(PROJECT).out
	avr-objcopy -O ihex $(PROJECT).out $(PROJECT).c.hex;\
	avr-size --mcu=$(MMCU) --format=avr $(PROJECT).out
 
$(PROJECT).out: $(SOURCES)
	avr-gcc $(CFLAGS) -I./ -o $(PROJECT).out $(SOURCES)
 

program-usbtiny: $(PROJECT).hex
	avrdude -p $(MMCU) -P usb -c usbtiny -U flash:w:$(PROJECT).c.hex

program-usbtiny-fuses: $(PROJECT).hex
	avrdude -p $(MMCU) -P usb -c usbtiny -U lfuse:w:0x56:m
	avrdude -p $(MMCU) -P usb -c usbtiny -U hfuse:w:0xD9:m
	avrdude -p $(MMCU) -P usb -c usbtiny -U efuse:w:0x07:m

