const generate = () => {

    const str = "abcdefghijklmnopqrstuvwxyz";
    const combinations = [];
    for (let i = 0; i < str.length; i++) {
        combinations.push(str[i]);
    }
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < str.length; j++) {
            combinations.push(str[i] + str[j]);
        }
    }
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < str.length; j++) {
            for (let k = 0; k < str.length; k++) {
                combinations.push(str[i] + str[j] + str[k]);
            }
        }
    }

    return combinations;
};

module.exports = generate;
