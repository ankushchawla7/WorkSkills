import './App.css';
import BackToTop from './Components/BackToTop';
import ContactSection from './Components/ContactSection';
import JoinGrow from './Components/JoinGrow';
import MyAccordion from './Components/MyAccordion';
import MyFooter from './Components/MyFooter';
import MyHeader from './Components/MyHeader';
import PreLoader from './Components/PreLoader';
import Preloader from './Components/PreLoader';
import TakeView from './Components/TakeView';
import Welcome from './Components/Welcome';

function App() {
  return (
    <>
      <div className='overflow-hidden'>
        <BackToTop />
        <PreLoader/>
        <MyHeader />
        <Welcome />
        <JoinGrow />
        <TakeView />
        <ContactSection />
        <MyAccordion />
        <MyFooter />
      </div>
    </>
  );
}

export default App;
