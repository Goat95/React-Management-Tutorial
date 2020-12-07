const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/customers', (req, res) => {
    res.send([
        {
            id: 1,
            image: 'https://placeimg.com/64/64/any',
            name: '홍길동',
            birth: '19950316',
            gender: '남자',
            job: '대학생'
          },
          {
            id: 2,
            image: 'https://placeimg.com/64/64/1',
            name: '이순신',
            birth: '19950311',
            gender: '남자',
            job: '디자이너'
          },
          {
            id: 3,
            image: 'https://placeimg.com/64/64/2',
            name: '수지',
            birth: '19950315',
            gender: '여자',
            job: '대학생'
          }
    ]);
});

app.listen(port, () => console.log(`Listening on port ${port}`));