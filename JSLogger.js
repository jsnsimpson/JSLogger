

/**
 * Logging object to assist with logging. 
 * This object will output in to the console if the console
 * object is available. So if the 
 * developer wants to see any logging, a browser which supports
 * the console object should be used although this object will not interfere
 * with those which don't support console logging.
 * @version 1.0
 * @author Jason Simpson
 * 
 */
var JSLogger = {
		
	logEnabled : false,
	logLevel : "error", //default level is error
	debugAllowed : false,
	infoAllowed : false,
	warnAllowed : false,
	//always allow error logging
	errorAllowed : true,
	
	/**
	 * Sets the log level 
	 */
	setLogLevel : function(lvl) {
		switch(lvl) {
			case "info":
				JSLogger.logLevel = lvl;
				JSLogger.debugAllowed = true;
				JSLogger.infoAllowed = true;
				JSLogger.warnAllowed = true;
				JSLogger.errorAllowed = true;
				break;
			case "debug":
				JSLogger.logLevel = lvl;
				JSLogger.debugAllowed = true;
				JSLogger.infoAllowed = false;
				JSLogger.warnAllowed = true;
				JSLogger.errorAllowed = true;
				break;
			case "warn":
				JSLogger.logLevel = lvl;
				JSLogger.debugAllowed = false;
				JSLogger.infoAllowed = false;
				JSLogger.warnAllowed = true;
				JSLogger.errorAllowed = true;
				break;
			default:
				JSLogger.logLevel = "error";
				JSLogger.debugAllowed = false;
				JSLogger.infoAllowed = false;
				JSLogger.warnAllowed = false;
				JSLogger.errorAllowed = true;
				break;
		}
	},
	
	info : function(msg) {
		if(JSLogger.canLog() && JSLogger.infoAllowed) {
			var date = new Date();
			console.log("<INFO> " + date.toLocaleTimeString() + " - " + msg);
		}
	},	
		
	debug : function(msg) {
		if(JSLogger.canLog() && JSLogger.debugAllowed) {
			var date = new Date();
			console.log("<DEBUG> " + date.toLocaleTimeString() + " - " + msg);
		}
	},

	warn : function(msg) {
		if(JSLogger.canLog() && JSLogger.warnAllowed) {
			var date = new Date();
			console.log("<WARN> " + date.toLocaleTimeString() + " - " + msg);
		}
	},

	
	error : function(msg) {
		if(JSLogger.canLog() && JSLogger.errorAllowed) {
			var date = new Date();
			console.log("<ERROR> " + date.toLocaleTimeString() + " - " + msg);
			if(typeof(console.trace) == "function") {
			  //log the stack trace if this is possible
				console.trace();
			}
		}
	},
	
	/**
	 * Determine if we can log or not
	 */
	canLog : function() {
		if(JSLogger.logEnabled) {
			return true;
		} else if(typeof(console) != "undefined") {
			JSLogger.logEnabled = true
			return true;
		} 
		return false;
	}
		
}
