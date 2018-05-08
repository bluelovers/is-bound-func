# is-bound-func

    Check if given function is bound or not.

> npm install is-bound-func

## demo

```ts
const isBoundFunc = require('is-bound-func')
import isBoundFunc from 'is-bound-func';
import * as isBoundFunc from 'is-bound-func';
```

[demo.ts](test/demo.ts)

```ts
[
	() => {},
	function (){},
	function a(){},
	parseInt,
	parseInt.bind(null),
].forEach(fn =>
{
	// when fn not bound will return null, else will return a number

	console.dir({
		name: fn.name,
		fn,
	});
	console.dir([isBoundFunc(fn), isBoundFunc(fn.bind(null))]);
});
```

### output

```
{ name: '', fn: [Function] }
[ null, 2 ]
{ name: '', fn: [Function] }
[ null, 2 ]
{ name: 'a', fn: [Function: a] }
[ null, 2 ]
{ name: 'parseInt', fn: [Function: parseInt] }
[ null, 2 ]
{ name: 'bound parseInt', fn: [Function: bound parseInt] }
[ 2, 2 ]
```
