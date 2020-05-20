var pointGroupLayer;

// Returns different colors depending on the string passed


var notes = ["index","Longitude","Latitudine"];


// addPoints is a bit simpler, as no GeoJSON is needed for the points
// It does the same check to overwrite the existing points layer once the Google Sheets data comes along

function addPoints(data) {
  if (pointGroupLayer != null) {
    pointGroupLayer.remove();
  }
  
   for (var row = 0; row < data.length; row++) {
    var marker = L.marker([data[row].Latitude, data[row].Longitude]).addTo(pointGroupLayer);

      marker.feature = {
        properties: {
        ID:data[row].index,
        Lon:data[row].Longitude,
        Lat:data[row].Latitude
      }
    };
    
    marker.on({
      click: function(e) {
        L.DomEvent.stopPropagation(e);
        document.getElementById("sidebar-title").innerHTML =
          e.target.feature.properties.index;
        document.getElementById("sidebar-content").innerHTML =
          "<strong>ID</strong>:"+e.target.feature.properties.index + "<br>" +
          "<strong>Longitudine</strong>:"+e.target.feature.properties.Longitude + "<br>" +
          "<strong>Latitudine</strong>:"+e.target.feature.properties.Latitude + "<br>" + 
          "<strong>Campionatore</strong>:"+"Alfonso Crisci IBE CNR"+ "<br>"+ 
          "<strong>Foto</strong>:"+"<br>"+
          "<img src=''>"+ "<br>";
             
      sidebar.open(panelID);
      }
    });
    
    // AwesomeMarkers is used to create fancier icons

    var icon = L.AwesomeMarkers.icon({
       icon: "info-sign",
       markerColor: data[row].categoria,
       prefix: "glyphicon",
       extraClasses: "fa-rotate-0"
    });
    marker.setIcon(icon);
  }
}

