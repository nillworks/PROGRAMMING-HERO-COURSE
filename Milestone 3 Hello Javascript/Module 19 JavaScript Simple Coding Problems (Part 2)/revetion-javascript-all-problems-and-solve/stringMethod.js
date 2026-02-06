/*
*String immutable → direct change করা যায় না
*Common String Methods :
1. toLowerCase()
2. toUpperCase()
3. trim()
4. slice()
5. split()
6. includes()
7. replace()
8. charAt()

 */

const str = 'String immutable';

// 1 ====>
console.log(str.toLowerCase());

// 2 ====>
console.log(str.toUpperCase());

// 3 ====> remove space
console.log(str.trim());

// 4 ====> কাটে
console.log(str.slice());

// 5 ====> array
console.log(str.split(' '));

// 6 ====> search
console.log(str.includes('String'));

// 7 ====> বদলায়
console.log(str.replace('String', 'svg'));

// 8 ====>  fast find character
console.log(str.charAt(1));

// Notes: str.split('').reverse().join('');
