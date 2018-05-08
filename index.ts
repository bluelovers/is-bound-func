/**
 * Created by user on 2018/5/8/008.
 */

const SUPPORT_FUNC_NAME = (function r(){}.name == 'r');
const SUPPORT_FUNC_NAME_BOUND = (/^bound\s(?:\S*)$/.test((function r(){}).bind(null).name));

function isBoundFunc<T extends Function>(fn: T, chkLevel = 2)
{
	if (typeof fn != 'function')
	{
		throw new TypeError(`fn not a function`)
	}

	let n = 0;

	let s = Function.prototype.toString.call(fn);

	/**
	 * in node js is didn't have bound
	 * in firefox it has bound
	 */
	let r = /^function(?:\s(bound))?\s\(\)\s+\{\s+\[native code\]/g;

	let m = r.exec(s);

	if (m)
	{
		n++;

		if (m[1] == 'bound')
		{
			n++;
		}
	}

	if (SUPPORT_FUNC_NAME_BOUND && fn.hasOwnProperty('name') && /^(bound\s)+(?:\S*)$/.test(fn.name))
	{
		n++;
	}

	/*
	if (typeof fn.prototype == 'undefined')
	{
		n++;
	}
	*/

	return (n && n >= chkLevel) ? n : null;
}

let _self = isBoundFunc as typeof isBoundFunc & {
	isBoundFunc: typeof isBoundFunc,
	default: typeof isBoundFunc,

	SUPPORT_FUNC_NAME: typeof SUPPORT_FUNC_NAME_BOUND,
	SUPPORT_FUNC_NAME_BOUND: typeof SUPPORT_FUNC_NAME_BOUND,
};

_self.default = _self.isBoundFunc = isBoundFunc;
_self.SUPPORT_FUNC_NAME = SUPPORT_FUNC_NAME;
_self.SUPPORT_FUNC_NAME_BOUND = SUPPORT_FUNC_NAME_BOUND;

_self.isBoundFunc(() => {});

export = _self;

//console.dir(_self);

/**
 * https://stackoverflow.com/questions/35686850/determine-if-a-javascript-function-is-a-bound-function/35687230
 * https://stackoverflow.com/questions/29811479/test-if-variable-is-a-specific-bound-function-in-using-javascripts-function-pro
 *
 * @deprecated don't use
 */
function isBindable<T extends Function>(fn: T)
{
	if (typeof fn != 'function')
	{
		throw new TypeError(`fn not a function`)
	}

	return fn.hasOwnProperty('prototype');
}
