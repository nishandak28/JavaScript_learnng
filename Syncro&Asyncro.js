
// Asynchronous execution  & executed based on the time assaingned to wai

// setTimeout(() => {
//     console.log("Open BookMyShow");
// }, 8000);
// setTimeout(() => {
//     console.log("select Movie");
// }, 3000);
// setTimeout(() => {
//     console.log("select seat");
// }, 4000);
// setTimeout(() => {
//     console.log("Make Payment");
// }, 8000);
// setTimeout(() => {
//     console.log("Ticket booked");
// }, 8000);

// console.log("-----------------------");

// To over come this promblem use call back
setTimeout(() => {
    console.log("Open BookMyShow");
        setTimeout(() => {
            console.log("select Movie");
                setTimeout(() => {
                    console.log("select seat");
                        setTimeout(() => {
                        console.log("Make Payment");
                            setTimeout(() => {
                                console.log("Ticket Book");
                        }, 4000);
                    }, 8000);
                }, 4000);
        }, 3000);
}, 8000);
