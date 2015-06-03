var Staff = React.createClass({
	
	getInitialState: function () {
		return { notes: [] };
	},

	componentDidMount: function () {
		var component = this;
		
		KeyStore.addChangeListener(function () {
			var notes = this.all();
			
			component.setState({ notes: notes });
		});
		
	},

  render: function() {
		
		var noteStyle = {
			"C4":  {top:  '37px', left:  '60px'},
			"C4S": {top:  '37px', left:  '60px'},
			"D4":  {top:  '27px', left:  '90px'},
			"D4S": {top:  '27px', left:  '90px'},
			"E4":  {top:  '17px', left: '120px'},
			"F4":  {top:   '7px', left: '150px'},
			"F4S": {top:   '7px', left: '150px'},
			"G4":  {top:  '-3px', left: '180px'},
			"G4S": {top:  '-3px', left: '180px'},
			"A4":  {top: '-13px', left: '210px'},
			"A4S": {top: '-13px', left: '210px'},
			"B4":  {top: '-23px', left: '240px'},
			"C5":  {top: '-33px', left: '270px'},
			"C5S": {top: '-33px', left: '270px'},
			"D5":  {top: '-43px', left: '300px'},
			"D5S": {top: '-43px', left: '300px'},
			"E5":  {top: '-53px', left: '330px'},
			"F5":  {top: '-63px', left: '360px'},
		};
		
    return (
			<div className="staff">
				<div className="row"></div>
				<div className="row"></div>
				<div className="row"></div>
				<div className="row"></div>
			
				<img className="clef" src="treble_clef.png" />
				
				{this.state.notes.map(function (note) {
					return <img key={ note } className="note" src="qnote.png" style={ noteStyle[note] } />;
				})}
			</div>
		);
  }
});
