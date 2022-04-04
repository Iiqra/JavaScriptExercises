function reverse_a_string(str)
{
	str = str + "";
	return str.split("").reverse().join("");
}
console.log(reverse_a_string('I love Icecream'));