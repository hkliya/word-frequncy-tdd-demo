var group = function (words) {
    return words.reduce((g, word) => {
        let wordInGroup = g.find((w) => w.word === word);
        if (wordInGroup) {
            wordInGroup.count++;
        } else {
            g.push({word: word, count: 1});
        }
        return g;
    }, []);
};

var split = function (string) {
    return string.split(/\s+/);
};

var sort = function (groupedWords) {
    groupedWords.sort((x, y) => y.count - x.count);
};

var format = function (groupedWords) {
    return groupedWords.map((g) => g.word + ' ' + g.count).join('\r\n');
};
function main(string) {
    if (string !== '') {
        var words = split(string);
        var groupedWords = group(words);
        sort(groupedWords);
        return format(groupedWords);
    }
    return '';
}

module.exports = main;
