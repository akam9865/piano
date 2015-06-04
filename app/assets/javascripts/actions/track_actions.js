window.TrackActions = {
	saveTrack: function (track) {
    AppDispatcher.dispatch({
      actionType: TrackConstants.SAVE_TRACK,
      track: track
    });
	},
	
	deleteTrack: function (track) {
		AppDispatcher.dispatch({
			actionType: TrackConstants.DELETE_TRACK,
			track: track
		})
	},
	
	receiveAll: function (tracks) {
		AppDispatcher.dispatch({
			actionType: TrackConstants.TRACKS_RECEIVED,
			tracks: tracks.map(function (track) { return new Track(track.title, track.roll ); } )
		});
	}
}