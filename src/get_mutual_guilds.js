module.exports = async function(a,b){
    var c = [],
        d = a.cache.entries(),
        e;
    do{
        e = d.next();
        if(e.value){
            try{
                var a = await e.value[1].members.fetch(b);
                c.push([e.value[0],e.value[1].name]);
            } catch(x) {}
        }
    } while (!e.done);
    return c;
};