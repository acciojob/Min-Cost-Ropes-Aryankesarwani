function mincost(arr)
{ 
//write your code here
// return the min cost
	arr=arr.map(Number);
	arr.sort((a,b)=>a-b);
	let totalcost=0;
	while(arr.length>1){
		let first = arr.shift();
		let second = arr.shift();
		totalcost+=first+second;
		arr.push(first+second);
		arr.sort((a,b)=>a-b);
	}
	
	return toralcost;
  
}

module.exports=mincost;
