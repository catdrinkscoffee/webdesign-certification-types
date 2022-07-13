웹앱 만들기 사전 수업 정답 코드
```
var request = require('request');

var url = 'http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst';
var queryParams = '?' + encodeURIComponent('serviceKey') + '=lHBDTVwXz5Bc1fMZpp%2BeEYFkEfMt9Pyhhgq%2BnMO6IF4wW0lDFPdhT3JHb5EYX8JEJt9re1Nl3Vx%2BK1OlqMZ4sA%3D%3D'; /* Service Key*/
queryParams += '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent('1'); /* */
queryParams += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('1000'); /* */
queryParams += '&' + encodeURIComponent('dataType') + '=' + encodeURIComponent('JSON'); /* */
queryParams += '&' + encodeURIComponent('base_date') + '=' + encodeURIComponent('20220713'); /* */
queryParams += '&' + encodeURIComponent('base_time') + '=' + encodeURIComponent('0500'); /* */
queryParams += '&' + encodeURIComponent('nx') + '=' + encodeURIComponent('55'); /* */
queryParams += '&' + encodeURIComponent('ny') + '=' + encodeURIComponent('127'); /* */

request({
    url: url + queryParams,
    method: 'GET'
}, function (error, response, body) {
    // console.log('Reponse received', body, typeof(body));
    // console.log('Reponse received, Parsed', JSON.parse(body), typeof(JSON.parse(body)));
    const parsedBody = JSON.parse(body);
    // console.log('Reponse received, response->body->items', parsedBody.response.body.items, typeof(parsedBody.response.body.items));
    const weatherInfo = parsedBody.response.body.items;
    const totalCount = parsedBody.response.body.totalCount;
    // for(let i = 0; i < totalCount ; i++) {
    //     console.log(i);
    // }
    // for(let i = 0; i < totalCount ; i++) {
    //     if(weatherInfo.item[i].category === 'POP') {
    //         console.log("I found it!");
    //     }
    // }
    for(let i = 0; i < totalCount ; i++) {
        if(weatherInfo.item[i].category === 'POP') {
            // console.log("time: ", weatherInfo.item[i].fcstTime, "chance of rain: ", weatherInfo.item[i].fcstValue);
            // console.log(tConvert(weatherInfo.item[i].fcstTime));
            console.log("date:", weatherInfo.item[i].fcstDate,"time:", weatherInfo.item[i].fcstTime, "chance of rain:", weatherInfo.item[i].fcstValue);
        }
    }
});

// 오늘 날자를 Date()를 통해 받아온 다음, 다음날 날짜를 queryParameter로 넘겨주기.
// 등교시간(09시 00분)을 기준으로 날짜 출력하기
```


개발자 도구에서 편집하기 (Edit as HTML, Console)

```javascript
document.getElementById('root');
```
```javascript
document.getElementById('root').innerHTML = '<ul><li>변경 후 li 태그</li></ul>';
```
app.js 에서 편집하기
```javascript
const ajax = new XMLHttpRequest();

// 아작스를 통해 데이터를 요청하고 받는 코드
ajax.open('GET', 'https://api.hnpwa.com/v0/news/1.json', false);
ajax.send();

// 요청한 데이터가 저장되는 곳 = ajax.response dd
ajax.response;
console.log(ajax.response);


// JSON.parse로 보기 편하게 가공하기 
const newsFeed = JSON.parse(ajax.response);
console.log(newsFeed); // dd


// 프로그램 코드를 통해 넣어보기 dd
document.getElementById('root').innerHTML = `<ul>
  <li>newsFeed[0].title</li>
  <li>newsFeed[1].title</li>
  <li>newsFeed[2].title</li>
</ul>`;

// 프로그램 코드를 통해 넣어보기 - 데이터를 출력하기 위해서는 백틱과 달러+브레이스-브레이스가 필요 - 하드코딩 dd
document.getElementById('root').innerHTML = `<ul>
  <li>${newsFeed[0].title}</li>
  <li>${newsFeed[1].title}</li>
  <li>${newsFeed[2].title}</li>
</ul>`;

// 반복문을 통해 넣어보기 - 마지막 것만 들어간다! dd
for(let i = 0 ; i < 10; i++) {
  document.getElementById('root').innerHTML = `<ul>
  <li>${newsFeed[i].title}</li>
</ul>`;
}

// 반복문을 통해 넣어보기 - 마지막만 들어가는 문제 해결하기
const ul = document.createElement('ul');


for(let i = 0 ; i < 10; i++) {
  const li = document.createElement('li');

  li.innerHTML = newsFeed[i].title;

  ul.appendChild(li);
}

document.getElementById('root').appendChild(ul);

```
