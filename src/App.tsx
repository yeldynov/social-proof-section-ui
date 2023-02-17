import Header from './components/Header';
import Rating from './components/Rating';
import Testimonial from './components/Testimonial';
import Colton from './assets/image-colton.jpg';
import Irene from './assets/image-irene.jpg';
import Anne from './assets/image-anne.jpg';
// import BgMobileTop from './assets/bg-pattern-top-mobile.svg';
// import BgMobileBottom from './assets/bg-pattern-bottom-mobile.svg';
// import BgDesktopTop from './assets/bg-pattern-top-desktop.svg';
// import BgDesktopBottom from './assets/bg-pattern-bottom-desktop.svg';

const users = [
  {
    name: 'Colton Smith',
    avatar: Colton,
    testimonial:
      '"We needed the same printed design as the one we had ordered a week prior. Not only did they find the original order, but we also received it in time.  Excellent!"',
  },
  {
    name: 'Irene Roberts',
    avatar: Irene,
    testimonial:
      '"Customer service is always excellent and very quick turn around. Completely delighted with the simplicity of the purchase and the speed of delivery."',
  },
  {
    name: 'Anne Wallace',
    avatar: Anne,
    testimonial:
      '"Put an order with this company and can only praise them for the very high standard. Will definitely use them again and recommend them to everyone!"',
  },
];

const ratings = [
  { rating: 5, source: 'Reviews' },
  { rating: 5, source: 'Report Guru' },
  { rating: 5, source: 'BestTech' },
];

function App() {
  return (
    <main className='bg-bg-mob-top bg-no-repeat mob:bg-bg-desk-top font-leaguespartan min-h-screen flex flex-col justify-center items-center'>
      <div className='mob:w-4/5 m-5 mob:m-0'>
        <div className='mob:flex'>
          <div className='mob:flex-1'>
            <Header />
          </div>
          <div className='mob:flex-1 my-10 mob:mr-10'>
            {ratings.map((rating) => (
              <Rating rating={rating.rating} source={rating.source} />
            ))}
          </div>
        </div>
        <div className='flex flex-col mob:flex-row gap-4 mob:gap-8 mob:mt-5'>
          {users.map((user) => (
            <Testimonial
              name={user.name}
              avatar={user.avatar}
              testimonial={user.testimonial}
            />
          ))}
        </div>
      </div>
    </main>
  );
}

export default App;
