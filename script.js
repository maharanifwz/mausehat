mapboxgl.accessToken = 'pk.eyJ1IjoibWFoYXJhbmlmd3oiLCJhIjoiY2tyNXVyYTZiMzk2cjJubW43enpzeHpyNSJ9.BHoMCgF8bNr9Ittp2E6UfA';

//buat tau location yg dituju
navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
    enableHighAccuracy: true
})

function successLocation(position) {
    setupMap([position.coords.longitude, position.coords.latitude])
}

function errorLocation() {
    setupMap([-7.955221, 112.631396])
}

function setupMap(center) {
    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: center,
        zoom: 15
    })

    const nav = new mapboxgl.NavigationControl();
    map.addControl(nav)

    var directions = new MapboxDirections({
        accessToken: mapboxgl.accessToken
      })
    
      map.addControl(directions, "top-left")
}

function myFunction() {
    alert("Make sure all the data that you filled already correct!")
    alert("Your vaccine has been booked, please come to vaccinate location to re-register in the d-day of your vaccine schedule")
    alert("Click ok to show full report")
}

