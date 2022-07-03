const reviews = [
  {
    id: 1,
    name: "Susan Smith",
    job: "Web Developer",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric charteuse before they sold out chambray pop-up pooper scoopers. Shaman humblebrag pickled my feet with a coloring book made out of salvia hoodies, cold-pressed four dollar toast, and an everyday carry license. With this, I can now juggle monkeys and that is why I'm the best fit for your company your honor. That's my final verdict."
  },
  {
    id: 2,
    name: "Anna Johnson",
    job: "Web Designer",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    text: "Baby munchkins eating celery with no peanut butter while the frogs whistle at the hockey match inside mount vesuvius. Some people call me crazy, but that's only because my voices are telling them to say that, so clearly they are the crazy ones since they can actually hear voices inside of my head. Speaking of shaving turtles I also happen to like frosted flakes with hummus instead of milk and just a wee bit of smelling salts on top."
  },
  {
    id: 3,
    name: "Peter Joneski",
    job: "Senior Software Engineer",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    text: "Well, basically I'm a boss and there's nothing you can do about it, because I drink badger milk every morning as well as 6 beers. I don't chase flying squirrels, which is against company policy anyway since we used to have a big problem with that around here, and I do go spider fishing with my pet jackalopes. I am the proud owner of a brand new bag of liposuction tools which I'll use to cut hair for a living. After hearing all that, if you don't hire me and promote me straight to upper management then I'll send in my assistant to convince you otherwise."
  },
  {
    id: 4,
    name: "Sara Jones",
    job: "UX Designer",
    img: "./fakePersonSmiling.png",
    text: "This is just a bunch of bull malarky text to look like something was written here and it takes up a bunch of space. Sometimes it's quite funny to just make things up on the fly like this, I mean for real, you can even talk about purple dogs, flying biscuits and who can forget the lizard people living underground in Manhattan? People are people, and one person is a person, and guess what? They're all still humans! I know, crazy right? I ate an entire piece of shoe leather for breakfast this morning while I flossed with my hair. That is just a Tuesday for me too, don't get me started. I am literally so interesting that I can't help but only be interested in myself, and can you believe it? They are just jealous because they can't date me, by the way, my name is AOC, but totally not the crazy wannabe politician or whatever she thinks she is. Haha anyway, my timing belts just finished frying so I better go get them and flip them over on the grill. Have a very miniature and delicate weekend folks!"
  },
  {
    id: 5,
    name: "Bill Anderson",
    job: "The Real Boss",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    text: "Edison bulb put a bird on it with humphrey, marfoogle news bought tik tok and turned videos into a heirloom fashion axe. Cray Stumptown venmo'd an actual sentient fox, then recorded it on VHS. He reviewed a farm-table schlitz with 3 pop ups, a wolf moon tote, and a bag of shabby street art critics. And I mean it!"
  }
];

function update(person: number): void {
  const item = reviews[person];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}

function onClickNext(e): void {
  // imgContainer.classList.remove('w3-animate-top');
  // imgContainer.classList.remove('w3-animate-left');
  // imgContainer.classList.add('w3-animate-right');
  console.log('classList ', imgContainer.classList);
  if (imgContainer.classList.contains('img-animation-top')) {
    imgContainer.classList.remove('img-animation-top');
    imgContainer.classList.add('img-animation-right');
    setTimeout(() => {
      imgContainer.classList.remove('img-animation-right');
    }, 2500);
  } else {
    imgContainer.classList.add('img-animation-right');
    setTimeout(() => {
      imgContainer.classList.remove('img-animation-right');
    }, 2500);
  }
  if (currentItem === reviews.length - 1) {
    currentItem = 0;
    update(currentItem);
  } else {
    currentItem += 1;
    update(currentItem);
  }
}

function onClickPrev(e): void {
  // imgContainer.classList.remove('w3-animate-top');
  // imgContainer.classList.remove('w3-animate-right');
  // imgContainer.classList.add('w3-animate-left');
  console.log('classList ', imgContainer.classList);
  if (imgContainer.classList.contains('img-animation-top')) {
    imgContainer.classList.remove('img-animation-top');
    imgContainer.classList.add('img-animation-left');
    setTimeout(() => {
      imgContainer.classList.remove('img-animation-left');
    }, 2500);
  } else {
    imgContainer.classList.add('img-animation-left');
    setTimeout(() => {
      imgContainer.classList.remove('img-animation-left');
    }, 2500);
  }
  if (currentItem === 0) {
    currentItem = reviews.length - 1;
    update(currentItem);
  } else {
    currentItem -= 1;
    update(currentItem);
  }
}

const imgContainer = document.getElementById('image-div') as HTMLDivElement;
const btnContainer = document.getElementById('btn-container') as HTMLDivElement;
const nextBtn = document.getElementById('next-btn') as HTMLButtonElement;
const prevBtn = document.getElementById('prev-btn') as HTMLButtonElement;
const randomBtn = document.getElementById('random-btn') as HTMLButtonElement;
const img = document.getElementById('person-img') as HTMLImageElement;
const author = document.getElementById('author') as HTMLHeadingElement;
const job = document.getElementById('job') as HTMLParagraphElement;
const info = document.getElementById('info') as HTMLParagraphElement;

// btnContainer.addEventListener('click', onClick);
nextBtn.addEventListener('click', onClickNext);
prevBtn.addEventListener('click', onClickPrev);

let currentItem: number = 0;

window.addEventListener('DOMContentLoaded', function() {
  console.log('shake and bake!');
  update(currentItem);
});