const fitstValue = [50,60,70,80,90,100,110,120]; //ALL영역에서 차단 IP개수를 넣기
const firstLabel = [7,8,8,9,9,9,10,11]; //차단된 IP이름을 넣고

const secondValue = [50,60,70,80,90,100,110,120];
const secondLabel = [7,8,8,9,9,9,10,11];

const firstlog = new Chart("firstlog",{
    type: "doughnut",
    data: {
        labels: firstLabel,
          datasets: [{
            label: 'My First Dataset',
            data: fitstValue,
            backgroundColor: [
                'rgba(255, 67, 67, 1)',
                'rgba(209, 51, 51, 1)',
                'rgba(0, 114, 198, 1)',
                'rgba(0, 182, 228, 1)',
                'rgba(0, 163, 0, 1)',
                'rgba(89, 197, 164, 1)',
                'rgba(218, 247, 235, 1)',
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 205, 86)'
            ],
            hoverOffset: 4
          }]
        }
    }
);

const secondlog = new Chart("secondlog",{
    type: "doughnut",
    data: {
        labels: secondLabel,
          datasets: [{
            label: 'My First Dataset',
            data: secondValue,
            backgroundColor: [
                'rgba(255, 67, 67, 1)',
                'rgba(209, 51, 51, 1)',
                'rgba(0, 114, 198, 1)',
                'rgba(0, 182, 228, 1)',
                'rgba(0, 163, 0, 1)',
                'rgba(89, 197, 164, 1)',
                'rgba(218, 247, 235, 1)',
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 205, 86)'
            ],
            hoverOffset: 4
          }]
        }
    }
);

//var hanRiverPos = [37.5118, 126.9745];
//var map = L.map('map').setView(hanRiverPos, 13);

//L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png?{foo}', {foo: 'bar', attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(map);

var map = L.map('map');

// 맵이 표시될 HTML 요소 지정
map.setView([37, -122], 12); // 초기 중심 좌표와 줌 레벨 설정

// 맵에 타일 레이어 추가
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
  maxZoom: 18,
}).addTo(map);
var latitude=37;
var longitude=-122;
// IP 주소를 위도와 경도로 변환하여 지도에 마커로 표시하는 함수
var marker = L.marker([latitude, longitude]).addTo(map);
map.setView([latitude, longitude], 12);