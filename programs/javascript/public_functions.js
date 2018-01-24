/*
 *
 *  Require ES6 (ES 2015)
 *
 *
 *  Copyright  Paul-Louis Mas 2017
 *
 */

/*
 *
 * Description: This file contain some customs-made functions that I often use, you can use them freely but you need to contact me before if it requires any commercial use.
 *
 * Comment: some functions require others implemented in this file to work properly and so, a total implementation of the file is required.
 *
 */

// Extended length method: allows to provide numbers
const length = e => ((typeof(e) == "number") ? e.toString() : e).length;

// Extended typeof method: allows to differentiate arrays from objects
const typeofx = l => (l).constructor.toString().replace(/(\{[\w\s\[\]]*\})|(function)|([^\w])/g, "").toLowerCase();

// Extended reverse method: allows to provide strings and booleans
const reverse = e => (typeofx(e) == "object") ? e.reverse() : ((typeofx(e) == "string") ? e.split("").reverse().join("") : ((typeofx(e) == "boolean") ? !e : null));

// Basic implementation of a shuffle method: allows to shuffle characters in string and elements in array
const shuffle = e => {
	let a = [], i, s = ((typeofx(e) == "string") ? e.split("") : e);
	while (a.length < s.length) (i => ((s[i] != undefined) ? (a.push(s[i]), s[i] = undefined) : null))(Math.floor((Math.random() * s.length)));
	return ((typeofx(e) == "string") ? a.join("") : a);
};

// Extented minimum of array elements implementation
const min = a => Math.min(...a);

// Extented maximum of array elements implementation
const max = a => Math.max(...a);

// Basic implementation of the sum of array elements
const sum = a => a.reduce((b, c) => b + c, 0);

// Basic implementation of the average value of array elements
const average = a => a.reduce((b, c) => b + c, 0) / a.length;

// Function to convert JSON formated CSS into HTML formated CSS
/*
	The JSON formated CSS must be in the following format:
		[
			{
				'element1': [
					{ 'props1': 'value1' }, 
					{ 'props2': 'value2' }, 
					..., 
					{ 'propsN': 'valueN' }
				]
			}, 
			{
				'element2': [
					{ 'props1': 'value1' }, 
					{ 'props2': 'value2' }, 
					..., 
					{ 'propsN': 'valueN' }
				]
			}, 
			...
		]
	
	The HTML formated CSS will be in this format:
		element1 {
			props1: value1;
			props2: value2;
			...
			propsN: valueN;
		}
		element2 {
			props1: value1;
			props2: value2;
			...
			propsN: valueN;
		}
*/
const JSONformatedCSStoHTMLformatedCSS = a => a.map(b => Object.keys(b).map(e => e + ' {\n' + b[e].map(c => Object.keys(c).map(d => d + ': ' + c[d] + ';')).join('\n') + '\n}')).join('\n')
