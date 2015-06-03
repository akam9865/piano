var Key = React.createClass({
	getInitialState: function () {
		return { pressed: false };
	},

	componentDidMount: function () {
		this.key = this.props.noteName;
		var freq = Tones[this.key];
		this.note = new Note(freq);
		
		KeyStore.addChangeListener(this._onChange)
	},
	
	_onChange: function () {		
		if (KeyStore.hasKey(this.key)) {
			this.note.start();
			this.setState({ pressed: true });
		} else {
			this.note.stop();
			this.setState({ pressed: false });
		}
	},
	
	play: function () {
		this.note.start()
		this.setState({ pressed: true });
	},
	
	stop: function () {
		this.note.stop();
		this.setState({ pressed: false });
	},

  render: function() {
		var classString = "key " + this.props.color;
		if (this.state.pressed) classString += " pressed";
		
    return (
			<div onMouseUp={ this.stop } onMouseDown={ this.play } className={ classString }>
				<div className="bottom" />
			</div>
		);
  }
});
