// 获取所有的表格
var tables = document.getElementsByTagName('table');

// 遍历每个表格
for (var i = 0; i < tables.length; i++) {
    var table = tables[i];

    // 获取表格中的所有行（tr）
    var rows = table.getElementsByTagName('tr');

    // 遍历每行并删除最后一个单元格（td）
    for (var j = 0; j < rows.length; j++) {
        var row = rows[j];
        var lastCell = row.lastElementChild;
        if (lastCell) {
            row.removeChild(lastCell);
        }
    }
}