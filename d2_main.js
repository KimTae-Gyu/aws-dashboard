function addMarker(latitude, longitude) {
  var map = L.map('map').setView([latitude, longitude], 13);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
    maxZoom: 18,
  }).addTo(map);

  L.marker([latitude, longitude]).addTo(map);
}

function getLocation() {
    const url = `/location`;
  
    // API 요청 보내기
    fetch(url)
      .then(response => {
        if (response.ok) {
          //console.log(response.json())
          return response.json();
        } else {
          throw new Error('Request failed. Status:', response.status);
        }
      })
      .then(data => {
        const latitude = data.location.latitude;
        const longitude = data.location.longitude;
        //console.log(latitude); // 위도 조회
        //console.log(longitude); // 경도 조회
        addMarker(latitude, longitude); // 위도와 경도를 사용하여 마커 추가
        // TODO: 위도, 경도를 사용하여 리프레 맵에 마커를 찍는 등의 작업을 수행할 수 있습니다.
      })
      .catch(error => {
        console.error('Request failed:', error.message);
      });
  }
  
getLocation();

  