function indexOfIgnoreCase(s1, s2) {
  // write your code here
	// Check for empty strings
  if (s1 === '' || s2 === '') {
    return -1;
  }

  // Convert both strings to lowercase for case-insensitive comparison
  const lowerStr = s1.toLowerCase();
  const lowerSubStr = s2.toLowerCase();

  // Find the index of the substring
  const index = lowerStr.indexOf(lowerSubStr);

  return index;
	
}

// Please do not change the code below
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));
