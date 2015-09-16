var express = require('express'); // 설치된 module은 require명령어를 통해 불러올수 있음.
//express module을 express 라는 이름의 변수로 저장
var app= express();//express module은 그냥 함수가아니라 생성자(constructor)
//express 를  사용하여 app을 만듬
app.get('/',function (req,res) { //app.get 은 eventListener 이고 두개의 argument를 받는데 ,
  //첫번째는 조건, 두번째는 반응 함수
res.send('Hello World');

});

app.listen(3000, function(){
  console.log('server On!');
});
