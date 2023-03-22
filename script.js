const container = document.querySelector('.container');
const image = document.querySelector('img');
const profile = document.querySelector('.profile-info');
const btn = document.getElementById('next');

const people = [
  {
    name: 'Jamie Wong',
    age: 26,
    gender: 'female',
    location: 'Los Angeles, CA',
    imageURL: 'https://randomuser.me/api/portraits/women/2.jpg',
    looking: 'Female looking for male',
  },
  {
    name: 'John Smith',
    age: 35,
    gender: 'male',
    location: 'New York, NY',
    imageURL: 'https://randomuser.me/api/portraits/men/2.jpg',
    looking: 'Male looking for female',
  },
  {
    name: 'Bob Johnson',
    age: 42,
    gender: 'male',
    location: 'Chicago, IL',
    imageURL: 'https://randomuser.me/api/portraits/men/1.jpg',
    looking: 'Male looking for male',
  },
  {
    name: 'Shannon Jackson',
    age: 29,
    gender: 'female',
    location: 'Los Angeles, CA',
    imageURL: 'https://randomuser.me/api/portraits/women/1.jpg',
    looking: 'Female looking for female',
  },
];

function* swipe() {
  let idx = 0;
  while (true) {
    yield people[idx++ % people.length];
  }
}

const iterator = swipe();

const nextProfile = () => {
  person = iterator.next().value;
  image.src = person.imageURL;
  profile.querySelector('h3').innerText = person.name;
  profile.querySelectorAll('p')[0].innerText = `${person.age} Years old`;
  profile.querySelectorAll('p')[1].innerText = person.location;
  profile.querySelectorAll('p')[2].innerText = person.looking;
};

btn.addEventListener('click', nextProfile);
