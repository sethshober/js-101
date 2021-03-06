function runTests() {

    const results = [];

    // Test: init class
    const options = {};
    const hashTable = new HashTable(options);
    // Assertion
    const test1 = objIsEquivalent(hashTable, new HashTable()) ?
        {text: 'Success - Hash Table initialized.', pass: true} :
        {text: 'Fail - Could not construct Hash Table.', pass: false };
    results.push({ result: test1, data: `${hashTable.constructor.name}: ${JSON.stringify(hashTable)}` });


    // Test: add entry
    // const aKey = 'thing';
    // const aValue = 12345;
    // hashTable.insert(aKey, aValue);
    // Assertion
    // const expectedData = Object.assign({}, { [aKey]: aValue });
    // const test2 = objIsEquivalent(hashTable[aKey], expectedData) ?
    //     'Success - Entry added to Hash Table.' :
    //     'Fail - Could not apply new entry.';
    // results.push({ result: test2, data: {[Object.keys(hashTable[aKey])]: hashTable[aKey]} });


    // Test: retrieve entry value
    // hashTable.getValue(aKey);
    // hashTable[aKey];
    // Assertion


    // Test: update entry
    // const bValue = 'six seven eight nine';
    // hashTable.setValue(aKey, bValue);
    //Assertion

    // Test: delete entry
    // hashTable.delete(aKey);
    // Assertion

    return results;
}


function objIsEquivalent(a, b) {
    const aProps = Object.getOwnPropertyNames(a);
    const bProps = Object.getOwnPropertyNames(b);

    if (aProps.length !== bProps.length) {
        return false;
    }

    for (let i = 0; i < aProps.length; i++) {
        let propName = aProps[i];

        if (a[propName] !== b[propName]) {
            return false;
        }
    }

    return true;
}
