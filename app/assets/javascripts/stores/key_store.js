(function (root) {
	
	var _keys = [];
	
	var addKey = function (key) {
		_keys.push(key);
	};
	
	var removeKey = function (key) {
		_keys.splice(_keys.indexOf(key), 1);
	};
	
	var setKeys = function (keys) {
		_keys = keys;
	};
	
	root.KeyStore = $.extend({}, EventEmitter.prototype, {
		
		addChangeListener: function (callback) {
			this.on("CHANGE", callback)
		},
		
		hasKey: function (key) {
			return _keys.indexOf(key) > -1;
		},
		
		all: function () {
			return _keys.slice(0);
		},
		
		dispatcherID: AppDispatcher.register(function (payload) {
			switch (payload.actionType) {
				case KeyConstants.PRESS_KEY:
					addKey(payload.key);

					KeyStore.emit("CHANGE");
					break;
					
				case KeyConstants.RELEASE_KEY:
					removeKey(payload.key);
					KeyStore.emit("CHANGE");
					break;
					
				case KeyConstants.SET_KEYS:
					setKeys(payload.keys);
					KeyStore.emit("CHANGE");
					break;
			};
		})
	});
	
	KeyStore.setMaxListeners(30);
})(this);