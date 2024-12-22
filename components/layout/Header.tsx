import Image from 'next/image';

const Header: React.FC = () => {
  return (
    <header className='w-full bg-gray-100 shadow-md'>
      <div className='container mx-auto py-6 px-4 flex flex-col'>
        <div className="flex items-center justify-between">
          <div className="logo flex items-center">
            <Image src="/assets/logos/Vector.png" alt="logo" width={80} height={50} />
          </div>
          <div className="search flex-1 mx-4 flex items-center">
            <input 
              type="text" 
              placeholder="Search for destination" 
              className="w-full p-2 rounded-l-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
            <button className="p-2 bg-teal-500 text-white rounded-r-md hover:bg-teal-600">Search</button>
          </div>
          <div className="auth flex space-x-2">
            <button className="p-2 bg-white text-teal-500 border border-teal-500 rounded-full hover:bg-teal-50">Sign in</button>
            <button className="p-2 bg-teal-500 text-white rounded-full hover:bg-teal-600">Sign up</button>
          </div>
        </div>
        <nav className="nav mt-4 w-full">
          <ul className="flex justify-between w-full text-gray-800">
            <li><a href="#rooms" className="hover:text-teal-500">Rooms</a></li>
            <li><a href="#mansion" className="hover:text-teal-500">Mansion</a></li>
            <li><a href="#countryside" className="hover:text-teal-500">Countryside</a></li>
            <li><a href="#apartments" className="hover:text-teal-500">Apartments</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
