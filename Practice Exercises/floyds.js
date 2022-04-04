function floyds(){
  for(let i=0;i<=4;i++)
{
  star = '';
  for(let j= 4;j>=i;j--)
   {
    star += '*'
    }
    console.log(star)
}
}
floyds()

function nestedStairs(step) {
	var stairs = "";

	for (var i = 0; i < step; i++) 
  {
		for (var j = 0; j <= i; j++)
     {
			stairs += " * ";
		}
		console.log(stairs)
  }
}

nestedStairs(10);