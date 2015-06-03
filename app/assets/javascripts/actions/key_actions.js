window.KeyActions = {
	pressKey: function (key) {
    AppDispatcher.dispatch({
      actionType: KeyConstants.PRESS_KEY,
      key: key
    });
	},
	
	releaseKey: function (key) {
		AppDispatcher.dispatch({
			actionType: KeyConstants.RELEASE_KEY,
			key: key
		});
	}
}