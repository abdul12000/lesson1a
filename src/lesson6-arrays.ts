const browsers: string[] = ["chromium", "firefox", "webkit"];

console.log(browsers[0]); // chromium
console.log(browsers[1]); // firefox
console.log(browsers.length); // 3


const expectedMenu = ["Home", "Search", "Account"];
const hasAccount = expectedMenu.includes("Account");
console.log(hasAccount);