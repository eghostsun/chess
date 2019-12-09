$(function(){
    var chess = {};
    var flags = new Array();
    var player1 = {name: "红方", camp: 0, lose: new Array(), isturn: true};
    var player2 = {name: "黑方", camp: 1, lose: new Array(), isturn: false};
    var choose = null;

    var C01 = {length: 0, line: 0, name: "车", num: 1, camp: 0, type: 1, img: "img/C01.png", id: "C01"}; //红方车
    var C02 = {length: 8, line: 0, name: "车", num: 2, camp: 0, type: 1, img: "img/C01.png", id: "C02"}; //红方车
    var M01 = {length: 1, line: 0, name: "马", num: 1, camp: 0, type: 2, img: "img/M01.png", id: "M01"}; //红方马
    var M02 = {length: 7, line: 0, name: "马", num: 2, camp: 0, type: 2, img: "img/M01.png", id: "M02"}; //红方马
    var X01 = {length: 2, line: 0, name: "象", num: 1, camp: 0, type: 3, img: "img/X01.png", id: "X01"}; //红方象
    var X02 = {length: 6, line: 0, name: "象", num: 2, camp: 0, type: 3, img: "img/X01.png", id: "X02"}; //红方象
    var S01 = {length: 3, line: 0, name: "士", num: 1, camp: 0, type: 4, img: "img/S01.png", id: "S01"}; //红方士
    var S02 = {length: 5, line: 0, name: "士", num: 1, camp: 0, type: 4, img: "img/S01.png", id: "S02"}; //红方士
    var J01 = {length: 4, line: 0, name: "将", num: 1, camp: 0, type: 5, img: "img/J01.png", id: "J01"}; //红方将

    var B01 = {length: 0, line: 3, name: "兵", num: 1, camp: 0, type: 6, img: "img/B01.png", id: "B01"}; //红方兵
    var B02 = {length: 2, line: 3, name: "兵", num: 1, camp: 0, type: 6, img: "img/B01.png", id: "B02"}; //红方兵
    var B03 = {length: 4, line: 3, name: "兵", num: 1, camp: 0, type: 6, img: "img/B01.png", id: "B03"}; //红方兵
    var B04 = {length: 6, line: 3, name: "兵", num: 1, camp: 0, type: 6, img: "img/B01.png", id: "B04"}; //红方兵
    var B05 = {length: 8, line: 3, name: "兵", num: 1, camp: 0, type: 6, img: "img/B01.png", id: "B05"}; //红方兵

    var P01 = {length: 1, line: 2, name: "炮", num: 1, camp: 0, type: 7, img: "img/P01.png", id: "P01"}; //红方炮
    var P02 = {length: 7, line: 2, name: "炮", num: 1, camp: 0, type: 7, img: "img/P01.png", id: "P02"}; //红方炮

    var C11 = {length: 0, line: 9, name: "车", num: 1, camp: 1, type: 1, img: "img/C02.png", id: "C11"}; //黑方车
    var C12 = {length: 8, line: 9, name: "车", num: 2, camp: 1, type: 1, img: "img/C02.png", id: "C12"}; //黑方车
    var M11 = {length: 1, line: 9, name: "马", num: 1, camp: 1, type: 2, img: "img/M02.png", id: "M11"}; //黑方马
    var M12 = {length: 7, line: 9, name: "马", num: 2, camp: 1, type: 2, img: "img/M02.png", id: "M12"}; //黑方马
    var X11 = {length: 2, line: 9, name: "象", num: 1, camp: 1, type: 3, img: "img/X02.png", id: "X11"}; //黑方象
    var X12 = {length: 6, line: 9, name: "象", num: 2, camp: 1, type: 3, img: "img/X02.png", id: "X12"}; //黑方象
    var S11 = {length: 3, line: 9, name: "士", num: 1, camp: 1, type: 4, img: "img/S02.png", id: "S11"}; //黑方士
    var S12 = {length: 5, line: 9, name: "士", num: 1, camp: 1, type: 4, img: "img/S02.png", id: "S12"}; //黑方士
    var J11 = {length: 4, line: 9, name: "将", num: 1, camp: 1, type: 5, img: "img/J02.png", id: "J11"}; //黑方将

    var B11 = {length: 0, line: 6, name: "兵", num: 1, camp: 1, type: 6, img: "img/B02.png", id: "B11"}; //黑方兵
    var B12 = {length: 2, line: 6, name: "兵", num: 1, camp: 1, type: 6, img: "img/B02.png", id: "B12"}; //黑方兵
    var B13 = {length: 4, line: 6, name: "兵", num: 1, camp: 1, type: 6, img: "img/B02.png", id: "B13"}; //黑方兵
    var B14 = {length: 6, line: 6, name: "兵", num: 1, camp: 1, type: 6, img: "img/B02.png", id: "B14"}; //黑方兵
    var B15 = {length: 8, line: 6, name: "兵", num: 1, camp: 1, type: 6, img: "img/B02.png", id: "B15"}; //黑方兵

    var P11 = {length: 1, line: 7, name: "炮", num: 1, camp: 1, type: 7, img: "img/P02.png", id: "P11"}; //黑方炮
    var P12 = {length: 7, line: 7, name: "炮", num: 1, camp: 1, type: 7, img: "img/P02.png", id: "P12"}; //黑方炮
    //创建棋盘
    chess.create = function(){
        flags.push(C01);
        flags.push(C02);
        flags.push(M01);
        flags.push(M02);
        flags.push(X01);
        flags.push(X02);
        flags.push(S01);
        flags.push(S02);
        flags.push(J01);
        flags.push(B01);
        flags.push(B02);
        flags.push(B03);
        flags.push(B04);
        flags.push(B05);
        flags.push(P01);
        flags.push(P02);

        flags.push(C11);
        flags.push(C12);
        flags.push(M11);
        flags.push(M12);
        flags.push(X11);
        flags.push(X12);
        flags.push(S11);
        flags.push(S12);
        flags.push(J11);
        flags.push(B11);
        flags.push(B12);
        flags.push(B13);
        flags.push(B14);
        flags.push(B15);
        flags.push(P11);
        flags.push(P12);

        flags.forEach(obj => {
            var point = "T" + obj.line + obj.length;
            $('#' + point).append('<img src="'+obj.img+'" id="' + obj.id + '" class="bt"></img>');
            $('#' + obj.id).on('click',function(){
                chess.choose(obj.id);
            });
        });

        $('li').each(function(){
            $(this).on('click',function(){
                chess.down($(this).attr('id'));
            });
        });
        chess.showRight();
    }

    chess.showRight = function()
    {
        if(player1.isturn)
        {
            $('#player1').text(player1.name + "下棋");
        }else{
            $('#player1').text(player1.name);
        }
        if(player2.isturn)
        {
            $('#player2').text(player2.name + "下棋");
        }else{
            $('#player2').text(player2.name);
        }
    }
    chess.choose = function(point)
    {
        var old = null;
        var selector = null;
        for(var i in flags)
        {
            var obj = flags[i];
            if(choose != null && choose == obj.id)
            {
                old = obj;
            }
            if(point == obj.id)
            {
                selector = obj;
                if(choose == null)
                {
                    break;
                }
            }
            if(choose != null && old != null && selector != null)
            {
                break;
            }
        }
        if((selector.camp == 0 && !player1.isturn) || (selector.camp == 1 && !player2.isturn))
        {
            return;
        }
        if(old != null && selector.id == old.id) //重复选择取消选中
        {
            choose = null;
            $('#' + point).removeClass('btchoose');
        }else{
            if(choose != null) 
            {
                //更换选择
                $('#' + choose).removeClass('btchoose');
                $('#' + point).addClass('btchoose');
            }else{
                //新选择
                $('#' + point).addClass('btchoose');
            }
            choose = point;
        }
    }

    chess.eat = function(flag,line,length,gridId)
    {
        for(var i = 0; i < flags.length; i++)
        {
            var obj = flags[i];
            var flagLine = obj.line;
            var flagLength = obj.length;
            if(line == flagLine && flagLength == length && obj.camp != flag.camp)
            {
                $('T' + gridId).empty();
                if(obj.camp == 0)
                {
                    player1.lose.push(obj);
                }else if(obj.camp == 1){
                    player2.lose.push(obj);
                }
                flags.splice(i,1);
                if(obj.type == 5)
                {
                    alert('你赢了！');
                }
                return true;
            }
        }
        return false;
    }

    chess.intercept = function(flag, roads)
    {
        console.log(flag);
        console.log(roads);
        var num = 0;
        roads.forEach(road => {
            flags.forEach(obj => {
                var flagLine = obj.line;
                var flagLength = obj.length
                if(road.length == flagLength && road.line == flagLine && flag.id != obj.id)
                {
                    num++;
                }
            });
        });
        return num;
    }

    chess.move = function(obj,newGridId,line, length)
    {
        $("#T" + obj.line + obj.length).empty();
        $("#" + newGridId).empty();
        $("#" + newGridId).append('<img src="'+obj.img+'" id="' + obj.id + '" class="bt"></img>');
        $('#' + obj.id).on('click',function(){
            chess.choose(obj.id);
        });
        obj.line = line;
        obj.length = length;
        console.log(obj);
        if(player1.isturn)
        {
            player1.isturn = false;
            player2.isturn = true;
        }else if(player2.isturn){
            player2.isturn = false;
            player1.isturn = true;
        }
        choose = null;
        chess.showRight();
    }
    //1左 2右 3上 4下 5左上 6右上 7左下 8右下
    chess.direct = function(line,length,oldLine,oldLength)
    {
        var direction = 0;
        if(length > 8 || length < 0 || line > 9 || line < 0)
        {
            return direction;
        }
        if(oldLine == line)
        {
            if(length > oldLength)
            {
                //向左走
                direction = 1;
            }else if(length < oldLength){
                //向右走
                direction = 2;
            }
        }
        if(oldLength == length)
        {
            if(line > oldLine)
            {
                //向下走
                direction = 4;
            }else if(line < oldLine){
                //向上走
                direction = 3;
            }
        } 	
        if(oldLine != line && oldLength != length)
        {
            if(length < oldLength && line < oldLine)
            {
                direction = 5;
            }
            if(length > oldLength && line < oldLine)
            {
                direction = 6;
            }
            if(length < oldLength && line > oldLine)
            {
                direction = 7;
            }
            if(length > oldLength && line > oldLine)
            {
                direction = 8;
            }
        }
        return direction;	
    }

    chess.roads = function(flag,direction,line,length,oldLine,oldLength)
    {
        var roads = new Array();
        switch (direction) {
            case 1:
                for(var i = length; i < oldLength; i++)
                {
                    var road = {length: i, line: oldLine};
                    roads.push(road);
                }
                break;
            case 2:
                for(var i = length; i > oldLength; i--)
                {
                    var road = {length: i, line: oldLine};
                    roads.push(road);
                }
                break;
            case 3:
                for(var i = line; i < oldLine; i++)
                {
                    var road = {length: oldLength, line: i};
                    roads.push(road);
                }
                break;
            case 4:
                for(var i = line; i > oldLine; i--)
                {
                    var road = {length: oldLength, line: i};
                    roads.push(road);
                }
                break;
            case 5:
                if(flag.type == 4)
                {
                    var road = {length: oldLength - 1, line: oldLine - 1};
                    roads.push(road);
                }
                if(flag.type == 3)
                {
                    for(var i = 1; i <= 2; i++)
                    {
                        var road = {length: oldLength - i, line: oldLine - i};
                        roads.push(road);
                    }
                }
                if(flag.type == 2)
                {
                    if(Math.abs(line - oldLine) == 2)
                    {
                        var road = {length: oldLength, line: oldLine - 1};
                        roads.push(road);
                        road = {length: oldLength - 1, line: oldLine - 2};
                        roads.push(road);
                    }
                    if(Math.abs(length - oldLength) == 2)
                    {
                        var road = {length: oldLength - 1, line: oldLine};
                        roads.push(road);
                        road = {length: oldLength - 2, line: oldLine - 1};
                        roads.push(road);
                    }
                }
                break;
            case 6:
                if(flag.type == 4)
                {
                    var road = {length: oldLength + 1, line: oldLine - 1};
                    roads.push(road);
                }
                if(flag.type == 3)
                {
                    for(var i = 1; i <= 2; i++)
                    {
                        var road = {length: oldLength + i, line: oldLine - i};
                        roads.push(road);
                    }
                }
                if(flag.type == 2)
                {
                    if(Math.abs(line - oldLine) == 2)
                    {
                        var road = {length: oldLength, line: oldLine - 1};
                        roads.push(road);
                        road = {length: oldLength + 1, line: oldLine - 2};
                        roads.push(road);
                    }
                    if(Math.abs(length - oldLength) == 2)
                    {
                        var road = {length: oldLength + 1, line: oldLine};
                        roads.push(road);
                        road = {length: oldLength + 2, line: oldLine - 1};
                        roads.push(road);
                    }
                }
                break;
            case 7:
                if(flag.type == 4)
                {
                    var road = {length: oldLength - 1, line: oldLine + 1};
                    roads.push(road);
                }
                if(flag.type == 3)
                {
                    for(var i = 1; i <= 2; i++)
                    {
                        var road = {length: oldLength - i, line: oldLine + i};
                        roads.push(road);
                    }
                }
                if(flag.type == 2)
                {
                    if(Math.abs(line - oldLine) == 2)
                    {
                        var road = {length: oldLength, line: oldLine + 1};
                        roads.push(road);
                        road = {length: oldLength - 1, line: oldLine + 2};
                        roads.push(road);
                    }
                    if(Math.abs(length - oldLength) == 2)
                    {
                        var road = {length: oldLength  - 1, line: oldLine};
                        roads.push(road);
                        road = {length: oldLength - 2, line: oldLine + 1};
                        roads.push(road);
                    }
                }
                break;
            case 8:
                if(flag.type == 4)
                {
                    var road = {length: oldLength + 1, line: oldLine + 1};
                    roads.push(road);
                }
                if(flag.type == 3)
                {
                    for(var i = 1; i <= 2; i++)
                    {
                        var road = {length: oldLength + i, line: oldLine + i};
                        roads.push(road);
                    }
                }
                if(flag.type == 2)
                {
                    if(Math.abs(line - oldLine) == 2)
                    {
                        var road = {length: oldLength, line: oldLine + 1};
                        roads.push(road);
                        road = {length: oldLength + 1, line: oldLine + 2};
                        roads.push(road);
                    }
                    if(Math.abs(length - oldLength) == 2)
                    {
                        var road = {length: oldLength  + 1, line: oldLine};
                        roads.push(road);
                        road = {length: oldLength + 2, line: oldLine + 1};
                        roads.push(road);
                    }
                }
            default:
                break;
        }
        return roads;
    }
    //下棋
    chess.down = function(gridId){
        console.log('choose:' + choose + ' gridId:' + gridId);
        if(choose == null)
        {
            return;
        }
        var flag = {};
        for(var i = 0; i < flags.length; i++)
        {
            var obj = flags[i];
            if(choose == obj.id)
            {
                flag = obj;
                break;
            }
        }
        if(flag.grid == gridId.substr(1,gridId.length))
        {
            return;
        }
        var line = parseInt(gridId.substr(1,1));
        var length = parseInt(gridId.substr(2,1));
        var oldLine = flag.line;
        var oldLength = flag.length;
        switch (flag.type) {
            case 1: //车的走法
                console.log('车的走法');
                //判断是否可以走
                var direction = chess.direct(line,length,oldLine,oldLength);
                if(direction != 1 && direction != 2 && direction != 3 && direction != 4)
                {
                    console.log('走法非法');
                    return;
                }
                console.log('direction:' + direction);

                //线路上是否有棋子拦截
                var num = chess.intercept(flag,chess.roads(flag,direction,line,length,oldLine,oldLength));
                if(num > 1)
                {
                    console.log('存在拦截的棋子');
                    return;
                }else if(num == 1 && !chess.eat(flag,line,length,gridId)){
                    return;
                }
                break;
            case 2: //马的走法
                console.log('马的走法');
                var direction = chess.direct(line,length, oldLine, oldLength);
                if(direction != 5 && direction != 6 && direction != 7 && direction != 8)
                {
                    console.log('走法非法');
                    return;
                }
                if(Math.abs(line - oldLine) == 1 && Math.abs(length - oldLength) != 2)
                {
                    console.log('走法非法');
                    return;
                }
                if(Math.abs(length - oldLength) == 1 && Math.abs(line - oldLine) != 2)
                {
                    console.log('走法非法');
                    return;
                }
                var num = chess.intercept(flag,chess.roads(flag,direction,line,length,oldLine,oldLength));
                if(num == 1)
                {
                    console.log('存在拦截的棋子');
                    return;
                }else if(num == 2 && !chess.eat(flag,line,length,gridId)){
                    return;
                }
                break;
            
            case 3: //象的走法
                console.log('象的走法');
                var direction = chess.direct(line,length, oldLine, oldLength);
                if(direction != 5 && direction != 6 && direction != 7 && direction != 8)
                {
                    console.log('走法非法');
                    return;
                }
                if(Math.abs(line - oldLine) != 2 && Math.abs(length - oldLength)  != 2)
                {
                    console.log('走法非法');
                    return;
                }
                if(flag.camp == 0 && line > 4)
                {
                    console.log('走法非法');
                    return;
                }else if(flag.camp == 1 && line < 5){
                    console.log('走法非法');
                    return;
                }
                var num = chess.intercept(flag,chess.roads(flag,direction,line,length,oldLine,oldLength));
                if(num == 1)
                {
                    console.log('存在拦截的棋子');
                    return;
                }else if(num == 2 && !chess.eat(flag,line,length,gridId)){
                    return;
                }
                break;

            case 4: //士的走法
                console.log('士的走法');
                var direction = chess.direct(line,length, oldLine, oldLength);
                if(direction != 5 && direction != 6 && direction != 7 && direction != 8)
                {
                    console.log('走法非法');
                    return;
                }
                if(Math.abs(line - oldLine) > 1 || Math.abs(length - oldLength) > 1)
                {
                    console.log('走法非法');
                    return;
                }
                if(flag.camp == 0)
                {
                    if(line > 2 || length > 5 || length < 3)
                    {
                        console.log('走法非法');
                        return;
                    }
                }else{
                    if(line < 7 || length > 5 || length < 3)
                    {
                        console.log('走法非法');
                        return;
                    }
                }
                var num = chess.intercept(flag,chess.roads(flag,direction,line,length,oldLine,oldLength));
                if(num > 1)
                {
                    console.log('存在拦截的棋子');
                    return;
                }else if(num == 1 && !chess.eat(flag,line,length,gridId)){
                    return;
                }
                break;
            case 5: //将的走法
                console.log('将的走法');
                var direction = chess.direct(line,length,oldLine,oldLength);
                if(direction != 1 && direction != 2 && direction != 3 && direction != 4)
                {
                    console.log('走法非法');
                    return;
                }
                if(Math.abs(line - oldLine) > 1 || Math.abs(length - oldLength) > 1)
                {
                    console.log('走法非法');
                    return;
                }
                if(flag.camp == 0)
                {
                    if(line > 2 || length > 5 || length < 3)
                    {
                        console.log('走法非法');
                        return;
                    }
                }else{
                    if(line < 7 || length > 5 || length < 3)
                    {
                        console.log('走法非法');
                        return;
                    }
                }
                var num = chess.intercept(flag,chess.roads(flag,direction,line,length,oldLine,oldLength));
                if(num > 1)
                {
                    console.log('存在拦截的棋子');
                    return;
                }else if(num == 1 && !chess.eat(flag,line,length,gridId)){
                    return;
                }
                break;
            case 6: //兵的走法
                console.log('兵的走法');
                //判断是否可以走
                var direction = chess.direct(line,length,oldLine,oldLength);
                if(direction != 1 && direction != 2 && direction != 3 && direction != 4)
                {
                    console.log('走法非法');
                    return;
                }
                if(Math.abs(line - oldLine) > 1 || Math.abs(length - oldLength) > 1)
                {
                    console.log('走法非法');
                    return;
                }
                if(flag.camp == 0) //红方
                {
                    if(oldLine <= 4 && (direction == 1 || direction == 2)){
                        console.log('走法非法');
                        return;
                    }
                    if(direction == 3){
                        console.log('走法非法');
                        return;
                    }
                }else{ //黑方
                    if(oldLine >= 5 && (direction == 1 || direction == 2)){
                        console.log('走法非法');
                        return;
                    }
                    if(direction == 4){
                        console.log('走法非法');
                        return;
                    }
                }
                var num = chess.intercept(flag,chess.roads(flag,direction,line,length,oldLine,oldLength));
                if(num > 1)
                {
                    console.log('存在拦截的棋子');
                    return;
                }else if(num == 1 && !chess.eat(flag,line,length,gridId)){
                    return;
                }
                break;
            case 7: //炮的走法
                console.log('炮的走法');
                var direction = chess.direct(line,length,oldLine,oldLength);
                if(direction != 1 && direction != 2 && direction != 3 && direction != 4)
                {
                    console.log('走法非法');
                    return;
                }
                console.log('direction:' + direction);
                var num = chess.intercept(flag,chess.roads(flag,direction,line,length,oldLine,oldLength));
                if(num > 2 || num == 1)
                {
                    console.log('走法非法');
                    return;
                }else if(num == 2 && !chess.eat(flag,line,length,gridId)){
                   return;
                }
                break;
            default: //异常
                console.log('异常');
                break;
        }
        chess.move(flag,gridId,line,length);
       
    } 
    chess.create();
    
});