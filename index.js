/* Ansewrs */

let age =15;
if(age>=18){
  console.log("Gaari Waa waa wadi kartaa")
}else{
  console.log("Gaari mawadi kartid")
}


let num1 =5;
let num2 =8;
let sum=num1+2;
console.log(sum)


const num=1999
console.log(typeof(num))

let num =10;
if(num%2){
	console.log("odd")
}else{
	console.log("even")
}

let i=0;
for(i=0; i<=100; i++){
	console.log(i)
}
let num=21%5;
console.log(num)

funcation getcount(str){
	let vowelscount=0;
	const vowels = ['a', 'e', 'e' ,'o', 'u'];
	const strArr = str.split('');
	strArr.forEach(el)=>{
		for(i=0 < vowels.length -1; i++)
			if(el===vowels[i]){
				vowelscount++
			}
	}
	
	return vowelscount;
}