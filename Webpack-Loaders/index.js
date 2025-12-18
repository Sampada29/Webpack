import image from "./assets/image.svg";
import smile from "./assets/smile.avif";
import "./style/style.css";
import "./style/style.scss";

document.getElementById("toast").style.visibility = "hidden";

document.getElementById("title").addEventListener("click", () => {
    document.getElementById("toast").style.visibility = "visible";
});

document.getElementById("logo").src = smile;
document.getElementById("bg_image").src = image;