var a=document.getElementById("audio");
var arr=[
    {

        "song": "music/Tum Hi Ho - Aashiqui 2 128 Kbps.mp3",
        "singer": "Arjit Singh",
        "image":"images/Tumhiho.jpg",
        
    },
      {
        "song": "music/Saiyaara(KoshalWorld.Com).mp3",
        "singer": "Siyara",
        "image":"images/indian-singer-arijit-singh.jpg",
        
    },
    {
        "song": "music/6 Am Glory 128 Kbps.mp3",
        "singer": "Honey Singh",
        "image":"images/6-Am-Glory-500-500.jpg",
        
    },
   {
        "song": "music/Akhiyaan Gulaab - Teri Baaton Mein Aisa Uljha Jiya 128 Kbps.mp3",
        "singer": "Mitraj",
   
        "song": "music/Saiyaara(KoshalWorld.Com).mp3",
        "title": "Saiyaara",
        "image":"images/indian-singer-arijit-singh.jpg",
        
    },
   {
        "song": "music/Akhiyaan Gulaab - Teri Baaton Mein Aisa Uljha Jiya 128 Kbps.mp3",
        "title": "Mitraj",

        "image":"images/mitraj1.jpeg"
    },
     {
        "song": "music/Ishq - Mitraz 128 Kbps.mp3",

        "singer": "Mitraj",
        "image":"images/mitraj2.jpeg"
    },
    {
        "song": "music/Desi Kalakaar Yo Yo Honey Singh 128 Kbps.mp3",
        "singer": "Honey Singh",
        "image":"images/Desi-Kalakaar-Yo-Yo-Honey-Singh-500-500.jpg"
    },
     {
        "song": "music/Manave - The PropheC 128 Kbps.mp3",
        "singer": "Mitraj",

        "title": "Mitraj",
        "image":"images/mitraj2.jpeg"
    },
     {
        "song": "music/Manave - The PropheC 128 Kbps.mp3",
        "title": "Mitraj",

        "image":"images/mitraj3.jpeg"
    },
     {
        "song": "music/Saajna - Mitraz 128 Kbps.mp3",

        "singer": "Mitraj",
        "title": "Mitraj",

        "image":"images/mitraj1.jpeg"
    },
    {
        "song": "music/Khayaal - Zehen 128 Kbps.mp3",

        "singer": "Mitraj",
        "title": "Mitraj",

        "image":"images/mitraj3.jpeg"
    }
]
function aplay(){
    //window.alert("hiii");
    a.play();
    document.getElementById("pl").style.display="none";
    document.getElementById("pa").style.display="inline";
}
function apause(){
    a.pause();
     document.getElementById("pl").style.display="inline";
    document.getElementById("pa").style.display="none";

}
var i=0;
function nxt(){
    //window.alert("hii");
    i=i+1;
    if(arr.length==i){
        i=0;
    }
    a.src=arr[i].song;
 
    document.getElementById("pl").style.display="none";
    document.getElementById("pa").style.display="inline";
    document.getElementById("box").style.backgroundImage="url("+arr[i].image+")";
    document.getElementById("b").innerHTML=arr[i].singer;

    document.getElementById("box").style.backgroundImage="url("+arr[i].image+")";
    document.getElementById("box").style.innerHTML="arr[i].title";

    a.play();
}
function bck(){
    i=i-1;
    if(i<0){
        i=arr.length-1;
    }
    a.src=arr[i].song;

    document.getElementById("pl").style.display="none";
    document.getElementById("pa").style.display="inline";
    document.getElementById("box").style.backgroundImage="url("+arr[i].image+")";
    document.getElementById("b").innerHTML=arr[i].singer;
    a.play();
}
a.addEventListener("ended", function() {
    nxt();  // call next song function automatically
});
var a = document.getElementById("audio");
var progress = document.getElementById("progress");
var current = document.getElementById("current");
var duration = document.getElementById("duration");

// Load first song
a.src = arr[i].song;

// Update total duration when metadata is loaded
a.addEventListener("loadedmetadata", function() {
    duration.textContent = formatTime(a.duration);
    progress.max = Math.floor(a.duration);
});

// Update current time and progress bar as song plays
a.addEventListener("timeupdate", function() {
    current.textContent = formatTime(a.currentTime);
    progress.value = Math.floor(a.currentTime);
});

// Seek functionality
progress.addEventListener("input", function() {
    a.currentTime = progress.value;
});

// Format seconds to mm:ss
function formatTime(seconds) {
    var min = Math.floor(seconds / 60);
    var sec = Math.floor(seconds % 60);
    if (sec < 10) sec = "0" + sec;
    return min + ":" + sec;
}
   
    document.getElementById("box").style.backgroundImage="url("+arr[i].image+")";
    document.getElementById("box").style.innerHTML="arr[i].title";
    a.play();



