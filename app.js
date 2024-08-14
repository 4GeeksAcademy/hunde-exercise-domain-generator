// Multiplication Table Code
let multiplicationTable = [];

for (let i = 1; i < 11; i++) {
    for (let j = 1; j < 11; j++) {
        multiplicationTable.push(`${i} * ${j} = ${i * j}`);
    }
}

console.log(multiplicationTable);

// Domain Name Generator Code
let prefix = ['big', 'jogger', 'racoon', 'the', 'our', 'great', 'big', 'important', 'very', 'cool', 'super'];
let word = ['code', 'coders', 'tech', 'stack', 'geeks', 'computing'];

for (let i = 0; i < prefix.length; i++) {
    for (let j = 0; j < word.length; j++) {
        let div = document.createElement('div');
        div.innerText = `${prefix[i]}${word[j]}.com`;
        document.body.appendChild(div);
        console.log(`${prefix[i]}${word[j]}.com`);
    }
}
