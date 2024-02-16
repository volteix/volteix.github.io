var i=0;
setInterval(function(){
    var titles=[
"|v|",
"|vo|",
"|vol|",
"|volt|",
"|volte|",
"|voltei|",
"|volte|",
"|volt|",
"|vol|",
"|vo|",
"|v|",
"|vo|",
"|vol|",
"|volt|",
"|volte|",
"|voltei|",
"|volte|",
"|volt|",
"|vol|",
"|vo|",
"|v|",
]

    if(i===titles.length) {
        i=0;
    }
    document.title = titles[i];
    i++;
}, 500);

