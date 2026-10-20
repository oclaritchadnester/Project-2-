const yesBtn = document.getElementById("yes-btn");
const noBtn = document.getElementById("no-btn");
const mainContent = document.getElementById("main-content");

let noCount = 0;

noBtn.addEventListener("click", function () {
    noCount++;

    noBtn.textContent = "Maybe 🥺";

    // Make the Yes button bigger
    const newSize = 18 + (noCount * 10);
    yesBtn.style.fontSize = newSize + "px";
    yesBtn.style.padding = "15px 30px";
});

yesBtn.addEventListener("click", function () {
    mainContent.innerHTML =
        "<h1> :) :) :)  </h1>" +
        "<div style='font-size:100px;'>I LIKE YOU TOO, HAHAHA GOT YOU!!</div>" +
        "<h2>I knew you'd say yes CASSY HAHAHAHH, I just want you to know ra, nga crush tika, I dont care if dli ta mutual feelings, wala  nag share rako sa akong side para dili nako sgeg parinig sa notes HAHAHA, and yun lang, Stay Pretty & Cute and I Hope nga imong Relationship with GOD kay mas mo lig-on, GOD BLESS YOU ALWAYS. </h2>";
       
});