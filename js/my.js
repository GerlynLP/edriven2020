var month, day;
month = parseInt(prompt("Month (1-12)"));
day = parseInt(prompt("Day (1-7)"));

var monthdate = ["January","February","March","April","May","June","July","August","September","October","November","December"];
var daydate = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

var tbody = document.getElementById("cal");
var today = 1;
var checker = 0;
var end = true;
if(month < 13 && day < 8 && month > 0 && day > 0){
    var m = document.getElementById("month");
    var monthTextNode = document.createTextNode(monthdate[month - 1]);
    m.appendChild(monthTextNode);   
    while(end){
        var tr = document.createElement("tr");
        for(var n = 0; n < daydate.length; n++){
            if(n == day - 1){
                if(checker == 1){
                    var td = document.createElement("td");
                    var tdTextNode = document.createTextNode(today);
                    td.appendChild(tdTextNode);
                    tr.appendChild(td);
                    tbody.appendChild(tr);
                    if(n == 0){
                        td.className =  "bg";
                    }
                    today++;
                }
                else{
                    var td = document.createElement("td");
                    var tdTextNode = document.createTextNode(today);
                    
                    td.appendChild(tdTextNode);
                    tr.appendChild(td);
                    tbody.appendChild(tr);
                    
                    if(n == 0){ 
                        td.className =  "bg";
                    }
                    today++;
                    checker = 1;
                }
            }
            else{
                if(checker == 1){
                    if(today >= 32 && (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12)){ 
                        end = false;
                        break;
                    }
                    else if(today >= 31 && (month == 4 || month == 6 || month == 9 || month == 11 )){ 
                        end = false;
                        break;
                    }
                    else if(today >= 28 && (month == 2)){
                         
                        var td = document.createElement("td");
                        var tdTextNode = document.createTextNode('28');
                            
                        td.appendChild(tdTextNode);
                        tr.appendChild(td);
                        tbody.appendChild(tr);
                           
                        if(n == 0){ 
                            td.className =  "bg";
                        }
                        end = false;
                        break;
                    }
                    else{ 
                        var td = document.createElement("td");
                        var tdTextNode = document.createTextNode(today);
                        
                        td.appendChild(tdTextNode);
                        tr.appendChild(td);
                        tbody.appendChild(tr);
                        
                        if(n == 0){
                            td.className =  "bg";
                        }
                        today++;
                    }
                }
                else{ 
                    var td = document.createElement("td");
                    var tdTextNode = document.createTextNode('');
                    
                    td.appendChild(tdTextNode);
                    tr.appendChild(td);
                    tbody.appendChild(tr);
                    
                    if(n == 0){
                        td.className =  "bg";
                    }
                }
            }
        }
    }
}
else{
    var head = document.getElementById("invalid input");
    var headTextNode = document.createTextNode("Invalid Input");
    head.appendChild(headTextNode);
}
