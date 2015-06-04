var Recorder = React.createClass({
	
	componentDidMount: function () {
		this.track = new Track('track');
		
		KeyStore.addChangeListener(this.recordNotes);
	},
	
	record: function () {
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
		this.roll = this.track.stop()
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
			</div>
		
		);
  }
});
