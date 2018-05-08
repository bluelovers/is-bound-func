/**
 * Created by user on 2018/5/8/008.
 */

import isBoundFunc from '..';

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
