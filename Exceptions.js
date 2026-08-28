//Exception handling

    console.log("program started");
    try {
        let a = 10/5;
        console.log(a);
    } 
    catch(error) {
        console.log("error Accoured : ", error.message);
    }
    finally {
        console.log("closing all the resources");
    }

    //USER defined eexception throw
    console.log("program started");
    let age = 12;
    try {
        if(age < 18){
            throw new Error("Age is less than 18, Not eligiblee");
        }
    }
    catch(e) {
        console.log(e.message);
    }
    finally {
        console.log("done");
    }
    