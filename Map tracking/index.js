const form = document.querySelector(".form")


if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
        function (position) {
            const { latitude } = position.coords;
            const { longitude } = position.coords;
            const locationURL = `https://www.google.pt/maps/@${latitude},${longitude}`
            console.log(`https://www.google.pt/maps/@${latitude},${longitude}`);

            const coords = [latitude, longitude]

            const map = L.map('map').setView(coords, 13);

            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(map);

            L.marker(coords).addTo(map)
                .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
                .openPopup();

            map.on("click", function (mapEvent) {  // adding event listener using leaflet methods provided
                console.log(mapEvent);
                // const {lat, lng} = mapEvent.latlng
                
                // L.marker([lat, lng]).addTo(map)
                // .bindPopup(L.popup({
                //     maxWidth: 250,
                //     minWidth: 100,
                //     autoClose: false,
                //     closeOnClick: false,
                // }))
                // .setPopupContent('Working Here')
                // .openPopup()
            })
        },
        function () {
            alert('Your Location not found');
        }
    )
}