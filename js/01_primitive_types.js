
// null
// undefined
// boolean
// number
// string
// symbol
// bigint 
// object


const primitive_null = null;
const primitive_undefined = undefined;
const primitive_boolean = true;
const primitive_number = 1; 
const primitive_string = 's';
const primitive_object = {};
const primitive_symbol = Symbol('random');
const primitive_bigint = 100000000000000n;


const list = [];
list['key'] = 'value'
console.log(list.key);

const fn = () => {
};

fn['key'] = 'value';
console.log(fn.key);


