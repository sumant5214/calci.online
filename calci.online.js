var temp;
var ctr = 0;
var opt = 0;
var n1 = "";
var n2 = "";
var n1tr = "";
var n2tr = "";
var anum = new Array();
var snum = new Array();
var ocmofunc = 0;
/*function openmofunc(){
    var mofuncdiv = document.getElementById("mofunc").style;
    if(ocmofunc == 0){
        mofuncdiv.display = 'grid';
        mofuncdiv.visibility = 'visible';
        ocmofunc = 1;
    }
    else{
        mofuncdiv.display = 'none';
        mofuncdiv.visibility = 'hidden';
        ocmofunc = 0;
    }
}*/
function squared(){
    var exist = document.getElementById("d2").innerHTML;
    var res = exist;
    if(res.length > 0 && (res.indexOf('+') == -1 || exist.indexOf('-') == -1 || exist.indexOf('*') == -1 || exist.indexOf('÷') == -1) && exist != "ERROR"){
        res = Number(exist);
        res = res * res;
        document.getElementById("d1").innerHTML = "sqr" + "(" + document.getElementById("d2").innerHTML + ")";
        document.getElementById("d2").innerHTML = "" + res;
    }
    else{
        
        document.getElementById("d2").innerHTML = "ERROR";
    }
}
function onebyx(){
    var exist = document.getElementById("d2").innerHTML;
    var res = exist;
    if(res.length > 0 && (res.indexOf('+') == -1 || exist.indexOf('-') == -1 || exist.indexOf('*') == -1 || exist.indexOf('÷') == -1) && exist != "ERROR"){
        res = Number(exist);
        res = 1/res;
        document.getElementById("d1").innerHTML = "1 / " + document.getElementById("d2").innerHTML;
        document.getElementById("d2").innerHTML = "" + res;
    }
    else{
        
        document.getElementById("d2").innerHTML = "ERROR";
    }
}
function squaroot(){
    var exist = document.getElementById("d2").innerHTML;
    var res = exist;
    if(res.length > 0 && (res.indexOf('+') == -1 || exist.indexOf('-') == -1 || exist.indexOf('*') == -1 || exist.indexOf('÷') == -1) && exist != "ERROR"){
        res = Number(exist);
        res = Math.sqrt(res);
        document.getElementById("d1").innerHTML = "sqrt" + "(" + document.getElementById("d2").innerHTML + ")";
        document.getElementById("d2").innerHTML = "" + res;
    }
    else{
        
        document.getElementById("d2").innerHTML = "ERROR";
    }
}
function logged(){
    var exist = document.getElementById("d2").innerHTML;
    var res = exist;
    if(res.length > 0 && (res.indexOf('+') == -1 || exist.indexOf('-') == -1 || exist.indexOf('*') == -1 || exist.indexOf('÷') == -1) && exist != "ERROR"){
        res = Number(exist);
        res = Math.log10(res);
        //alert(res);
        document.getElementById("d1").innerHTML = "log" + "(" + document.getElementById("d2").innerHTML + ")";
        document.getElementById("d2").innerHTML = "" + res;
    }
    else{
        
        document.getElementById("d2").innerHTML = "ERROR";
    }
}
function fact(){
    var exist = document.getElementById("d2").innerHTML;
    var res;
    if(Number(exist) > 1000){
        document.getElementById("d1").innerHTML = "ERROR";
        document.getElementById("d2").innerHTML = "OVERFLOW";
    }
    else if(exist.length > 0 && (exist.indexOf('+') == -1 || exist.indexOf('-') == -1 || exist.indexOf('*') == -1 || exist.indexOf('÷') == -1) && exist.indexOf("E") == -1){
        temp = Number(exist);
        res = 1;
        if(temp == 0 || temp == 1)
            res = res;
        else{
            for (inx = 1; inx <= temp; inx++) {
                res = res * inx;
            }
        }
        document.getElementById("d1").innerHTML = "fac" + "(" + document.getElementById("d2").innerHTML + ")";
        document.getElementById("d2").innerHTML = "" + res;
    }
    else{
        
        document.getElementById("d2").innerHTML = "ERROR";
    }
}
function typer(num){
    temp = num;
    if((n2tr == 1)){

    }
    else{
        var exist = document.getElementById("d2").innerHTML;
        document.getElementById("d2").innerHTML = exist + num;
    }
}
function setctr(num){
    ctr = ctr + 1;

    if(n1tr == 1 && n2tr == 1){
        ctr = 1;
        n2tr = 0;
        if(n1tr == 1){
            
            n2 = 0;
        }
    }
    opt = num;
    if(ctr>1 && n2tr!=1){
        document.getElementById("d2").innerHTML = "ERROR";
    }
}
function undo(){
    var string = document.getElementById("d2").innerHTML;
    document.getElementById("d2").innerHTML = string.substring(0,string.length-1)
}
function off(){
    history.back();
}
function checkctr(num){
    if(ctr%2 != 0){
        n2 = n2 + "" + num;
        n2tr = 1;
    }
    else{
        n1 = n1 + "" + num;
        n1tr = 1;
    }
}
function calcdup(idx1dup,idx2dup,b){
    ////alert("in dup");
    ////alert(anum.join());
    ////alert(snum.join());
    ////alert(idx1dup);
    ////alert(idx2dup);
    var bo = 0;
    var bc = 0;
    var actr = 0;
    var sctr = 0;
    var calstr = 0;
    var anumext = new Array();
    var snumext = new Array();
    var mctr = 0;
    var rem = b-1;
    //alert(idx1dup);
    //alert(idx2dup);
    for(exin = Number(idx1dup) - rem ; exin <= ((Number(idx2dup) - rem) - 1) ; exin++){
        if(anum[exin] != '÷' || anum[exin] != '*' || anum[exin] != '+' || anum[exin] != '-' || anum[exin] != '(' || anum[exin] != ')' || anum[exin] != '%'){
            anumext[actr] = Number(anum[exin]);
            actr++;
        }
    }
    for(exin = (Number(idx1dup) + 1) ; exin <= (Number(idx2dup) - 1) ; exin++){
        snumext[sctr] = snum[exin];
        sctr++;
    }
    //alert(anumext.join());
    //alert(snumext.join());
    if((snumext.length == 0) && (anumext.length == 1)){
        return anumext[0];
    }
    if((snumext.length == 1) && (anumext.length == 1)){
        if(snumext.indexOf('-') == 0)
            return 
        return anumext[0] * -1;
    }
    
    ////alert(snumext.length);
        var res1;
        ////////////alert(1);
        while(snumext.length >  0){
            //////////alert(calstr);
            ////////alert(anumext.join());
            ////////alert(snumext.join());
            // if(i == 0){
            //     calstr = anumext[i];
            //     ////////////alert(calstr);
            // }
            // else{
            //     switch(snumext[i-1]){
            //         case '+':
            //             calstr = calstr + anumext[i];
            //             break;
            //         case '-':
            //             calstr = calstr - anumext[i];
            //             break;
            //         case '*':
            //             calstr = calstr * anumext[i];
            //             break;
            //         case '/':
            //             calstr = calstr / anumext[i];
            //             break;
            //         default:
            //             console.log("Error");
            //     }
                ////////////alert(calstr); 
                if(snumext.indexOf('^') != -1){
                    var idx = snumext.indexOf('^');
                    //////alert(snumext[idx]);
                    if(snumext[idx-1] == '-'){
                        var extnum = -1 * (anumext[idx]);
                        calstr = Math.pow(extnum,anumext[idx+1]);
                        var str = calstr.toString();
                        if(str.search("-") != -1){
                            calstr = calstr * -1;
                            snumext.splice(idx,1);
                        }
                        else{
                            var extch = '+';
                            snumext.splice(idx - 1,2,extch);
                        }
                        anumext.splice(idx,2,calstr);
                        if(anumext.length == 1)
                            res1 = anumext[0];
                    }
                    else{
                        calstr = Math.pow(anumext[idx],anumext[idx+1]);
                        snumext.splice(idx,1);
                        anumext.splice(idx,2,calstr);
                        if(anumext.length == 1)
                            res1 = anumext[0]; 
                    }
                }
                else if(snumext.indexOf('÷') != -1){
                var idx = snumext.indexOf('÷');
                //////alert(snumext[idx]);
                if(snumext[idx-1] == '-'){
                    var extnum = -1 * (anumext[idx]);
                    calstr = extnum / anumext[idx+1];
                    var str = calstr.toString();
                    if(str.search("-") != -1){
                        calstr = calstr * -1;
                        snumext.splice(idx,1);
                    }
                    else{
                        var extch = '+';
                        snumext.splice(idx - 1,2,extch);
                    }
                    anumext.splice(idx,2,calstr);
                    if(anumext.length == 1)
                        res1 = anumext[0];
                }
                else{
                    calstr = anumext[idx] / anumext[idx+1];
                    snumext.splice(idx,1);
                    anumext.splice(idx,2,calstr);
                    if(anumext.length == 1)
                        res1 = anumext[0]; 
                }
            }   
            else if(snumext.indexOf('*') != -1){
                var idx = snumext.indexOf('*');
                //////alert(snumext[idx]);
                if(snumext[idx-1] == '-'){
                    var extnum = -1 * (anumext[idx]);
                    ////////alert(extnum);
                    calstr = extnum * anumext[idx+1];
                    var str = calstr.toString();
                    if(str.search("-") != -1){
                        calstr = calstr * -1;
                        snumext.splice(idx,1);
                    }
                    else{
                        var extch = '+';
                        snumext.splice(idx - 1,2,extch);
                    }
                    anumext.splice(idx,2,calstr);
                    ////////alert(calstr);
                    ////////alert(anumext.join());
                    ////////alert(snumext.join());
                    if(anumext.length == 1)
                        res1 = anumext[0];
                }
                else{
                    calstr = anumext[idx] * anumext[idx+1];
                    snumext.splice(idx,1);
                    anumext.splice(idx,2,calstr);
                    if(anumext.length == 1)
                        res1 = anumext[0]; 
                }
            } 
            else if(snumext.indexOf('%') != -1){
                var idx = snumext.indexOf('%');
                //////alert(snumext[idx]);
                if(snumext[idx-1] == '-'){
                    var extnum = -1 * (anumext[idx]);
                    calstr = extnum % anumext[idx+1];
                    var str = calstr.toString();
                    if(str.search("-") != -1){
                        calstr = calstr * -1;
                        snumext.splice(idx,1);
                    }
                    else{
                        var extch = '+';
                        snumext.splice(idx - 1,2,extch);
                    }
                    anumext.splice(idx,2,calstr);
                    if(anumext.length == 1)
                        res1 = anumext[0];
                }
                else{
                    calstr = anumext[idx] % anumext[idx+1];
                    snumext.splice(idx,1);
                    anumext.splice(idx,2,calstr);
                    if(anumext.length == 1)
                        res1 = anumext[0]; 
                }
            }   
            else if(snumext.indexOf('+') != -1){
                var idx = snumext.indexOf('+');
                //////alert(anumext.join());
                //////alert(snumext.join());
                //////alert(snumext[idx]);
                if(snumext[idx-1] == '-'){
                    var extnum = -1 * (anumext[idx]);
                    calstr = extnum + anumext[idx+1];
                    var str = calstr.toString();
                    if(str.search("-") != -1){
                        calstr = calstr * -1;
                        snumext.splice(idx,1);
                    }
                    else{
                        var extch = '+';
                        snumext.splice(idx - 1,2,extch);
                    }
                    anumext.splice(idx,2,calstr);
                    ////////alert(calstr);
                    ////////alert(anumext.join());
                    ////////alert(snumext.join());
                    if(anumext.length == 1)
                        res1 = anumext[0];
                }
                else{
                    ////////alert("spe = "+anumext[idx]);
                    ////////alert(anumext.join());
                    ////////alert(snumext.join());
                    calstr = Number(anumext[idx]) + Number(anumext[idx+1]);
                    var dis1 = snumext.splice(idx,1);
                    //////alert(dis1);
                    var dis2 = anumext.splice(idx,2,calstr);
                    //////alert(dis2);
                    if(anumext.length == 1)
                        res1 = anumext[0]; 
                }
            }
            else{
                var idx = snumext.indexOf('-');
                //////////alert(snumext[idx]);
                //////////alert(anumext.join());
                //////////alert(snumext.join());
                if(snumext[idx-1] == '-'){
                    var extnum = -1 * (anumext[idx]);
                    calstr = extnum - anumext[idx+1];
                    var str = calstr.toString();
                    if(str.search("-") != -1){
                        calstr = calstr * -1;
                        snumext.splice(idx,1);
                    }
                    else{
                        var extch = '+';
                        snumext.splice(idx - 1,2,extch);
                    }
                    anumext.splice(idx,2,calstr);
                    if(anumext.length == 1)
                        res1 = anumext[0];
                }
                else{
                    calstr = anumext[idx] - anumext[idx+1];
                    snumext.splice(idx,1);
                    anumext.splice(idx,2,calstr);
                    if(anumext.length == 1)
                        res1 = anumext[0]; 
                }
            }
        } 
        if(calstr == 0 && snumextlen == 0){
            calstr = document.getElementById("d2").innerHTML;
        }
        // document.getElementById("d1").innerHTML = document.getElementById("d2").innerHTML;
        // document.getElementById("d2").innerHTML = "" + calstr;
        // switch(opt){
        //     case 1:
        //         document.getElementById("d1").innerHTML = document.getElementById("d2").innerHTML;
        //         n1 = n1 + n2;
        //         document.getElementById("d2").innerHTML = "" + n1;
        //         n1tr = 1;
        //     break;
        //     case 2:
        //         document.getElementById("d1").innerHTML = document.getElementById("d2").innerHTML;
        //         n1 = n1 - n2;
        //         document.getElementById("d2").innerHTML = "" + n1;
        //     break;
        //     case 3:
        //         document.getElementById("d1").innerHTML = document.getElementById("d2").innerHTML;
        //         n1 = n1 / n2;
        //         document.getElementById("d2").innerHTML = "" + n1;
        //     break;
        //     case 4:
        //         document.getElementById("d1").innerHTML = document.getElementById("d2").innerHTML;
        //         n1 = n1 * n2;
        //         document.getElementById("d2").innerHTML = "" + n1;
        //     break;
        // }
        // n2 = 0;
        
        // else{
        //     document.getElementById("d1").innerHTML = document.getElementById("d2").innerHTML;
        //     n1 = parseFloat(n1);
        //     n1 = n1 + 0;
        //     document.getElementById("d2").innerHTML = parseFloat(n1);
        // }
return anumext[0];
}
function calc(){
    var bo = 0;
    var bc = 0;
    var actr = 0;
    var sctr = 0;
    var calstr = 0;
    var mctr = 0;
    var exist = document.getElementById("d2").innerHTML;
    ////////////alert(exist);
    var len = exist.length;
    //////alert(len);
    var i = 0;
    ////////////alert(len);
    while(i<len){
        if(i>=len){
            break;
        }
        var inp = exist[i];
        ////////////alert(inp);
        ////////////alert("i = "+i);
        if(inp == '+' || inp == '-' || inp == '*' || inp == '÷' || inp == '(' || inp == ')' || inp == '%' || inp == "^"){
            if(inp == '(')
                bo++;
            if(inp == ')')
                bc++;
            snum[sctr] = inp;
            if(i == 0){
                anum[actr]=0;
                actr++;  
            }
            ////////////alert(snum[sctr]);
            sctr++;
            i++;
        }
        else{
            var innerctr = 0;
            var temp = i;
            var prictr = 0;
            while((Number(exist[i]) >  -1 && Number(exist[i]) <= 9) || exist[i] == '.'){
                ////////////alert("We in");
                if(prictr > 0){
                    inp = inp + "" + exist[i];
                    ////////////alert(inp);
                }
                i++;
                prictr++;
            } 
            anum[actr] = Number(inp);
            ////////////alert(anum[actr]);
            actr++; 
        }
    }
    ////alert(anum.join());
    ////alert(snum.join());
    ////alert("bo = "+bo+" bc = "+bc);
    var snumlen = snum.length;
    if(((anum.length - 1 == snum.length) && (bo == bc)) || ((anum.length - 1 == (snum.length - (bo+bc))) && (bo == bc) && (bo > 0)) || ((anum.length * 2 == snum.length) && (bo == bc) && (((snum.join()).includes("-,(,-") == true) || ((snum.join()).includes("+,(,-") == true) || ((snum.join()).includes("-,(,+") == true) || ((snum.join()).includes("+,(,+") == true))) || ((anum.length + 2) == (snum.length)&& (bo == bc) && (((snum.join()).includes("-,(,-") == true) || ((snum.join()).includes("+,(,-") == true) || ((snum.join()).includes("-,(,+") == true) || ((snum.join()).includes("+,(,+") == true)))){
        var res1;
        ////////////alert(1);
        while(snum.length > 0){
            //////////alert(snum.length);
            //////////alert(calstr);
            ////////alert(anum.join());
            ////////alert(snum.join());
            // if(i == 0){
            //     calstr = anum[i];
            //     ////////////alert(calstr);
            // }
            // else{
            //     switch(snum[i-1]){
            //         case '+':
            //             calstr = calstr + anum[i];
            //             break;
            //         case '-':
            //             calstr = calstr - anum[i];
            //             break;
            //         case '*':
            //             calstr = calstr * anum[i];
            //             break;
            //         case '/':
            //             calstr = calstr / anum[i];
            //             break;
            //         default:
            //             console.log("Error");
            //     }
                ////////////alert(calstr); 
            if(snum.indexOf('(') != -1){
                    var idx1 = snum.lastIndexOf('(');
                    var idx2 = snum.indexOf(')');
                    var idx = idx1 + 2;

                    //alert(snum.join());
                    //alert(anum.join());
                    
                    
                    
                    calstr = calcdup(idx1,idx2,bo);
                    if(snum[idx1-1] == '-' && snum[idx1+1] == '-'){
                        //alert("Att madhe");
                        snum[idx1-1] = '+';
                        //alert(snum.splice(idx1+1,1));
                    }
                    idx2 = snum.indexOf(')');
                    //alert(snum.join());
                    //alert(anum.join());
                    snum.splice(idx1,(idx2 - idx1) + 1);
                    ////alert(snum.join());
                    ////alert(anum.join());
                    anum.splice(idx1 - (bo - 1),(idx2 - idx1 ) ,calstr);
                    if(anum.length == 1)
                        res1 = anum[0]; 
            }
            else if(snum.indexOf('^') != -1){
                var idx = snum.indexOf('^');
                //////alert(snum[idx]);
                if(snum[idx-1] == '-'){
                    var extnum = -1 * (anum[idx]);
                    calstr = Math.pow(extnum,anum[idx+1]);
                    var str = calstr.toString();
                    if(str.search("-") != -1){
                        calstr = calstr * -1;
                        snum.splice(idx,1);
                    }
                    else{
                        var extch = '+';
                        snum.splice(idx - 1,2,extch);
                    }
                    anum.splice(idx,2,calstr);
                    if(anum.length == 1)
                        res1 = anum[0];
                }
                else{
                    calstr = Math.pow(anum[idx],anum[idx+1]);
                    snum.splice(idx,1);
                    anum.splice(idx,2,calstr);
                    if(anum.length == 1)
                        res1 = anum[0]; 
                }
            }  
            else if(snum.indexOf('÷') != -1){
                var idx = snum.indexOf('÷');
                //////alert(snum[idx]);
                if(snum[idx-1] == '-'){
                    var extnum = -1 * (anum[idx]);
                    calstr = extnum / anum[idx+1];
                    var str = calstr.toString();
                    if(str.search("-") != -1){
                        calstr = calstr * -1;
                        snum.splice(idx,1);
                    }
                    else{
                        var extch = '+';
                        snum.splice(idx - 1,2,extch);
                    }
                    anum.splice(idx,2,calstr);
                    if(anum.length == 1)
                        res1 = anum[0];
                }
                else{
                    calstr = anum[idx] / anum[idx+1];
                    snum.splice(idx,1);
                    anum.splice(idx,2,calstr);
                    if(anum.length == 1)
                        res1 = anum[0]; 
                }
            }   
            else if(snum.indexOf('*') != -1){
                var idx = snum.indexOf('*');
                //////alert(snum[idx]);
                if(snum[idx-1] == '-'){
                    var extnum = -1 * (anum[idx]);
                    ////////alert(extnum);
                    calstr = extnum * anum[idx+1];
                    var str = calstr.toString();
                    if(str.search("-") != -1){
                        calstr = calstr * -1;
                        snum.splice(idx,1);
                    }
                    else{
                        var extch = '+';
                        snum.splice(idx - 1,2,extch);
                    }
                    anum.splice(idx,2,calstr);
                    ////////alert(calstr);
                    ////////alert(anum.join());
                    ////////alert(snum.join());
                    if(anum.length == 1)
                        res1 = anum[0];
                }
                else{
                    calstr = anum[idx] * anum[idx+1];
                    snum.splice(idx,1);
                    anum.splice(idx,2,calstr);
                    if(anum.length == 1)
                        res1 = anum[0]; 
                }
            } 
            else if(snum.indexOf('%') != -1){
                var idx = snum.indexOf('%');
                //////alert(snum[idx]);
                if(snum[idx-1] == '-'){
                    var extnum = -1 * (anum[idx]);
                    calstr = extnum % anum[idx+1];
                    var str = calstr.toString();
                    if(str.search("-") != -1){
                        calstr = calstr * -1;
                        snum.splice(idx,1);
                    }
                    else{
                        var extch = '+';
                        snum.splice(idx - 1,2,extch);
                    }
                    anum.splice(idx,2,calstr);
                    if(anum.length == 1)
                        res1 = anum[0];
                }
                else{
                    calstr = anum[idx] % anum[idx+1];
                    snum.splice(idx,1);
                    anum.splice(idx,2,calstr);
                    if(anum.length == 1)
                        res1 = anum[0]; 
                }
            }   
            else if(snum.indexOf('+') != -1){
                var idx = snum.indexOf('+');
                //////alert(anum.join());
                //////alert(snum.join());
                //////alert(snum[idx]);
                if(snum[idx-1] == '-'){
                    var extnum = -1 * (anum[idx]);
                    calstr = extnum + anum[idx+1];
                    var str = calstr.toString();
                    if(str.search("-") != -1){
                        calstr = calstr * -1;
                        snum.splice(idx,1);
                    }
                    else{
                        var extch = '+';
                        snum.splice(idx - 1,2,extch);
                    }
                    anum.splice(idx,2,calstr);
                    ////////alert(calstr);
                    ////////alert(anum.join());
                    ////////alert(snum.join());
                    if(anum.length == 1)
                        res1 = anum[0];
                }
                else{
                    ////////alert("spe = "+anum[idx]);
                    ////////alert(anum.join());
                    ////////alert(snum.join());
                    calstr = Number(anum[idx]) + Number(anum[idx+1]);
                    var dis1 = snum.splice(idx,1);
                    //////alert(dis1);
                    var dis2 = anum.splice(idx,2,calstr);
                    //////alert(dis2);
                    if(anum.length == 1)
                        res1 = anum[0]; 
                }
            }
            else{
                var idx = snum.indexOf('-');
                //////////alert(snum[idx]);
                //////////alert(anum.join());
                //////////alert(snum.join());
                if(snum[idx-1] == '-'){
                    var extnum = -1 * (anum[idx]);
                    calstr = extnum - anum[idx+1];
                    var str = calstr.toString();
                    if(str.search("-") != -1){
                        calstr = calstr * -1;
                        snum.splice(idx,1);
                    }
                    else{
                        var extch = '+';
                        snum.splice(idx - 1,2,extch);
                    }
                    anum.splice(idx,2,calstr);
                    if(anum.length == 1)
                        res1 = anum[0];
                }
                else{
                    calstr = anum[idx] - anum[idx+1];
                    snum.splice(idx,1);
                    anum.splice(idx,2,calstr);
                    if(anum.length == 1)
                        res1 = anum[0]; 
                }
            }
        } 
        if(calstr == 0 && snumlen == 0){
            calstr = document.getElementById("d2").innerHTML;
        }
        document.getElementById("d1").innerHTML = document.getElementById("d2").innerHTML;
        document.getElementById("d2").innerHTML = "" + calstr;
        // switch(opt){
        //     case 1:
        //         document.getElementById("d1").innerHTML = document.getElementById("d2").innerHTML;
        //         n1 = n1 + n2;
        //         document.getElementById("d2").innerHTML = "" + n1;
        //         n1tr = 1;
        //     break;
        //     case 2:
        //         document.getElementById("d1").innerHTML = document.getElementById("d2").innerHTML;
        //         n1 = n1 - n2;
        //         document.getElementById("d2").innerHTML = "" + n1;
        //     break;
        //     case 3:
        //         document.getElementById("d1").innerHTML = document.getElementById("d2").innerHTML;
        //         n1 = n1 / n2;
        //         document.getElementById("d2").innerHTML = "" + n1;
        //     break;
        //     case 4:
        //         document.getElementById("d1").innerHTML = document.getElementById("d2").innerHTML;
        //         n1 = n1 * n2;
        //         document.getElementById("d2").innerHTML = "" + n1;
        //     break;
        // }
        // n2 = 0;
        
        // else{
        //     document.getElementById("d1").innerHTML = document.getElementById("d2").innerHTML;
        //     n1 = parseFloat(n1);
        //     n1 = n1 + 0;
        //     document.getElementById("d2").innerHTML = parseFloat(n1);
        // }
    }

    else{
        document.getElementById("d2").innerHTML = "ERROR";
    }
}
