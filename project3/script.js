const testString = "The quick brown fox jumps over the lazy dog";
const testString2 = "Sphinx of black quartz, judge my vow";
let testString3 = "Hello World";
console.log(testString.length);
const slice13to30 = testString.slice(13,30);
console.log({slice13to30});
const sliceNegs = testString.slice(-6, -3);
console.log({sliceNegs});
const slice15 = testString.slice(15);
console.log({slice15});
const sliceNeg15 = testString.slice(-15);
console.log({sliceNeg15});

//substr is deprecated
const replace = testString.replace("fox", "cat"); //replace can take regular expressions
console.log({replace});
console.log(testString.toUpperCase());
console.log(testString.toLocaleLowerCase());
console.log({testString2});
console.log(testString.concat(". ", testString2));
console.log(typeof testString3);
//padEnd and padStart pad the string till it hits a certain length
testString3 = testString3.padEnd(testString3.length + 10, ".");
console.log(testString3);
testString3 = testString3.padStart(testString3.length + 10, ".");
console.log(testString3);
console.log(`Character at 5 in first string, where counting starts at 0 is ${testString.charAt(5)}`);
console.log(`The UTF-16 code for that character is ${testString.charCodeAt(5)}`);
console.log(`Does ${testString} end with vow? `);
console.log(testString.endsWith("vow"));
console.log(`Does ${testString} end with dog? `);
console.log(testString.endsWith("dog"));
console.log(`testString.includes("black"): ${testString.includes("black")}`);
console.log(`testString.includes("brown"): ${testString.includes("brown")}`);
console.log(`testString.toLowerCase().indexOf("the"): ${testString.toLowerCase().indexOf("the")}`);
console.log(`testString.toLowerCase().indexOf("the", 2): ${testString.toLowerCase().indexOf("the", 2)}`);