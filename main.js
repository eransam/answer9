

function test(callBack) {
    setTimeout(()=>{const rando = callBack(10);console.log("rando" , rando);},5000);
    console.log();
}


    function displayRandomNumAfterDelay(limit) {
            const random = Math.floor(Math.random() * limit);
            console.log(random);
            return random;    
    }

    function test1(callBack) {
        callBack();
    }