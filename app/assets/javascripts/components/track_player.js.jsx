var TrackPlayer = React.createClass({	
	play: function () {
		this.props.track.play();
	},
	
	delete: function () {
		ApiUtil.deleteTrack(this.props.track);
	},

  render: function() {

    return (
			
			<div className="track-player">
				{ this.props.track.title }
				<button onClick={ this.delete }>delete track</button>
				<button onClick={ this.play }>play track</button>
			</div>
		
		);
  }
});
