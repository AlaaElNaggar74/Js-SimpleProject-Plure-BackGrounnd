let joinUsbutt = document.getElementById("butt");
let hompag = document.getElementById("hompag");
let loginpage = document.getElementById("secdiv");
let info = document.getElementById("info");
let xicon = document.getElementById("xicon");
let manconm = document.getElementById("manconm");

joinUsbutt.addEventListener("click", () => {
  hompag.style.cssText = "display:none ";
  manconm.style.cssText = "filter: blur(5px)";
  loginpage.style.display = "flex";
  info.classList.add("act");
  info.classList.remove("unact");
});

xicon.addEventListener("click", () => {
  hompag.style.display = "block";
  manconm.style.cssText = "filter: blur(0)";
 
  info.classList.remove("act");
  info.classList.add("unact");
  setTimeout(() => {
    loginpage.style.display = "none";
  }, 1000);

});
