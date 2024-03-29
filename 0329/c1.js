"use strict";
let R = null;

let b1 = document.querySelector("#b1");
let chart1 = null; // for the chart that we will show inside the c1 canvas
async function loadd() {
    // fetch
    let url = `https://juxinglong.github.io/static/data/states.json`;

    let r = await fetch(url);
    let rj = await r.json();

    let c1 = document.querySelector("#c1");
    if (chart1 != null) // if there is a chart already, destroy it
    {
        chart1.destroy();
    }
    c1.innerHTML = ``; //clean the canvas to show another chart

    let opts =
    {
        type: "pie",
        data:
        {
            labels: rj.map(x => x.st),

            dataset: [
                { data: rj.map(x => x.p), },
            ],
        },
    };

    chart1 = new Chart(c1, opts);

    R = rj; // R = table
    console.log(rj);

    Swal.fire("Load data"); // calling sweetalert
}

b1.addEventListener("click", loadd);