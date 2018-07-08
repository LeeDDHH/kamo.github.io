<script>
    {{ with .Params.map }}
        var maps = {{ . }}
    {{ end }}
    function initMap() {

        var array = [];
        var j = 0;
    
        for(var i =0; i < maps.length; i++){
            id = maps[i][0];
            address = maps[i][1];
            z = maps[i][2];

            var geocoder = new google.maps.Geocoder();

            var mapOptions = {
            zoom: Number(z),
            mapTypeId: google.maps.MapTypeId.ROADMAP
            };

            array[i] = new google.maps.Map(document.getElementById(id), mapOptions);
            
            geocoder.geocode( { 'address': address}, function(results, status) {

            if (status == google.maps.GeocoderStatus.OK) {
                // google.maps.Map()コンストラクタに定義されているsetCenter()メソッドで
                // 変換した緯度・経度情報を地図の中心に表示
                array[j].setCenter(results[0].geometry.location);

                // 地図上に目印となるマーカーを設定います。
                // google.maps.Marker()コンストラクタにマーカーを設置するMapオブジェクトと
                // 変換した緯度・経度情報を渡してインスタンスを生成
                // →マーカー詳細
                var marker = new google.maps.Marker({
                map: array[j],
                position: results[0].geometry.location
                });
            // ジオコーディングが成功しなかった場合
            } else {
                console.log('Geocode was not successful for the following reason: ' + status);
            }
            
            if(j < maps.length){
                j++;
            }

            });
        }
    }
    google.maps.event.addDomListener(window, 'load', initMap);
</script>
