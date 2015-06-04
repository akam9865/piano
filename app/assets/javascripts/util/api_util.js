window.ApiUtil = {
	
	createTrack: function (track) {
		var roll = JSON.stringify(track.roll);
		var title = track.title;
		
		$.ajax({
			url: "/tracks",
			method: "POST",
			data: {roll: roll, title: title},
			success: function (trackData) {
				var track = new Track(trackData.title, trackData.roll);
				console.log(track);
				
				TrackActions.saveTrack(track);
			}
		});
		
	},
	
	fetchTracks: function () {
		
		$.ajax({
			url: "/tracks",
			method: "GET",
			success: function (tracks) {
				console.log(tracks);
				
				TrackActions.receiveAll(tracks);
			}
		});
	}
}