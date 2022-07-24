import './style.css'
import image from "./assets/image.svg";
const dragAndDropImageTag = document.querySelector<HTMLImageElement>("#drag");

dragAndDropImageTag.src = image;

const fileUploadInput = document.querySelector<HTMLInputElement>("#fileUploadDragAndDrop");
const dropZoneElement = document.querySelector<HTMLDivElement>("#dropZone");


dropZoneElement.addEventListener("dragover", (e) => {
    e.preventDefault();
});

dropZoneElement.addEventListener("drop", (e) => {
    e.preventDefault();
    let type = e.dataTransfer.files["0"].type;
    if( type === "image/jpeg" || type === "image/png") {
        console.log("🚀 ~ file: index.ts ~ line 22 ~ dropZoneElement.addEventListener ~ e.dataTransfer.files", e.dataTransfer.files);
    } else {
        throw new Error("File type not supported!");
    }
});


function upload(file:File) {

}

