(function () {
	
	window.Track = function (name, roll) {
		this.name = name;
		this.roll = roll || [];
	};
	
	Track.prototype = {
		
		record: function () {
			this.roll = [];
			this.startTime = Date.now();
		},
		
		stop: function () {
			return this.roll;
		},
		
		play: function () {
			var playing = [];
			var step = 0;
			var rollIndex = 0;
			var roll = this.roll;
			
			var interval = setInterval(function () {
				var time = step * 10;
				
				if (roll[rollIndex].time < time) {
					playing.diff(roll[rollIndex].notes).forEach(function (note) { note.stop(); });
					roll[rollIndex].notes.diff(playing).forEach(function (note) { note.start(); });
					
					playing = roll[rollIndex].notes;
					rollIndex++;
				}
				
				if (rollIndex === roll.length) {
					clearInterval(interval)
				};
				
				step++;
			}, 10);
		},

		
		addNotes: function (notes) {
			var time = Date.now() - this.startTime;

			notes = notes.map(function (note) { return new Note(Tones[note]); })
			this.roll.push({ notes: notes, time: time });
		}
		
	};
	
	Array.prototype.diff = function (arr) {
		return this.filter(function (i) { return arr.indexOf(i) < 0; })
	};
	
})();