const p = new Promise((resolve, reject) => {
    let app = "BMS";
    if(app === "MS") {
        resolve();
    } else {
        reject(new Error("BMS is not found"));
    }
});

p.then(() => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Open the BMS");
            resolve();
        }, 8000);
    });
})

.then(() => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Choose the movie");
            resolve();
        }, 5000);
    });
})

.then(() => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Book the seats");
            resolve();
        }, 6000);
    });
})

.then(() => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Pay the cash");
            resolve();
        }, 7000);
    });
})

.then(() => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Ticket confirmed");
            resolve();
        }, 8000);
    });
})

.catch((e) => {
    console.log("Error accured :", e.message);
})

.finally(() => {
    console.log("close the phone");
})