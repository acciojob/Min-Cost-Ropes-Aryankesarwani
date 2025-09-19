function mincost(arr)
{ 
//write your code here
// return the min cost
	if(arr.size() == 1) return arr[0];
	arr=arr.map(Number);
	arr.sort((a,b)=>a-b);
	min=0;
	const ans = arr.forEach(item,i)=>{
		min+=item;
		return min;
	}
	ans.shift();
	return mincost(ans);
  
}

module.exports=mincost;
