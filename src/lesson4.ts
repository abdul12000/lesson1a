// const maxRetries: number = 3;
const maxRetries = 3;
const timeoutMs: number = 5000;
const firstItemIndex: number = 0;

const totalWait = maxRetries * timeoutMs;
console.log(totalWait);