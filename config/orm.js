var connection = require('../config/connection.js');

var orm = {
	select: function (whatToSelect, tableInput) {
		var queryString = 'SELECT ' + whatToSelect + ' FROM ' + tableInput;
		connection.query(queryString, function (err, result) {
			if (err) throw err;
			console.log(result);
		});
	},
};

module.exports = orm;