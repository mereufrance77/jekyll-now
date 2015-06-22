//
//
// hello.array.44.c
//
// Charlieplex LED array hello-world
//
// Neil Gershenfeld
// 11/13/10
//
// (c) Massachusetts Institute of Technology 2010
// This work may be reproduced, modified, distributed,
// performed, and displayed for any purpose. Copyright is
// retained and must be preserved. The work is provided
// as is; no warranty is provided, and users accept all 
// liability.
//

#include <avr/io.h>
#include <util/delay.h>

#define output(directions,pin) (directions |= pin) // set port direction for output
#define input(directions,pin) (directions &= (~pin)) // set port direction for input 
#define set(port,pin) (port |= pin) // set port pin
#define clear(port,pin) (port &= (~pin)) // clear port pin
#define pin_test(pins,pin) (pins & pin) // test for port pin
#define bit_test(byte,bit) (byte & (1 << bit)) // test for bit set

#define led_delay() _delay_ms(1) // LED delay

#define led_port PORTA
#define led_direction DDRA

#define led_port PORTB
#define led_direction DDRB

#define A (1 << PB2) // row 1
#define B (1 << PB0) // row 2
#define C (1 << PA7) // row 3


void flash(uint8_t from, uint8_t to, uint8_t delay) {
   //
   // source from, sink to, flash
   //
   static uint8_t i;
   set(led_port,from);
   clear(led_port,to);
   output(led_direction,from);
   output(led_direction,to);
   for (i = 0; i < delay; ++i)
       led_delay();
   input(led_direction,from);
   input(led_direction,to);
   }

void led_cycle(uint8_t number, uint8_t delay) {
   //
   // cycle through LEDs
   //
   uint8_t i;
   for (i = 0; i < number; ++i) {
      flash(B,A,delay);
      flash(C,A,delay);
	  flash(A,B,delay);
      flash(C,B,delay);
      flash(A,C,delay);
      flash(B,C,delay);
      }
      
      
   }

int main(void) {
   //
   // set clock divider to /1
   //
   CLKPR = (1 << CLKPCE);
   CLKPR = (0 << CLKPS3) | (0 << CLKPS2) | (0 << CLKPS1) | (0 << CLKPS0);
   //
   // main loop
   //
   while (1) {
      led_cycle(1,100);
      led_cycle(3,20);
      led_cycle(100,1);
      }
   }
