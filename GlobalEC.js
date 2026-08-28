let a = 10;
function outer() {
    let b =10;
    function inner() {
        if(true) {
            let c = 10;
            console.log(a);
            console.log(b);
            console.log(c);
        }
    }
    inner();
}
outer();