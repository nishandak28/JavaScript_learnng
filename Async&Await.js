function wait(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

async function Book() {
    await wait(8000);
    console.log("Open BMS");
    await wait(2000);
    console.log("select movie in BMS");
    await wait(3000);
    console.log("Select the seats");
    await wait(7000);
    console.log("pay the amount");
    await wait(9000);
    console.log("Ticket Confirmed");
}

Book();