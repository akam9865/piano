var Jukebox = React.createClass({
	getInitialState: function () {
		return {tracks: []};
	},
	
	componentDidMount: function () {
		TrackStore.addChangeListener(this.setTracks);
	},
	
	setTracks: function () {
		this.setState({tracks: TrackStore.all()});
	},

  render: function() {
    return (
		
			<div className="jukebox">
				{this.state.tracks.map(function (track, id) {

					return <TrackPlayer key={id} track={ track } />
					
				})}
			</div>
		
		);
  }
});
