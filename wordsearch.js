function wordSearch(letters, word) {
    var horizontalJoin = letters.map(function (ls) {
        return ls.join('');
    });

    var verticalJoin = transpose(letters).map(function (ls) {
        return ls.join('');
    });

    for (var i = 0; i < horizontalJoin.length; i++) {
        if (horizontalJoin[i].includes(word)) {
            return true;
        }
    }

    for (var j = 0; j < verticalJoin.length; j++) {
        if (verticalJoin[j].includes(word)) {
            return true;
        }
    }

    return false;
}

function transpose(matrix) {
    return matrix[0].map(function (col, i) {
        return matrix.map(function (row) {
            return row[i];
        });
    });
}

module.exports = wordSearch