var clients = [
    { "number": "11603080201", "name": "小白", "college": "计算机科学与工程专业", "profession": "软件工程", "grade": 2016, "class": 3, "old": 19 },
    { "number": "11603080202", "name": "小青", "college": "计算机科学与工程专业", "profession": "软件工程", "grade": 2016, "class": 3, "old": 19 },
    { "number": "11603080203", "name": "小红", "college": "计算机科学与工程专业", "profession": "软件工程", "grade": 2016, "class": 1, "old": 19 },
    { "number": "11603080204", "name": "小蓝", "college": "计算机科学与工程专业", "profession": "软件工程", "grade": 2016, "class": 4, "old": 19 },
    { "number": "11603080205", "name": "小橙", "college": "计算机科学与工程专业", "profession": "软件工程", "grade": 2016, "class": 5, "old": 19 },
    { "number": "11603080206", "name": "小黄", "college": "计算机科学与工程专业", "profession": "软件工程", "grade": 2016, "class": 1, "old": 19 },
    { "number": "11603080207", "name": "小靛", "college": "计算机科学与工程专业", "profession": "软件工程", "grade": 2016, "class": 6, "old": 19 },
    { "number": "11603080208", "name": "小绿", "college": "计算机科学与工程专业", "profession": "软件工程", "grade": 2016, "class": 4, "old": 19 },
    { "number": "11603080209", "name": "小粉", "college": "计算机科学与工程专业", "profession": "软件工程", "grade": 2016, "class": 2, "old": 19 },
    { "number": "11603080210", "name": "小紫", "college": "计算机科学与工程专业", "profession": "软件工程", "grade": 2016, "class": 8, "old": 19 },
    { "number": "11503080211", "name": "小黑", "college": "计算机科学与工程专业", "profession": "软件工程", "grade": 2015, "class": 4, "old": 20 },
    { "number": "11603080212", "name": "小金", "college": "计算机科学与工程专业", "profession": "软件工程", "grade": 2016, "class": 5, "old": 19 },
];
//checkbox被选中集合
var selections = [];
//判断是新增信息还是修改信息
var jug = 0;

//新增按钮事件
var newBtn = document.getElementById('new');
newBtn.onclick = function() {
    document.getElementById('number').value = "";
    document.getElementById('name').value = "";
    document.getElementById('college').value = "";
    document.getElementById('profession').value = "";
    document.getElementById('grade').value = "";
    document.getElementById('class').value = "";
    document.getElementById('old').value = "";
    document.getElementById('inTitle').innerHTML = "新增学生信息";
    document.getElementById("define").style.display = "inline";
    document.getElementById("all").style.display = "block";
}

//叉图片事件
var cancelImg = document.getElementById('imgCancel');
cancelImg.onclick = function() {
    document.getElementById("all").style.display = "none";
}

//取消按钮事件
var cancelBtn = document.getElementById('cancel');
cancelBtn.onclick = function() {
    $("#number").attr("readOnly",false);
    $("#name").attr("readOnly",false);
    $("#college").attr("readOnly",false);
    $("#profession").attr("readOnly",false);
    $("#class").attr("readOnly",false);
    $("#old").attr("readOnly",false);
    document.getElementById("updatedefine").style.display = "none";
    document.getElementById("define").style.display = "none";
    document.getElementById("all").style.display = "none";
}

//新增确定按钮事件
var defineBtn = document.getElementById('define');
defineBtn.onclick = function() {
    if(confirm("您确定新增么?")) {
        var number = document.getElementById('number').value;
        var name = document.getElementById('name').value;
        var college = document.getElementById('college').value;
        var profession = document.getElementById('profession').value;
        var grade = document.getElementById('grade').value;
        var classNum = document.getElementById('class').value;
        var old = document.getElementById('old').value;
    
        //Json字符串拼接
        var result = "{"+"\""+"number"+"\""+":"+"\""+number+"\""+","+"\""+"name"+"\""+":"+"\""+name+"\""+","+"\""+"college"+"\""+":"+"\""+college+"\""+","+"\""+"profession"+"\""+":"+"\""+profession+"\""+","+"\""+"grade"+"\""+":"+"\""+grade+"\""+","+"\""+"class"+"\""+":"+"\""+classNum+"\""+","+"\""+"old"+"\""+":"+"\""+old+"\""+"}"; 
        //字符串转json，并添加在数组的第一个
        clients.unshift(JSON.parse(result));
        $('#table').bootstrapTable('load',clients);
        document.getElementById("define").style.display = "none";
        document.getElementById("all").style.display = "none";
    } else {
        //Do something
    }
}

function operateFormatter(value, row, index) {
    return [
        '<img class="watch" src="img/3.png" style="margin-right:30px;"></img>',
        '<img class="upData" src="img/4.png" style="margin-right:30px;"></img>',
        '<img class="sinDel" src="img/5.png" style="margin-right:5px;"></img>'
//        '<button type="button" class="sinDel btn btn-primary btn-sm" style="margin-left:5px;">删除</button>'
    ].join('');
}

window.operateEvents = {
    'click .watch': function (e, value, row, index) {
        document.getElementById('inTitle').innerHTML = "查看学生信息";
        document.getElementById('number').value = row.number;
        $("#number").attr("readOnly",true);
        document.getElementById('name').value = row.name;
        $("#name").attr("readOnly",true);
        document.getElementById('college').value = row.college;
        $("#college").attr("readOnly",true);
        document.getElementById('profession').value = row.profession;
        $("#profession").attr("readOnly",true);
        document.getElementById('grade').value = row.grade;
        $("#grade").attr("readOnly",true);
        document.getElementById('class').value = row.class;
        $("#class").attr("readOnly",true);
        document.getElementById('old').value = row.old;
        $("#old").attr("readOnly",true);
        document.getElementById("all").style.display = "block";
        index = null;
    },
    'click .upData': function (e, value, row, index) {
        document.getElementById('inTitle').innerHTML = "修改学生信息";
        document.getElementById('number').value = row.number;
        document.getElementById('name').value = row.name;
        document.getElementById('college').value = row.college;
        document.getElementById('profession').value = row.profession;
        document.getElementById('grade').value = row.grade;
        document.getElementById('class').value = row.class;
        document.getElementById('old').value = row.old;
        document.getElementById("all").style.display = "block";
        document.getElementById("updatedefine").style.display = "inline";
        //修改确定按钮事件
        $('#updatedefine').on('click',function(){
            if(confirm("您确定修改么?")) {
                $('#table').bootstrapTable('updateRow', {  
                    index: index,  
                    row: {  
                        number : document.getElementById('number').value,
                        name : document.getElementById('name').value,
                        college : document.getElementById('college').value,
                        profession : document.getElementById('profession').value,
                        grade : document.getElementById('grade').value,
                        class : document.getElementById('class').value,
                        old : document.getElementById('old').value,
                    }  
                });  
                $('#table').bootstrapTable('load', clients);
                document.getElementById("updatedefine").style.display = "none";
                document.getElementById("all").style.display = "none";
                index = null;
            } else {
                //Do something
            }
        })
    },
    'click .sinDel': function (e, value, row, index) {
        if(confirm("您确定要删除么?")) {
            $('#table').bootstrapTable('remove', {
                field: 'number',
                values: [row.number]
            });
        } else {
            //Do something
        }
    }
};

$('#table').bootstrapTable({
    data: clients,
    //是否分页
    pagination: true,
    pageSize: 10,
    //可供选择的分页的行数
    pageList: [10, 25, 50, 100, 'All'],
    search: true,
    showRefresh: true,
    clickToSelect: false,
    striped: true,
    columns: [{
        checkbox: true
    },{  
        title: '序号',
        align: 'center',
        valign: 'middle',
        formatter: function (value, row, index) {  
            return index + 1;  
        }
    },{
        field: 'number',
        title: '学号',
        align: 'center',
        valign: 'middle',
    }, {
        field: 'name',
        title: '姓名',
        align: 'center',
        valign: 'middle',
    }, {
        field: 'college',
        title: '学院',
        align: 'center',
        valign: 'middle',
    }, {
        field: 'profession',
        title: '专业',
        align: 'center',
        valign: 'middle',
    }, {
        field: 'grade',
        title: '年级',
        align: 'center',
        valign: 'middle',
    }, {
        field: 'class',
        title: '班级',
        align: 'center',
        valign: 'middle',
    }, {
        field: 'old',
        title: '年龄',
        align: 'center',
        valign: 'middle',
    }, {
        field: 'operate',
        title: '操作',
        align: 'center',
        valign: 'middle',
        width : 200,
        events: operateEvents,
        formatter: operateFormatter,
    }],
});

//复选框响应事件
$('#table').on('check.bs.table uncheck.bs.table ' + 'check-all.bs.table uncheck-all.bs.table', function () {
    $('#delete').prop('disabled', !$('#table').bootstrapTable('getSelections').length);
    selections = getIdSelections();
});

$('#delete').click(function () {
    var ids = getIdSelections();
    $('#table').bootstrapTable('remove', {
        field: 'number',
        values: ids
    });
    $('#delete').prop('disabled', true);
});

function getIdSelections() {
    return $.map($('#table').bootstrapTable('getSelections'), function (row) {
        return row.number
    });
}




  
