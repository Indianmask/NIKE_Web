import Nav from './Component/Nav';
import Hero from './section/Hero';
import Popular from './section/Popular';
import Superqual from './section/Superqual';
import Specialoff from './section/Specialoff';
import Services from './section/Services';
import CustomerReview from './section/CustomerReview';
import Subcribe from './section/Subcribe';
import Footer from './section/Footer';
const App=()=> (
 
    <main className='relative p-5'> 
    <Nav/>
    <section className="x1:padding-1 p-[25px]  wide:padding-r padding-b">
     <Hero/>
    </section>

    <section className="padding">
     <Popular/> 
    </section>

    <section className="padding ">
    <Superqual />
    </section>
    
    <section className="padding-x py-10">
     <Services />
    </section>
    
   
 <section className="padding ">
   < Specialoff/>
    </section>
    <section className="padding bg-pale-blue padding">
        <CustomerReview />
    </section>
    <section className="padding-x sm:py-32 py-16 w-full">
      <Subcribe />
    </section>
    <section className="padding bg-black text-white padding-x padding-t pb-8">
      <Footer />
    </section>
    </main>
 
);
export default App;



/*




    <section className="padding ">
   < Specialoff/>
    </section>
    
    */