//NAMED EXPORTS
//export variables
export let baseVariable1 = 100;
export let baseVariable2 = 40;
export let baseVariable3 = 'alias';

let defaultVariable = 'default';
export default defaultVariable = 'default';
//OR
export {defaultVariable as default};

//export functions
const namedExportFunc = (a,b) => a+b; 
export { namedExportFunc};

export function namedExportFunction(a,b){
  return a+b;
}
