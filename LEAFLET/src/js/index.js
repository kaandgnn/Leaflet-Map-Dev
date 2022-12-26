import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js";
import { getDatabase , get, child, ref as rf} from "https://www.gstatic.com/firebasejs/9.4.0/firebase-database.js";

//database konfigüre ediliyor
const firebaseConfig = {
    apiKey: "AIzaSyCF7uOMVYoo-e6sZMhbnqNQzlvkHtFCxQE",
    authDomain: "muh-tas-46dc5.firebaseapp.com",
    databaseURL: "https://muh-tas-46dc5-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "muh-tas-46dc5",
    storageBucket: "muh-tas-46dc5.appspot.com",
    messagingSenderId: "375996400183",
    appId: "1:375996400183:web:0617d976a14e5ad6a8b5b2"
};

//haritamız baslangıc ayarlarıyla setleniyor
var map = L.map('map').setView([40.9965, 39.74853], 14);
const osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: ' <a </a> BMK',
    subdomains: 'abcd',
    maxZoom: 18,
});

//search box ekleniyor
L.Control.geocoder().addTo(map);
osm.addTo(map);

// Firebase Kurulumu
initializeApp(firebaseConfig);

//databaseden konum verileri çekiliyor
const dbRef = rf(getDatabase());
const data = await get(child(dbRef, `locations/`)).then((snapshot) => {
    if (snapshot.exists()) {
        return snapshot.val()
    } else {
        console.log("No data available");
    }
}).catch((error) => {
    console.error(error);
});

// Carousel, slider

//databaseden alınan veriler ve görseller konumların üzerinde işaret edilerek pop-uplar içerisinde görüntüleniyor.
data.forEach((element,index) => {
    console.log(index)
    L.marker([element.coordinateX, element.coordinateY]).addTo(map)
        .bindPopup(`<b> <a href="https://www.google.com/" target="_blank"> ${element.name}</a> </b><br><i> ${element.adress} </i><br> <img src="${element.URL}"width="300">`)
})





//gs://muh-tas-46dc5.appspot.com/images/1/1.jpeg
// "${element.URL}"


// imagesRef.listAll().then(function(result) {
//     result.items.forEach(function(imageRef) {
//         // Resim URL'sini çekin
//         imageRef.getDownloadURL().then(function(url) {
//             // Marker oluşturun ve pop-up ekleyin
//             var marker = L.marker([lat, lng]).addTo(map);
//             marker.bindPopup("<img src='" + url + "'>");
//         });
//     });
// });
//



// const storage =firebase.storage();
// var imagesRef = storage.ref('images');
// imagesRef.listAll().then(function(result) {
//     result.items.forEach(function(imageRef) {
//         // Burada her bir resim için işlem yapabilirsiniz
//     });
// });


//import { getDownloadURL, getStorage, ref} from "https://www.gstatic.com/firebasejs/9.4.0/firebase-storage.js";

// const storage = getStorage();
// const sparkyRef = ref(storage, 'images/1');
// // images içindeki tüm resimleri alma
// getDownloadURL(sparkyRef).then((url)=>{
//     const xhr = new XMLHttpRequest();
//     xhr.responseType = "blob";
//     xhr.onload = () => {
//         const blob = xhr.response;
//     }
//     xhr.open('GET',url)
//     xhr.send()
//     const img = document.getElementById('myimg');
//     console.log(url);
//  //   img.setAttribute('src',url);
// })

// console.log(data)




// const URL = await get(child(dbRef, data.URL)).then((snapshot)=> {
//
//     if(snapshot.exists()){
//         return snapshot.val()
//     } else {
//         console.log("No URL available");
//     }
// }).catch((error)=> {
//     console.error(error);
// })
