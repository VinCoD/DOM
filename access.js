const demoId = document.getElementById('demo');
const demoClass = document.getElementsByClassName('demo');
const demoTag = document.getElementsByTagName('article');
const demoQuery = document.querySelector('#demo-query');
const demoQueryAll = document.querySelectorAll('.demo-query-all');

demoId.style.border = "1px solid purple";

for(i=0; i<demoClass.length; i++){
    demoClass[i].style.border = "1px solid orange";
}

for (i=0; i<demoTag.length; i++){
    demoTag[i].style.border = "1px solid blue";
}

demoQuery.style.border = "1px solid red";


for(i=0; i<demoQueryAll.length; i++){
    demoQueryAll[i].style.border = "1px solid green";
}