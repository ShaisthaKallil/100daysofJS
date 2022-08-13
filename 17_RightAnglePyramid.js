//
// --- Examples
//   steps(2)
//       '1 '
//       '12'
//   steps(3)
//       '1  '
//       '12 '
//       '123'

function steps() {
  let output = '';
  let  n = 2;
	for(let i=1; i<=n; i++){
   for(let j=1; j<=i;j++){
  	output += j + ' ';
    }
    console.log(output);
    output = '';
  }
}

steps();
