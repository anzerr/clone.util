
### `Intro`
Copy object deep

#### `Install`
``` bash
npm install --save git+http://git@github.com/anzerr/clone.util.git
```

### `example`
``` javascript
const copy = require('clone.util');

console.log(copy({
	cat: 'cat',
	got: ['egg', 'test', {hate: 'egg'}],
	that: {egg: {a: 1}}
}));
```