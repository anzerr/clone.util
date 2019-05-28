
### `Intro`
Deep Copy of an object with circular breaks

#### `Install`
``` bash
npm install --save git+https://git@github.com/anzerr/clone.util.git
```

### `Example`
``` javascript
const copy = require('clone.util');

console.log(copy({
	cat: 'cat',
	got: ['egg', 'test', {hate: 'egg'}],
	that: {egg: {a: 1}}
}));
```