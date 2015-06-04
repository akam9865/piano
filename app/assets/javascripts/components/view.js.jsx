var View = React.createClass({

  render: function() {
    return (
			<div>
				<div className="view">
				
					<Organ />
					<Staff />
				</div>
				<Recorder />
				<Jukebox />
			</div>
		);
  }
});
