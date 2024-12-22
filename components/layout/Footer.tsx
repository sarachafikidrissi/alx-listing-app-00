const Footer: React.FC = () => {
  return (
    <footer className='w-full bg-gray-100 shadow-t'>
      <div className='container mx-auto py-6 px-4 flex flex-col'>
        <div className="flex items-center justify-between">
          <div className="text-gray-800">© 2021 ALX Listing App</div>
          <div className="flex space-x-4">
            <a href="#" className="text-teal-500 hover:underline">Privacy Policy</a>
            <a href="#" className="text-teal-500 hover:underline">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
