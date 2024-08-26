type Result = "success" | "error" | "pending";

let currentResult: Result = "pending";

function handleResult(result: Result) {
    switch (result) {
        case "success":
            console.log("Result: success!");
            break;
        case "error":
            console.log("Result: error!");
            break;
        case "pending":
            console.log("Result: pending!");
            break;
    }
}
 handleResult("success")
 handleResult("pending")
 handleResult("error")