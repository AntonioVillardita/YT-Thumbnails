const ytUrl = document.getElementById("ytUrl");
const btnVai = document.getElementById("btnVai");

btnVai.addEventListener("click", () => {

    let getUrl = ytUrl.value;

    let dividiUrl = getUrl.split("=");
    
    ytUrl.value = `https://img.youtube.com/vi/${dividiUrl[1]}/maxresdefault.jpg`;

});
