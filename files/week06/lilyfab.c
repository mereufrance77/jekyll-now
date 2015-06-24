//
// hello.Atmega128.blink.c
//
// test blinking LED
//
// Francesca Mereu
// 05/21/15
//

#include <avr/io.h>
#include <util/delay.h>


#define output(directions,pin) (directions |= pin) // set port direction for output
#define set(port,pin) (port |= pin) // set port pin
#define clear(port,pin) (port &= (~pin)) // clear port pin
#define pin_test(pins,pin) (pins & pin) // test for port pin
#define bit_test(byte,bit) (byte & (1 << bit)) // test for bit set
#define led_delay() _delay_ms(100) // LED delay

#define led_port PORTB
#define led_direction DDRB
#define led_pin (1 << PB1)
//#define button_port PORTB
//#define button_direction DDRB
//#define button_pin (1 << PB2)
//#define button_pins PINB

int main(void) {
   //
   // main
   //
   // set clock divider to /1
   //
   CLKPR = (1 << CLKPCE);
   CLKPR = (0 << CLKPS3) | (0 << CLKPS2) | (0 << CLKPS1) | (0 << CLKPS0);
   //
   // initialize LED pin
   //
   clear(led_port, led_pin);
   output(led_direction, led_pin);
   //set(button_port, button_pin);
   //input(button_direction, button_pin);
   
   //
   // main loop
   //
   while (1) {
	   //if (pin_test(button_pins,button_pin)==0){
	   set(led_port, led_pin);
	   led_delay();
	   clear(led_port, led_pin);
	   led_delay();
    //}
   }
}
