function initMap() {
  const myLatLng = {
    lat: 10.011054992675781,
    lng: -84.22055053710938
  };
  /* crea el mapa en el div gmp-map */
  const map = new google.maps.Map(document.getElementById("gmp-map"), {
    zoom: 14,/*nivel de zoom del mapa*/
    center: myLatLng,/*Ubicacion central del mapa */
    fullscreenControl: false, /**Desactiva el control de pantalla completa */
    zoomControl: true, /*habilita el control de zoom*/
    streetViewControl: false /*desactiva vista de calle*/
  });
  /*agrega el marcador a la ubicacion deseada*/
  new google.maps.Marker({
    position: myLatLng, /*ubicacion donde se aplica el marcador*/
    map,/*mapa en el que se aplica*/
    title: "Food House"/*titulo de mi marcador*/
  });
}