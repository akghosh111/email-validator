console.log("this is the script");

document.addEventListener("DOMContentLoaded", function () {
    const submitBtn = document.querySelector(".btn");
    submitBtn.addEventListener("click", async (e) => {
        e.preventDefault();
        console.log("clicked");
        const key = ""; //enter your api key here
        const email = document.getElementById("username").value;
        const url = `https://api.emailvalidation.io/v1/info?apikey=${key}&email=${email}`;
        
        try {
            const res = await fetch(url);
            const result = await res.json(); // Fixed: added parentheses to res.json()
            let str = '';
            for (const prop of Object.keys(result)) { // Changed variable name from key to prop to avoid conflict
                if(result[prop] !=="" && result[prop] !==" "){
                    str = str + `<div>${prop}: ${result[prop]}</div>`;

                }
                
            }
            console.log(str);
            const resultCont = document.getElementById("resultCont");
            if (resultCont) {
                resultCont.innerHTML = str;
            } else {
                console.error("resultCont element not found!");
            }
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    });
});
