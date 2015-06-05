window.ApiUtil = {
	
	createTrack: function (track) {
		var roll = JSON.stringify(track.roll);
		var title = track.title;
		
		$.ajax({
			url: "/tracks",
			method: "POST",
			data: {roll: roll, title: title},
			success: function (trackData) {
				var track = new Track(trackData.title, trackData.roll, trackData.id);
				
				TrackActions.saveTrack(track);
			}
		});
	},
	
	deleteTrack: function (track) {
		$.ajax({
			url: "/tracks/" + track.id,
			method: "DELETE",
			success: function (track) {
				TrackActions.deleteTrack(track);
			}
		});
	},
	
	fetchTracks: function () {
		$.ajax({
			url: "/tracks",
			method: "GET",
			success: function (tracks) {				
				TrackActions.receiveAll(tracks);
			}
		});
	}
}