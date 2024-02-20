'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');
    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'groupTransactions' function below.
 *
 * The function is expected to return a STRING_ARRAY.
 * The function accepts STRING_ARRAY transactions as parameter.
 */

function groupTransactions(transactions) {
    for(let i=0; i<transactions.length; i++) {
        for(let j=0; j<transactions.length; j++) {
            if(transactions[i] < transactions[j]) {
                let temp = transactions[i];
                transactions[i] = transactions[j];
                transactions[j] = temp;
            }
        }
    }

    let result = [];
    let str = transactions[0], c=0;
    for(let i=0; i<transactions.length; i++) {
        if( str == transactions[i] )
            c++;
        else {
            console.log(str, c)
            result.push(str + " " + c)
            c=1
            str = transactions[i]
        }
    }
    result.push(str + " " + c)
    return result;
    // Write your code here

    //
    // WARNING: Please do not use GitHub Copilot, ChatGPT, or other AI assistants
    //          when solving this problem!
    //
    // We use these tools in our coding too, but in our interviews, we also don't
    // allow using these, and want to see how we do without them.
    //
}

function main() {
    const ws = process.stdout;

    const transactionsCount = parseInt(readLine().trim(), 10);

    let transactions = [];

    for (let i = 0; i < transactionsCount; i++) {
        const transactionsItem = readLine();
        transactions.push(transactionsItem);
    }

    const result = groupTransactions(transactions);

    ws.write(result.join('\n') + '\n');

    ws.end();
}