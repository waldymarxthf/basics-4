function buildFun(n){
    const res = [];

    function creatNum(index){
        return function(){
            return index;
        };
    }
        for (let i = 0; i < n; i++) {
            res.push(
            creatNum(i));
    }
    return res;

};

for(let i = 0; i < 10; i++) {
    console.log(buildFun(10)[i]());
}

