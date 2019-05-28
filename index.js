
const Copy = require('./src/copy.js'),
	is = require('type.util');

module.exports = (obj, deep = true, max = 20) => {
	if (obj === null || (!is.array(obj) && !is.object(obj))) {
		return obj;
	}
	if (is.instance(obj, Date)) {
		return new Date(obj.getTime());
	}
	return (new Copy(obj, deep, max)).copy;
};
