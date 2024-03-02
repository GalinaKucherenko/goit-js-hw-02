    const blackWord1 = 'spam';
    const blackWord2 = 'sale';
    
function checkForSpam(message) {
    
    const normalizedMessage = message.toLowerCase();
    const hasSpamWord1 = normalizedMessage.includes(blackWord1);
    const hasSpamWord2 = normalizedMessage.includes(blackWord2);

    if (hasSpamWord1 || hasSpamWord2) {
        return true;
    } else {
        return false;
    }
}

checkForSpam("Latest technology news");
checkForSpam("JavaScript weekly newsletter");
checkForSpam("Get best sale offers now!");
checkForSpam("Amazing SalE, only tonight!");
checkForSpam("Trust me, this is not a spam message");
checkForSpam("Get rid of sPaM emails. Our book in on sale!");
checkForSpam("[SPAM] How to earn fast money?");

console.log(checkForSpam("Latest technology news")); // false
console.log(checkForSpam("JavaScript weekly newsletter")); // false
console.log(checkForSpam("Get best sale offers now!")); // true
console.log(checkForSpam("Amazing SalE, only tonight!")); // true
console.log(checkForSpam("Trust me, this is not a spam message")); // true
console.log(checkForSpam("Get rid of sPaM emails. Our book in on sale!")); // true
console.log(checkForSpam("[SPAM] How to earn fast money?")); // true
