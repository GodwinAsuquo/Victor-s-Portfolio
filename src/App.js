import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import WithNav from './components/WithNav';
import WithoutNav from './components/WithoutNav';
import { Home, Chronicare, Epay, Portfolio,WellaAgent, Wephco, Intro } from './pages';

function App() {
 return (
    <BrowserRouter>
    <ScrollToTop>
    <Routes>
        <Route element={<WithoutNav />}>
            <Route path='/' element={<Intro/>}/>
        </Route>
        <Route element={<WithNav />}>
        <Route path='home' element={<Home/>}/>
        <Route path='chronicare' element={<Chronicare/>}/>
        <Route path='epay' element={<Epay/>}/>
        <Route path='Portfolio' element={<Portfolio/>}/>
        <Route path='wella-agent' element={<WellaAgent/>}/>
        <Route path='wephco' element={<Wephco/>}/>
        </Route>
    </Routes>
    </ScrollToTop>
    </BrowserRouter>
)
}


export default App;
