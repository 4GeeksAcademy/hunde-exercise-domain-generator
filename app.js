// Define arrays with pronouns, adjectives, and nouns
let pronouns = ['the', 'our'];
let adjectives = ['great', 'big'];
let nouns = ['jogger', 'racoon'];

// Function to generate domain names
function generateDomains(pronouns, adjectives, nouns) {
    let domains = [];
    
    // Nested loops to create all combinations
    for (let i = 0; i < pronouns.length; i++) {
        for (let j = 0; j < adjectives.length; j++) {
            for (let k = 0; k < nouns.length; k++) {
                // Concatenate parts to form domain names
                let domain = `${pronouns[i]}${adjectives[j]}${nouns[k]}.com`;
                domains.push(domain);
            }
        }
    }
    
    return domains;
}

// Generate the domain names
let domainNames = generateDomains(pronouns, adjectives, nouns);

// Print the domain names to the console
domainNames.forEach(domain => console.log(domain));
