
const copy = require('./index.js');

console.log(copy({
	cat: 'cat',
	got: ['egg', 'test', {hate: 'egg'}],
	that: {egg: {a: 1}}
}));
