function firstNonRepeatedChar(str) {
 // Write your code here
	let freq = {};
	for(i=0; i < str.length; i++){
		let char  = str[i];
		if(freq[char]){
			freq[char] += 1
		} else {
			freq[char] = 1;
		}
	}
	for(i=0; i < srt.lenth; i++){{
		let char = str[i];
		if(freq[char] === 1){
			return char;
		} else [
			return null;
		]
	}
} console.log(firstNonRepeatedChar());
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 

	
