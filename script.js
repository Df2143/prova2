const canzone1={
    titolo: "Nel blu dipinto di blu",
    informazioni: "Brano di Domenico Modugno",
    immagineCopertina: "immagini/nelBluDipintoDiBluImm.jpg",
    audioCanzone: "audio/Volare.mp3",
    linkVideo: "https://www.youtube.com/watch?v=6jWsIpAbo-8"    
}
const canzone2={
    titolo: "Apartment 402",
    informazioni: "Brano del 2021, autore: girl in red",
    immagineCopertina: "immagini/apartment402.jpg",
    audioCanzone: "audio/Apartment402.mp3",
    linkVideo: "https://www.youtube.com/watch?v=eIdD-fq7BGE"    
}

const canzone3={
    titolo: "Save your tears",
    informazioni: "Brano di The Weeknd",
    immagineCopertina: "immagini/saveyourtears.jpg",
    audioCanzone: "audio/saveyourtears.mp3",
    linkVideo: "https://www.youtube.com/watch?v=XXYlFuWEuKI"    
}


document.getElementById("immagine1").src=canzone1.immagineCopertina;
document.getElementById("titolo1").innerText = canzone1.titolo;
document.getElementById("video1").src = canzone1.linkVideo;

document.getElementById("immagine2").src=canzone2.immagineCopertina;
document.getElementById("titolo2").innerText = canzone2.titolo;
document.getElementById("video2").src = canzone2.linkVideo;

document.getElementById("immagine3").src=canzone3.immagineCopertina;
document.getElementById("titolo3").innerText = canzone3.titolo;
document.getElementById("video3").src = canzone3.linkVideo;



function funzioneInfo(v){
    var i=null;
    if (v == 1){
        i = document.getElementById("pInfo1");
        if (i.innerText == canzone1.informazioni){
            i.innerText = "";
        }else{
            i.innerText = canzone1.informazioni;
        }
    }else if(v == 2){
        i = document.getElementById("pInfo2");
        if (i.innerText == canzone2.informazioni){
            i.innerText = "";
        }else{
            i.innerText = canzone2.informazioni;
        }
    }else if (v == 3) {
        i = document.getElementById("pInfo3");
        if (i.innerText == canzone3.informazioni){
            i.innerText = "";
        }else{
            i.innerText = canzone3.informazioni;
        }
    }
    

    

}
let staSuondando = false;
let audio = null;
function riproduci(v){
    if(v == 1){
        if(!staSuondando){
            audio = new Audio(canzone1.audioCanzone);
            audio.play();
            staSuondando = true;
    
            
        }else{
            audio.pause();
            staSuondando = false;
        }
    }else if(v == 2){
        if(!staSuondando){
            audio = new Audio(canzone2.audioCanzone);
            audio.play();
            staSuondando = true;
    
            
        }else{
            audio.pause();
            staSuondando = false;
        }
    }else if(v == 3){
        if(!staSuondando){
            audio = new Audio(canzone3.audioCanzone);
            audio.play();
            staSuondando = true;
    
            
        }else{
            audio.pause();
            staSuondando = false;
        }
    }
    
}

