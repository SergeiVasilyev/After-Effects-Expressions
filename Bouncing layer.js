// Add animation keys into layer property
// Add expression into selected property

delay = effect("Delay")("Slider"); // 0.05
amp = effect("Amplifier")("Slider") / 2.5; // 5
freq = effect("Frequency")("Slider") / 20; // 50
decay = effect("Decay")("Slider") / 20; // 90

n = 0; 
time_max = 50; 
if (numKeys > 0) { 
	n = nearestKey(time).index; 
	if (key(n).time > time){ 
		n--; 
	}
} 
if (n == 0) { 
	t = 0; 
} else { 
	t = time - key(n).time - delay; 
} 
if (n > 0 && t < time_max){ 
	v = velocityAtTime(key(n).time - thisComp.frameDuration/10); 
	value + v / 100 * amp*Math.sin(freq*t*2*Math.PI)/Math.exp(decay*t); 
} else {
	value
}
