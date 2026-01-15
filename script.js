/**
 * Homework: 100 JavaScript Coding Challenges
 * IT Guy: Ayman Mustafa Mahdi
 * Description: Logic and solutions for 100 JS problems for homework submission.
 * All logs are commented out to focus on function logic.
 */


//1- Function that result in the sum of 2 numbers
function sum(a, b) {
    return a + b; 
}
console.log("Q1:", sum(10, 20));


//2- Function that result in the multiplication of 2 numbers
function multiply(a, b) {
    return a * b;
}
console.log("Q2:", multiply(5, 4));

//3- Function that checks if a number is even 
function isEven(n) {
    return n % 2 === 0;
}
console.log("Q3:", isEven(4));

//4- Function that checks if a number is odd
function isOdd(n) {
    return n % 3 === 0;
}
console.log("Q4:", isOdd(10));

//Function that converts years to days (assuming 365 days per year)
function yearsToDays(years) {
    return years * 365;
}
console.log("Q5:", yearsToDays(2));

//Function that takes an age and returns "Adult" if it is 18 or older, otherwise "Minor"
function checkAge(age) {
    return age >= 18 ? "Adult" : "Minor";
}
console.log("Q6:", checkAge(12));

//Function that returns the absolute value of a number
function getAbs(n) {
    return Math.abs(n);
}
console.log("Q7:", getAbs(-10));

//Function that converts hours to seconds
function hoursToSeconds(hours) {
    return hours*60*60;
}
console.log("Q8:", hoursToSeconds(3)); 

//Function that calculates the area of a triangle (Base X Height/2)
function triangleArea(base, height) {
    return (base * height) / 2;
}
console.log("Q9:", triangleArea(10, 15)); 

//Function that returns the remainder of the division of two numbers
function remainder(a, b) {
    return a % b;
}
console.log("Q10:", remainder(15, 2))

//Function that checks if a number is divisible by 10
function isDivisibleByTen(n) {
    return n % 10 === 0;
}
console.log("Q11:", isDivisibleByTen(50));

//Function that returns the cube of a number (n^3)
function cube(n) {
    return n ** 3;
}
console.log("Q12:", cube(3));

//Function that takes a name and returns a greeting "Hello {name}"
function greet(name) {
    return `Hello ${name}`;
}
console.log("Q13:", greet("Ayman"));

//Function that checks if a string is empty
function isEmpty(str) {
    return str === "";
}
console.log("Q14:", isEmpty(""));

//Function that returns the length of a string
function strLength(str) {
    return str.length;
}
console.log("Q15:", strLength("JavaScript"));

//Function that compares two strings and returns true if they match
function compareStrings(str1, str2) {
    return str1 === str2;
}
console.log("Q16:", compareStrings("Hussien", "Hussein"));

//Function that returns the smaller of two numbers
function getMin(a, b) {
    return Math.min(a, b);
}
console.log("Q17:", getMin(10, 5));

//Function that returns the larger of two numbers
function getMax(a, b) {
    return Math.max(a, b);
}
console.log("Q18:", getMax(10, 5));

//Function that converts kilometers to meters
function kmToMeters(km) {
    return km * 1000;
}
console.log("Q19:", kmToMeters(5));

//Function that converts Celsius to Fahrenheit
function celsiusToFahrenheit(c) {
    return (c * 9/5) + 32;
}
console.log("Q20:", celsiusToFahrenheit(0));

//Function that returns the first element of an array
function getFirstElement(arr) {
    return arr[0];
}
console.log("Q21:", getFirstElement([10, 20, 30]));

//Function that returns the last element of an array
function getLastElement(arr) {
    return arr[arr.length - 1];
}
console.log("Q22:", getLastElement([10, 20, 30]));

//Function that returns the sum of all numbers in an array
function sumArray(arr) {
    return arr.reduce((total, num) => total + num, 0);
}
console.log("Q23:", sumArray([1, 2, 3, 4]));

//Function that returns the average of numbers in an array
function averageArray(arr) {
    if (arr.length === 0) return 0;
    return sumArray(arr) / arr.length;
}
console.log("Q24:", averageArray([10, 20, 30]));

//Function that searches for an element in an array and returns true if found
function findElement(arr, elem) {
    return arr.includes(elem);
}
console.log("Q25:", findElement([1, 2, 3], 2));

//Function that returns a new array containing only even numbers
function filterEvens(arr) {
    return arr.filter(n => n % 2 === 0);
}
console.log("Q26:", filterEvens([1, 2, 3, 4, 5, 6]));

//Function that reverses the order of an array
function reverseArray(arr) {
    return [...arr].reverse();
}
console.log("Q27:", reverseArray([1, 2, 3]));

//Function that reverses a string
function reverseString(str) {
    return str.split("").reverse().join("");
}
console.log("Q28:", reverseString("hello"));

//Function that converts all characters in a string to Uppercase
function toUpper(str) {
    return str.toUpperCase();
}
console.log("Q29:", toUpper("hello"));

//Function that removes whitespace from the start and end of a string
function trimString(str) {
    return str.trim();
}
console.log("Q30:", trimString("   hello   "));

//Function that merges two arrays into one single array
function mergeArrays(arr1, arr2) {
    return arr1.concat(arr2);
}
console.log("Q31:", mergeArrays([1, 2], [3, 4]));

//Function that returns the largest number in an array
function findMax(arr) {
    return Math.max(...arr);
}
console.log("Q32:", findMax([5, 20, 15]));

//Function that returns the smallest number in an array
function findMin(arr) {
    return Math.min(...arr);
}
console.log("Q33:", findMin([5, 20, 15]));

//Function that counts how many times a specific character appears in a string
function countChar(str, char) {
    return str.split(char).length - 1;
}
console.log("Q34:", countChar("apple", "p"));

//Function that splits a string into an array of words
function splitToWords(str) {
    return str.split(" ");
}
console.log("Q35:", splitToWords("Hello JavaScript World"));

//Function that checks if an array contains at least one negative number
function hasNegative(arr) {
    return arr.some(n => n < 0);
}
console.log("Q36:", hasNegative([1, -5, 3]));

//Function that returns an array of word lengths from an array of strings
function wordsLengths(arr) {
    return arr.map(word => word.length);
}
console.log("Q37:", wordsLengths(["apple", "pie", "banana"]));

//Function that converts an array of numbers into an array of strings
function numsToStrings(arr) {
    return arr.map(String);
}
console.log("Q38:", numsToStrings([10, 20, 30]));

//Function that returns a string repeated n times
function repeatStr(str, n) {
    return str.repeat(n);
}
console.log("Q39:", repeatStr("JS", 3));

//Function that removes the last element and returns a new array
function removeLast(arr) {
    return arr.slice(0, -1);
}
console.log("Q40:", removeLast([1, 2, 3, 4]));

//Function that calculates the factorial of a number (e.g., 5! = 120)
function factorial(n) {
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
}
console.log("Q41:", factorial(5));

//Function that generates a random number between 1 and 10
function randomTen() {
    return Math.floor(Math.random() * 10) + 1;
}
console.log("Q42:", randomTen());

//Function that checks if a string ends with a specific character
function endsWith(str, char) {
    return str.endsWith(char);
}
console.log("Q43:", endsWith("JavaScript", "t"));

//Function that counts vowels (a, e, i, o, u) in a string
function countVowels(str) {
    const vowels = str.match(/[aeiou]/gi);
    return vowels ? vowels.length : 0;
}
console.log("Q44:", countVowels("Hello World"));

//Function that removes duplicate elements from an array
function removeDuplicates(arr) {
    return [...new Set(arr)];
}
console.log("Q45:", removeDuplicates([1, 2, 2, 3, 4, 4]));

//Function that sorts an array in ascending order
function sortAsc(arr) {
    return [...arr].sort((a, b) => a - b);
}
console.log("Q46:", sortAsc([10, 2, 30, 5]));

//Function that sorts an array in descending order
function sortDesc(arr) {
    return [...arr].sort((a, b) => b - a);
}
console.log("Q47:", sortDesc([10, 2, 30, 5]));

//Function that checks if a string is a Palindrome (reads same backward as forward)
function isPalindrome(str) {
    const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");
    return cleanStr === cleanStr.split("").reverse().join("");
}
console.log("Q48:", isPalindrome("Racecar"));

//Function that capitalizes the first letter of every word in a sentence
function capitalizeWords(str) {
    return str.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
}
console.log("Q49:", capitalizeWords("hello from javascript"));

//Function that returns the common elements (intersection) between two arrays
function getIntersection(arr1, arr2) {
    return arr1.filter(item => arr2.includes(item));
}
console.log("Q50:", getIntersection([1, 2, 3], [2, 3, 4]));

//Function that converts a decimal number to Binary
function decimalToBinary(n) {
    return n.toString(2);
}
console.log("Q51:", decimalToBinary(10));

//Function that counts the number of words in a sentence
function wordCount(str) {
    return str.trim().split(/\s+/).length;
}
console.log("Q52:", wordCount("Coding is fun"));

//Function that replaces a specific word with another word in a string
function replaceWord(str, oldW, newW) {
    return str.split(oldW).join(newW);
}
console.log("Q53:", replaceWord("I like Java", "Java", "JavaScript"));

//Function that checks if a number is a Prime Number
function isPrime(n) {
    if (n <= 1) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}
console.log("Q54:", isPrime(7));

//Function that extracts usernames from an array of user objects
function getNames(users) {
    return users.map(user => user.name);
}
console.log("Q55:", getNames([{name: "Ayman"}, {name: "Ali"}]));

//Function that calculates age based on birth year
function calcAge(birthYear) {
    const currentYear = new Date().getFullYear();
    return currentYear - birthYear;
}
console.log("Q56:", calcAge(2000));

//Function that generates a random Hex Color code
function randomHexColor() {
    return "#" + Math.floor(Math.random()*16777215).toString(16);
}
console.log("Q57:", randomHexColor());

//Function that checks if an array is sorted in ascending order
function isSorted(arr) {
    return arr.every((val, i, array) => !i || array[i - 1] <= val);
}
console.log("Q58:", isSorted([1, 2, 3, 4]));

//Function that merges two objects into one
function mergeObjects(obj1, obj2) {
    return {...obj1, ...obj2};
}
console.log("Q59:", mergeObjects({a: 1}, {b: 2}));

//Function that calculates the sum of the digits of a number (e.g., 123 -> 6)
function sumDigits(n) {
    return Math.abs(n).toString().split("").reduce((sum, d) => sum + +d, 0);
}
console.log("Q60:", sumDigits(123));

//Function that flattens a 2D array into a single array
function flattenArray(arr) {
    return arr.flat();
}
console.log("Q61:", flattenArray([[1, 2], [3, 4]]));

//Function that creates a time delay (Promise)
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
Usage: delay(1000).then(() => console.log("Q62: Delayed by 1s"));

//Function that fetches data from an API (Async/Await)
async function fetchData(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        return "Error fetching data";
    }
}
console.log("Q63: Fetch function is ready");

//Function that converts an object to a Query String
function objectToQueryString(obj) {
    return new URLSearchParams(obj).toString();
}
console.log("Q64:", objectToQueryString({ a: 1, b: 2 }));

//Function that performs a deep comparison between two objects
function deepEqual(obj1, obj2) {
    return JSON.stringify(obj1) === JSON.stringify(obj2);
}
console.log("Q65:", deepEqual({ a: 1 }, { a: 1 }));

//Function that returns an array of unique numbers (only those that never repeated)
function uniqueOnly(arr) {
    return arr.filter(item => arr.indexOf(item) === arr.lastIndexOf(item));
}
console.log("Q66:", uniqueOnly([1, 2, 2, 3, 4, 4, 5]));

//Function that splits an array into smaller chunks
function chunkArray(arr, size) {
    let result = [];
    for (let i = 0; i < arr.length; i += size) {
        result.push(arr.slice(i, i + size));
    }
    return result;
}
console.log("Q67:", chunkArray([1, 2, 3, 4], 2));

//Function that calculates the difference in days between two dates
function daysBetween(date1, date2) {
    const diff = Math.abs(new Date(date2) - new Date(date1));
    return Math.ceil(diff / (1000 * 60 * 60 * 24));
}
console.log("Q68:", daysBetween("2023-01-01", "2023-01-10"));

//Function that implements a debounce mechanism
function debounce(func, wait) {
    let timeout;
    return function(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
    };
}
console.log("Q69: Debounce function is ready");

//Function that converts camelCase to snake_case
function camelToSnake(str) {
    return str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);
}
console.log("Q70:", camelToSnake("camelCaseText"));

//Function that returns the most frequent element in an array
function mostFrequent(arr) {
    const hashmap = arr.reduce((acc, val) => {
        acc[val] = (acc[val] || 0) + 1;
        return acc;
    }, {});
    return Object.keys(hashmap).reduce((a, b) => hashmap[a] > hashmap[b] ? a : b);
}
console.log("Q71:", mostFrequent([1, 2, 2, 3, 3, 3]));

//Function that masks a credit card number except for the last 4 digits
function maskCard(number) {
    return String(number).slice(-4).padStart(String(number).length, "*");
}
console.log("Q72:", maskCard("1234567890123456"));

//Function that checks if a string contains only numbers
function isNumeric(str) {
    return /^\d+$/.test(str);
}
console.log("Q73:", isNumeric("12345"));

//Function that swaps case (uppercase to lowercase and vice versa)
function swapCase(str) {
    return str.split("").map(c => c === c.toUpperCase() ? c.toLowerCase() : c.toUpperCase()).join("");
}
console.log("Q74:", swapCase("Hello World"));

//Function that calculates simple interest (P * R * T / 100)
function simpleInterest(p, r, t) {
    return (p * r * t) / 100;
}
console.log("Q75:", simpleInterest(1000, 5, 2));

//Function that returns an array of keys from an object
function getKeys(obj) {
    return Object.keys(obj);
}
console.log("Q76:", getKeys({ name: "Ayman", age: 25 }));

//Function that returns an array of values from an object
function getValues(obj) {
    return Object.values(obj);
}
console.log("Q77:", getValues({ name: "Ayman", age: 25 }));

//Function that converts an array into an object where index is the key
function arrayToObject(arr) {
    return { ...arr };
}
console.log("Q78:", arrayToObject(["a", "b", "c"]));

//Function that generates Fibonacci sequence up to n
function fibonacci(n) {
    let seq = [0, 1];
    for (let i = 2; i < n; i++) {
        seq.push(seq[i - 1] + seq[i - 2]);
    }
    return seq.slice(0, n);
}
console.log("Q79:", fibonacci(5));

//Function that checks if a number is a perfect square
function isPerfectSquare(n) {
    return Math.sqrt(n) % 1 === 0;
}
console.log("Q80:", isPerfectSquare(16));

//Function that removes "Falsy" values from an array (null, undefined, 0, "")
function compact(arr) {
    return arr.filter(Boolean);
}
console.log("Q81:", compact([0, 1, false, 2, "", 3, null]));

//Function that returns the difference between two arrays
function arrayDiff(arr1, arr2) {
    return arr1.filter(x => !arr2.includes(x));
}
console.log("Q82:", arrayDiff([1, 2, 3], [2]));

//Function that converts 12-hour time to 24-hour time
function timeConvert12to24(timeStr) {
    const [time, modifier] = timeStr.split(' ');
    let [hours, minutes] = time.split(':');
    if (hours === '12') hours = '00';
    if (modifier === 'PM') hours = parseInt(hours, 10) + 12;
    return `${hours}:${minutes}`;
}
console.log("Q83:", timeConvert12to24("02:30 PM"));

//Function that calculates days remaining until the end of the year
function daysUntilYearEnd() {
    const today = new Date();
    const end = new Date(today.getFullYear(), 11, 31);
    const diff = end - today;
    return Math.ceil(diff / (1000 * 60 * 60 * 24));
}
console.log("Q84:", daysUntilYearEnd());

//Function that returns the smallest missing positive integer in an array
function firstMissingPositive(arr) {
    let i = 1;
    while (arr.includes(i)) i++;
    return i;
}
console.log("Q85:", firstMissingPositive([1, 2, 0]));

//Function that counts word frequency and returns an object
function wordFrequency(str) {
    return str.split(" ").reduce((acc, word) => {
        acc[word] = (acc[word] || 0) + 1;
        return acc;
    }, {});
}
console.log("Q86:", wordFrequency("hello world hello"));

//Function that shuffles an array randomly
function shuffle(arr) {
    return [...arr].sort(() => Math.random() - 0.5);
}
console.log("Q87:", shuffle([1, 2, 3, 4, 5]));

//Function that validates an email format using Regex
function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
console.log("Q88:", isValidEmail("test@example.com"));

//Function that converts an array of objects to a CSV string
function toCSV(data) {
    const headers = Object.keys(data[0]).join(",");
    const rows = data.map(obj => Object.values(obj).join(",")).join("\n");
    return `${headers}\n${rows}`;
}
console.log("Q89:", toCSV([{id: 1, name: "Ayman"}, {id: 2, name: "Ali"}]));

