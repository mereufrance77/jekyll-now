import serial
import time
import multiprocessing

## Change this to match your local settings
SERIAL_PORT = '/dev/tty.usbserial-A702U58D'
#tty.usbserial-A702U1AT'
#SERIAL_PORT = '/dev/ttyUSB0'
SERIAL_BAUDRATE = 9600
debug=0

class SerialProcess(multiprocessing.Process):
 
    def __init__(self, input_queue, output_queue):
        multiprocessing.Process.__init__(self)
        self.input_queue = input_queue
        self.output_queue = output_queue
        self.sp = serial.Serial(SERIAL_PORT, SERIAL_BAUDRATE, timeout=1)
        self.sp.setDTR()
 
    def close(self):
        self.sp.close()
 
    def writeSerial(self, data):
        self.sp.write(data)
        # time.sleep(1)
        
    def readSerial(self):
        byte1=0
        byte2=0
        byte3=0
        byte4=0
        self.sp.flush()
        while 1:
            byte1 = byte2
            byte2 = byte3
            byte3 = byte4
            byte4 = ord(self.sp.read())
            #print byte4
            if ((byte1 == 1) & (byte2 == 2) & (byte3 == 3) & (byte4 == 4)):
                break
        #print 'Found framing'
        sensor1_low = ord(self.sp.read())
        sensor1_hi = ord(self.sp.read())
        sensor2_low = ord(self.sp.read())
        sensor2_hi = ord(self.sp.read())
        return """{"sensor1" : %d, "sensor2": %d}""" % ((256*sensor1_hi)+sensor1_low, (256*sensor2_hi)+sensor2_low) 
        
    def run(self):
 
    	self.sp.flushInput()
 
        while True:
            # look for incoming tornado request
            if not self.input_queue.empty():
                data = self.input_queue.get()
 
                # send it to the serial device
                self.writeSerial(data)
                if debug: 
                    print "writing to serial: " + data
 
            # look for incoming serial data
            if (self.sp.inWaiting() > 0):
            	data = self.readSerial()
                if debug:
                    print "reading from serial: " + data
                # send it back to tornado
            	self.output_queue.put(data)
