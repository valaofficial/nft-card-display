import './App.css';
import NFTCard from './components/NFTCard'

const nftdata = [
  {
    nftname: "First One",
    image: "img3.jpg",
    username: "diekola",
    price: 1.24,
    userpic: "userImg.jpg",
    favourited: false,
    description: "An amazing cat from Nigeria, a cat from the same name, a cat from the same village, a cat from the same house, a cat from the same street, a cat from the same town, a cat from the same family, a cat from the same clan, a cat from the same"
  },
  {
    nftname: "Bronze 225",
    image: "img3.jpg",
    username: "diekola",
    price: 3.04,
    userpic: "userImg.jpg",
    favourited: false,
    description: "An amazing cat from Nigeria, a cat from the same name, a cat from the same village, a cat from the same house, a cat from the same street, a cat from the same town, a cat from the same family, a cat from the same clan, a cat from the same"
  },
  {
    nftname: "First One",
    image: "img3.jpg",
    username: "diekola",
    price: 1.24,
    userpic: "userImg.jpg",
    favourited: false,
    description: "An amazing cat from Nigeria, a cat from the same name, a cat from the same village, a cat from the same house, a cat from the same street, a cat from the same town, a cat from the same family, a cat from the same clan, a cat from the same"
  },
  {
    nftname: "Second One",
    image: "img1.jpg",
    username: "diekola",
    price: 1.27,
    userpic: "userImg.jpg",
    favourited: true,
    description: "An amazing cat from Nigeria, a cat from the same name, a cat from the same village, a cat from the same house, a cat from the same street, a cat from the same town, a cat from the same family, a cat from the same clan, a cat from the same"
  },
  {
    nftname: "Adamantium Zero",
    image: "img2.jpg",
    username: "diekola",
    price: 1.29,
    userpic: "userImg.jpg",
    favourited: true,
    description: "A picture is worth a thousand words. It can also be a great way to get your point across, whether you're trying to convince someone to take a different approach to an issue or just want to illustrate a different perspective."
  },
  {
    nftname: "Bronze 225",
    image: "img3.jpg",
    username: "diekola",
    price: 3.04,
    userpic: "userImg.jpg",
    favourited: false,
    description: "An amazing cat from Nigeria, a cat from the same name, a cat from the same village, a cat from the same house, a cat from the same street, a cat from the same town, a cat from the same family, a cat from the same clan, a cat from the same"
  },
  {
    nftname: "First One",
    image: "img3.jpg",
    username: "diekola",
    price: 1.24,
    userpic: "userImg.jpg",
    favourited: false,
    description: "An amazing cat from Nigeria, a cat from the same name, a cat from the same village, a cat from the same house, a cat from the same street, a cat from the same town, a cat from the same family, a cat from the same clan, a cat from the same"
  },
  {
    nftname: "Second One",
    image: "img1.jpg",
    username: "diekola",
    price: 1.27,
    userpic: "userImg.jpg",
    favourited: true,
    description: "An amazing cat from Nigeria, a cat from the same name, a cat from the same village, a cat from the same house, a cat from the same street, a cat from the same town, a cat from the same family, a cat from the same clan, a cat from the same"
  },
  {
    nftname: "Adamantium Zero",
    image: "img2.jpg",
    username: "diekola",
    price: 1.29,
    userpic: "userImg.jpg",
    favourited: true,
    description: "A picture is worth a thousand words. It can also be a great way to get your point across, whether you're trying to convince someone to take a different approach to an issue or just want to illustrate a different perspective."
  },
  {
    nftname: "First Silver",
    image: "img2.jpg",
    username: "diekola",
    price: 9.72,
    userpic: "userImg.jpg",
    favourited: true,
    description: "A picture is worth a thousand words. It can also be a great way to get your point across, whether you're trying to convince someone to take a different approach to an issue or just want to illustrate a different perspective."
  }
]


function App() {
  return (
    <section className="box-border mainBody">
      <div className='userDisplay h-80 p-4 flex justify-center flex-col items-center'>
        <div className='w-20 h-20'>
          <img src='/userImg.jpg' className='w-full h-full' alt='Profile'/>
        </div>
        
        <div className='text-white mt-8 text-4xl userName font-bold'>
          <h3 className='hover:text-blue-300 hover:scale-125 ease-in-out duration-300'>Diekola</h3>
        </div>

        <div className='mt-4 text-[0.65rem] flex justify-between'>
          <p className='mx-2 text-gray-500'>Joined: <span className='text-white'>11/11/2011</span></p>
          <p className='mx-2 text-gray-500'>Address: <span className='text-white'>ETLRwv34bgje...KZFE</span></p>
        </div>
      </div>

      <div className='p-4 nftDisplay min-h-screen'>

        <div className='p-4 flex text-xl font-bold text-gray-700'>
          <h1 className='text-blue-300 ease-in-out duration-300'>My NFTs</h1>
          <h1 className='ml-8 hover:text-blue-300 ease-in-out duration-300'>My Collections</h1>
        </div>

        <div className='flex justify-center'>
          <div className=' p-4 card-list grid gap-5 grid-cols-1 lg:grid-cols-5 md:grid-cols-3 justify-center items-center w-full lg:max-w-7xl'>
            {nftdata.map(data =>(
              <NFTCard nftinfo={data}/>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

export default App;
