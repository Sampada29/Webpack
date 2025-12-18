import image from "./assets/image.svg";
import smile from "./assets/smile.avif";

document.getElementById("toast").style.visibility = "hidden";

document.getElementById("title").addEventListener("click", () => {
    document.getElementById("toast").style.visibility = "visible";
});

document.getElementById("logo").src = smile;
document.getElementById("bg_image").src = image;