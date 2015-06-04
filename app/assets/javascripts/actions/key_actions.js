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
	},
	
	setKeys: function (keys) {
		AppDispatcher.dispatch({
			actionType: KeyConstants.SET_KEYS,
			keys: keys
		});
	}
};