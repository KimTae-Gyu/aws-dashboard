const xValues = [50,60,70,80,90,100,110,120,130,140,150];
const yValues = [7,8,8,9,9,9,10,11,14,14,15];

const firstlog1 = new Chart("firstlog1",{
    type: "line",
    data: {
        labels: xValues,
        datasets:[{
            backgroundColor:"rgba(0,0,255,1.0)",
            borderColor: "rgba(0,0,255,0.1)",
            fill: false,
            data: yValues
        }]
    }
});

const firstlog2 = new Chart("firstlog2",{
    type: "line",
    data: {
        labels: xValues,
        datasets:[{
            backgroundColor:"rgba(0,0,255,1.0)",
            borderColor: "rgba(0,0,255,0.1)",
            fill: false,
            data: yValues
        }]
    }
});

const secondlog = new Chart("secondlog",{
    type: "line",
    data: {
        labels: xValues,
        datasets:[{
            backgroundColor:"rgba(0,0,255,1.0)",
            borderColor: "rgba(0,0,255,0.1)",
            fill: false,
            data: yValues
        }]
    }
});

const thirdlog = new Chart("thirdlog",{
    type: "line",
    data: {
        labels: xValues,
        datasets:[{
            backgroundColor:"rgba(0,0,255,1.0)",
            borderColor: "rgba(0,0,255,0.1)",
            fill: false,
            data: yValues
        }]
    }
});
