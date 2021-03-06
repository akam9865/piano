var Jukebox = React.createClass({
	getInitialState: function () {
		return {tracks: []};
	},

	componentDidMount: function () {
		TrackStore.addChangeListener(this.setTracks);
		ApiUtil.fetchTracks();
	},
	
	setTracks: function () {
		this.setState({tracks: TrackStore.all()});
	},

  render: function() {
    return (
		
			<div className="jukebox">
			
				{this.state.tracks.map(function (track) {
					return <TrackPlayer key={ track.id } track={ track } />	
				})}
				
			</div>
		
		);
  }
});
