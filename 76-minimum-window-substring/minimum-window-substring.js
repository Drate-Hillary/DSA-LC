/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    if(s.length < t.length) return "";

    let charMap = new Map();
    for(let c of t){
        charMap.set(c, (charMap.get(c) || 0) + 1);
    }

    let a = 0, b = 0, minLen = Infinity, minStart = 0;
    let req = charMap.size, formed = 0;
    let windowCount = new Map();

    while(b < s.length){
        let char = s[b];
        windowCount.set(char, (windowCount.get(char) || 0) + 1);

        if(charMap.has(char) && windowCount.get(char) === charMap.get(char)){
            formed++;
        }

        while(formed === req){
            if(b - a + 1 < minLen){
                minLen = b - a + 1;
                minStart = a;
            }

            let leftChar = s[a];
            windowCount.set(leftChar, windowCount.get(leftChar) - 1);

            if(charMap.has(leftChar) && windowCount.get(leftChar) < charMap.get(leftChar)){
                formed--;
            }
            a++;
        }
        b++;
    }

    return minLen === Infinity ? "" :s.substring(minStart, minStart + minLen); 
};