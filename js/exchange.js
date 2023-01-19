const units = {
  USD: {
    USD: 1,
    KRW: 1242,
    JPY: 127.78,
    unit: "$",
  },

  KRW: {
    USD: 0.0008,
    KRW: 1,
    JPY: 0.1,
    unit: "₩",
  },
  
  JPY: {
    USD: 0.78,
    KRW: 971.95,
    JPY: 1,
    unit: "¥",
  },
};

let fromM = "USD";
let toM = "USD";


document.querySelectorAll("#dropdown-from a").forEach((item) => {
  item.addEventListener("click", function () {
    document.querySelector("#frombtn").textContent = this.textContent;
    fromM = this.textContent;
    convert();
    
  });
});

document.querySelectorAll("#dropdown-to a").forEach((item) => {
  item.addEventListener("click", function () {
    document.querySelector("#tobtn").textContent = this.textContent;
    toM = this.textContent;
    convert();
  });
});


// document.querySelector("#frommoney").addEventListener('onkeyup', convert);

function convert(){
  let f = document.getElementById('frommoney').value;
  let t = f * units[fromM][toM];
  document.getElementById("tomoney").value = t;
}


