(function () {
	
	window.Track = function (title, roll) {
		this.title = title;
		this.roll = roll || [];
	};
	
	Track.prototype = {
		record: function () {
			this.roll = [];
			this.startTime = Date.now();
		},
		
		stop: function () {
			this.roll = [];
		},
		
		play: function () {
			var playing = [];
			var step = 0;
			var rollIndex = 0;
			var roll = this.roll;

			var interval = setInterval(function () {
				var time = step * 10;
				
				if (roll[rollIndex].time < time) {
					KeyActions.setKeys(roll[rollIndex].notes);
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
			this.roll.push({ notes: notes, time: time });
			// REFACTOR: have the integer time point to notes;
		}
		
	};	
})();