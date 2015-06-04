var Recorder = React.createClass({
	mixins: [React.addons.LinkedStateMixin],
	
	componentDidMount: function () {
		this.track = new Track('track');
		
		KeyStore.addChangeListener(this.recordNotes);
	},
	
	getInitialState: function () {
		return { title: "track" };
	},
	
	record: function () {
		// KeyStore.addChangeListener(this.recordNotes);
		this.recording = true;
		this.track.record();
	},
	
	recordNotes: function () {
		if (this.recording) {
			var notes = KeyStore.all();
			this.track.addNotes(notes);			
		}
	},
	
	save: function () {
		// this.roll = this.track.stop()
		var track = new Track(this.state.title, this.track.roll);
		
		ApiUtil.createTrack(track);
		this.track.stop();
		this.recording = false;
	},

	playback: function () {
		this.track.play();
	},

  render: function() {
    return (
		
			<div className="record">
				<button onClick={ this.record }>record</button>
				<button onClick={ this.save }>save</button>
				<button onClick={ this.playback }>play</button>
				<input type="text" valueLink={ this.linkState('title') } />
			</div>
		
		);
  }
});
