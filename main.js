const reverseStringFunctions = []

reverseStringFunctions.push((s) => {
        if (!s) return "";
        let res = "";
	for (c of s) res = c + res;
	return res;
});

reverseStringFunctions.push((s) => {
        if (!s) return "";
        const arr = Array(s.length);
	for (i in s) arr[s.length - i - 1] = s[i];
	return arr.join("");
});

reverseStringFunctions.push((s) => {
        if (!s) return "";
        return Array.from(s).reverse().join("");
});

reverseStringFunctions.push((s) => {
        if (!s) return "";
        return s.split("").reverse().join("");
});

reverseStringFunctions.push((s) => {
        if (!s) return "";
	const res = Array(s.length);
        for(let i = 0; i < s.length; ++i) {
		res[s.length - i - 1] = s[i];
	}
	return res.join("");
});

let testsPassed = true;
for (i in  reverseStringFunctions) {
	let reverseString = reverseStringFunctions[i];
	testsPassed = testsPassed && (reverseString("abc") === "cba");
	if (!testsPassed) {
		console.log(`Tests failed for function ${i}`);
	}
}

if (testsPassed) {
	console.log("Tests passed!");
} else console.log("Tests failed!");
