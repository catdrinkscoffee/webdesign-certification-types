
= 개발자 도구에서 편집하기 (Edit as HTML, Console) =

```javascript
document.getElementById('root');
```
```javascript
document.getElementById('root').innerHTML = '<ul><li>바꾸었다</li></ul>';
```

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
