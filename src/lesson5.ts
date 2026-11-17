let username = "qa_user";
// TypeScript infers: username is a string

username = "automation_user"; // OK
//username = 123; // Not OK: number is not a string
console.log(username);