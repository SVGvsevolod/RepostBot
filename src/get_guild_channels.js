module.exports = function(a,b){
    var c = [],
        d = a.cache.entries(),
        e;
    do{
        e = d.next();
        if(e.value && e.value[1].viewable && ( e.value[1].type==0 || e.value[1].type==2 ) && (!b || b && e.value[1].nsfw))
            c.push([e.value[0],e.value[1].name]);
    } while (!e.done);
    return c;
}