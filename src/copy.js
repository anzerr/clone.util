
const is = require('type.util');

class Copy {

	constructor(data, deep = true, max = 20) {
		this._hash = [];
		this._deep = deep;
		this._maxSub = max;
		this.copy = this.canCopy(data) ? this._format(data, 0) : data;
	}

	canCopy(data) {
		return ((is.object(data) || is.array(data)) && data !== null);
	}

	hasObj(data) {
		for (let x in this._hash) {
			if (this._hash[x] === data) {
				return true;
			}
		}
		return false;
	}

	_format(obj, sub) {
		let out = is.array(obj) ? [] : {};
		this._sub += 1;
		if (sub > this._maxSub) {
			return out;
		}

		for (let i in obj) {
			if (obj.hasOwnProperty(i)) {
				if (this.canCopy(obj[i])) {
					if (this.hasObj(obj[i])) {
						out[i] = 'circular';
					} else {
						this._hash.push(obj);
						out[i] = this._format(obj[i], sub + 1);
					}
				} else {
					out[i] = obj[i];
				}
			}
		}
		return out;
	}

}

module.exports = Copy;
