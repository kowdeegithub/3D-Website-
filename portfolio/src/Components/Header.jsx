import 'boxicons/css/boxicons.min.css';

const Header = () => {
     //Simple function to toggle mobile menu
     const toggleMobileMenu = () => {
        // Get the Mobile Menu Element
        const mobileMenu = document.getElementById
        ('MobileMenu');

        // If it has the 'hidden ' claass, remove it . otherwise, add it
        if (mobileMenu.classList.contains('hidden')) {
            mobileMenu.classList.remove('hidden');
        } else {
            mobileMenu.classList.add('hidden');
        }
    
    }    

  return (
    <header className="flex justify-between 
    items-center py-4 px-4 lg:px-20">

        <h1 data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500" className="text-3xl md:text-4xl
        lg:text-5xl font-light m-0">
        CORPS
        </h1>
    
        {/* Navigation Desktop*/ }
        <nav className="hidden md:flex item-center gap-12">
           <a data-aos="fade-down"
           data-aos-easing="linear"
           data-aos-duration="1000" className="text-base tracking wider 
           transistion-color hover:text-gray-300 z-50" href="#">
            About
           </a>

            <a data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500" className="text-base tracking wider 
           transistion-color hover:text-gray-300 z-50" href="#">
            Features
           </a>
           
            <a data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="2000" className="text-base tracking wider 
           transistion-color hover:text-gray-300 z-50" href="#">
            Services
           </a>

           <a data-aos="fade-down"
           data-aos-easing="linear"
           data-aos-duration="2500" className="text-base tracking wider 
           transistion-color hover:text-gray-300 z-50" href="#">
            Projects
           </a>
    </nav>

           <button className="hidden md:block bg-[#a7a7a7] text-black py-3 px-8 
           rounded-full border-none font-medium transistion-all duration-500 hover:bg-white cursor-pointer z-50"> 
                    Contact
                    </button>

        {/* Navigation Mobile Meni - Visible only on mobile*/ }
        <button onClick={toggleMobileMenu}
        className='md:hidden text-3xl p-2 z-50'>
            <i class='bx  bx-menu'></i> 
        </button>

        {/* Mobile Menu - Hidden by default */ }
        <div id='MobileMenu'className='hidden fixed top-16 bottom-0 right-0 
        left-0 p-5 md:hidden z-40 bf-black bg-opacity-70 backdrop-blur- md'>
            <nav className='flex flex-col gap-6 
            item-center'>
                <a className="text-base tracking wider 
                transistion-color hover:text-gray-300 z-50" href="#">
                About
                </a>

                <a className="text-base tracking wider 
                transistion-color hover:text-gray-300 z-50" href="#">
                Projects
                </a>
           
                <a className="text-base tracking wider 
                transistion-color hover:text-gray-300 z-50" href="#">
                Service
                </a>

                <a className="text-base tracking wider 
                transistion-color hover:text-gray-300 z-50" href="#">
                Experience
                </a>
            </nav>
        </div>

    </header>
  )
}

export default Header
