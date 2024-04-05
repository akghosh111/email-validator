console.log("chup bsdk");

document.addEventListener("DOMContentLoaded", function() {
    let result = {
        "tag": "",
        "free": true,
        "role": false,
        "user": "anukiranghosh",
        "email": "anukiranghosh@gmail.com",
        "score": 0.64,
        "state": "deliverable",
        "domain": "gmail.com",
        "reason": "valid_mailbox",
        "mx_found": true,
        "catch_all": null,
        "disposable": false,
        "smtp_check": true,
        "did_you_mean": "",
        "format_valid": true
    };

    let str = '';
    for (key of Object.keys(result)) {
        str = str + `<div>${key}: ${result[key]}</div>`;
    }
    console.log(str);
    let resultCont = document.getElementById("resultCont");
    if (resultCont) {
        resultCont.innerHTML = str;
    } else {
        console.error("resultCont element not found!");
    }
});
