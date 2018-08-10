function zigzag(a)  {
    for(var i =0;i<a.length;i++)    {
        if(a[i] > a[i-3]  && a[i] < a[i+3])
        return console.log (a.length);
    }
}

zigzag([9,8,8,5,3,5,3,2,8,6]);