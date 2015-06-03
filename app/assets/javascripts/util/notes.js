(function () {
	
	var ctx = new (window.AudioContext || window.webkitAudioContext)();
	
  var createOscillator = function (freq) {
    var osc = ctx.createOscillator();
    osc.frequency.value = freq;
    osc.detune.value = 0;
    osc.type = "sine";
		
    osc.start(ctx.currentTime);
    return osc;
  };
	
  var createGainNode = function(){
    var gainNode = ctx.createGain();
    gainNode.gain.value = 0;
    gainNode.connect(ctx.destination);
		
    return gainNode;
  };

	window.Note = function (freq) {
		this.freq = freq;
		this.oscNode  = createOscillator(freq);
		this.gainNode = createGainNode();
		
		this.oscNode.connect(this.gainNode);
	};
	

	Note.prototype = {
		start: function () {
			this.gainNode.gain.value = 0.3;
		},
		
		stop: function () {
			this.gainNode.gain.value = 0;
		}
	};
})();