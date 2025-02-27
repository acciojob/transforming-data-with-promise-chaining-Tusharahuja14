//your JS code here. If required.

let input=document.getElementById("ip");
let output=document.getElementById("output");
function display()
{
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
			value=input.value;
            output.innerText=`Result:${value}`
			
			resolve(value)
		},2000)
	})
}
function Multiply(value)
{
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
			value=value*2;
			  output.innerText=`Result:${value}`;
			resolve(value);
		},2000)
	})
}
function Subtract(value)
{
	return new Promise((resolve,reject)=>{
	setTimeout(()=>{
		value=value-3
		  output.innerText=`Result:${value}`
		resolve(value);
	},1000);});
}
function Divide(value)
{
	return new Promise((resolve,reject)=>{
	setTimeout(()=>{
		value=value/2;
		  output.innerText=`Result:${value}`
		resolve(value);
	},1000)});
}
function result(value)
{return new Promise((resolve,reject)=>{
	setTimeout(()=>{
		  output.innerText=`Final Result: ${value}`
		resolve(value)
	},1000)
});}
document.getElementById("btn").addEventListener("click", () => {
  display()
    .then((value) => Multiply(value))
    .then((value) => Subtract(value))
    .then((value) => Divide(value))
    .then((value) => result(value))
    .catch((err) => {
      output.innerText = `Error: ${err}`;
    });
});
