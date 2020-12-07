import React from 'react';
import Customer from './components/Customer'
import './App.css';

const customers = [
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
},
]

class App extends React.Component {
  render() {
    return (
      <div>
        { customers.map(c => { return <Customer key={c.id} id={c.id} image={c.image} name={c.name} birth={c.birth} gender={c.gender} job={c.job} /> }) }
      </div>
    );
  }
}

export default App;
