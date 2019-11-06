var cnt=0;
function Collapse2(){
    var a = document.getElementById('collapse');
    console.log(a.className);
    if(a.className === 'collapse-o'){
        a.setAttribute('class','collapse-c');
    }
    else{
        a.setAttribute('class','collapse-o');
    }
}
var t=0;
function add()
{
    t++;
    var name = document.getElementById('taskname').value;
    var node = document.createElement('li');
    var inp = document.createElement('input');
    inp.setAttribute("onclick","calculate()");
    inp.setAttribute("type","checkbox");
    inp.setAttribute("id","task"+t);
    node.appendChild(inp);
    var textnode = document.createTextNode(" " + name);
    node.appendChild(textnode);
    var ul = document.getElementById('ul_list');
    ul.appendChild(node);
    document.getElementById('have').innerHTML = t;
    var percent = Math.trunc(cnt/t*100);
    console.log(percent);
    document.getElementById('progress').style.width = percent + "%";
    document.getElementById('view').innerHTML = percent + "%";
}
var s=0;
function calculate()
{
    cnt=0;
    for(i = 1; i <= t; ++ i)
    {
        var id = "task"+i;
        var d = document.getElementById(id).checked;
        if(d)
            cnt++;
    }
    var percent = Math.trunc(cnt/t*100);
    document.getElementById('progress').style.width = percent + "%";
    document.getElementById('view').innerHTML = percent + "%";  
    document.getElementById('complete').innerHTML = cnt;
}