(function (root) {
	
	var _tracks = [];
	
	var addTrack = function (track) {
		_tracks.push(track);
	};
	
	var setTracks = function (tracks) {
		_tracks = tracks;
	};
	
	var removeTrack = function (track) {
		_tracks.splice(_tracks.indexOf(track), 1);
	};
	
	root.TrackStore = $.extend({}, EventEmitter.prototype, {
		addChangeListener: function (callback) {
			this.on("CHANGE", callback)
		},
		
		all: function () {
			return _tracks.slice(0);
		},
		
		dispatcherID: AppDispatcher.register(function (payload) {
			switch (payload.actionType) {
				case TrackConstants.SAVE_TRACK:
					addTrack(payload.track);

					TrackStore.emit("CHANGE");
					break;
				
				case TrackConstants.DELETE_TRACK:
					removeTrack(payload.track);
					
					TrackStore.emit("CHANGE");
					break;
					
				case TrackConstants.TRACKS_RECEIVED:
					setTracks(payload.tracks);
					
					TrackStore.emit("CHANGE");
					break;
			};
		})
	});
})(this);