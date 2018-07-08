<script>
        {{ with .Params.map_directions }}
        var map_d = {{ . }}
        {{ end }}

          function hoge(k,DirecRenderer,DirecService,request) {
            DirecService[k].route(request, function(result, status) {
              if (status == 'OK') {
                console.log(DirecRenderer);
                console.log(DirecService);
                console.log(request);
                console.log(k);
                // c.setDirections(result);
                DirecRenderer[k].setDirections(result);
              }
            })
          }

          function directionMap() {

            var basemap = new google.maps.LatLng(35.681167, 139.767052);
            var DirecService = [];
            var DirecRenderer = [];
            var array6 = [];

            for(var k =0; k < map_d.length; k++){
              id = map_d[k][0];
              strt = map_d[k][1];
              end = map_d[k][2];
              travelMode = map_d[k][3];

              // b = new google.maps.DirectionsService();
              // c = new google.maps.DirectionsRenderer();
              
              DirecService[k] = new google.maps.DirectionsService();
              DirecRenderer[k] = new google.maps.DirectionsRenderer();

              var mapOptions = {
                zoom: 12,
                center: basemap
              };
              
              // d = new google.maps.Map(document.getElementById(id), mapOptions);
              // c.setMap(d);
              array6[k] = new google.maps.Map(document.getElementById(id), mapOptions);
              DirecRenderer[k].setMap(array6[k]);

              var request = {
                origin: strt,
                destination: end,
                travelMode: travelMode
              };
              // console.log(DirecRenderer[k]);
              // console.log(DirecRenderer[k].gm_accessors_);
              // DirecRenderer[k].gm_accessors_.directions = null;
              // DirecRenderer[k].gm_accessors_.routeIndex = null;
              // b.route(request, function(result, status) {
                hoge(k,DirecRenderer,DirecService,request);
                console.log(DirecRenderer);
                  // DirecService[k].route(request, function(result, status) {
                  //   if (status == 'OK') {
                  //     DirecRenderer[k].setDirections(result);
                  //   }
                  // })
                

              // if(j < map_d.length){
              //   j++;
              // }
            }
          }
          google.maps.event.addDomListener(window, 'load', directionMap);
        </script>