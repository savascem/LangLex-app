import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import SideBar from './components/AuthComponents/SideBar';
import AuthHome from './pages/AfterAuthenticated/AuthHome';
import DailyRoutine from './pages/AfterAuthenticated/DailyRoutine';
import Profile from './pages/AfterAuthenticated/Profile';
import { useContext, useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { UserContext } from './contexts/UserContext';
import Practice from './pages/AfterAuthenticated/Practice';
import Article from './pages/AfterAuthenticated/Article';
import { MdOutlineDocumentScanner } from 'react-icons/md';
import History from './pages/AfterAuthenticated/History';


function App() {

  const apiPath = 'http://127.0.0.1:8000/api';

  const auth = localStorage.getItem('accessToken');

  const { user } = useContext(UserContext);

  const [mainProfile, setProfile] = useState('');

  const [hideSideBar, setHideSideBar] = useState(false);

  const [height565, setHeight565] = useState(false);

  const [viewportHeight, setViewportHeight] = useState(window.innerHeight);

  const [lenData, setLenData] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setViewportHeight(window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    if (Number(viewportHeight) < 565) {
      setHeight565(true);
    } else {
      setHeight565(false);
    }

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  let apiProfile = `${apiPath}/acc/profile/${user.user_id}/`;

  useEffect(() => {
    const apiProfile = `${apiPath}/acc/profile/${user.user_id}`;

    const profileData = async () => {
      if (user) {
        if (!mainProfile) {
          try {
            const response = await axios.get(apiProfile);
            setProfile(response.data);
          } catch (error) {
            console.error('err');
          }
        }
      } else {
        setProfile('');
      }
    };

    profileData();
  }, [user, mainProfile]);

  return (
    <div className="App">
      {!auth ?

        (
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login/' element={<Login apiPath={apiPath} />} />
            <Route path='/register/' element={<Register apiPath={apiPath} />} />
          </Routes>
        )

        :

        (
          <div className={`grid ${!hideSideBar ? 'grid-cols-5' : 'grid-cols-12'} bg-gradient-to-l from-gray-300 to-slate-50`}>
            {/* sidebar */}
            {!hideSideBar ? (
              <div className='col-span-1 h-screen'>
                <SideBar profilePic={mainProfile.profile_picture} firstName={mainProfile.first_name} setHideSideBar={setHideSideBar} />
              </div>
            ) : (
              <div className='items-center col-span-1 h-screen'>
                <div onClick={() => setHideSideBar(false)} className='w-full flex flex-wrap pt-3 pl-3 sm:pt-4 sm:pl-4 md:pt-8 md:pl-7'>
                  <button className='text-3xl lg:text-4xl rounded-full shadow-md p-2 lg:p-4 text-slate-600 transition ease-in-out flex justify-center flex-wrap hover:scale-110 md:hover:scale-150 hover:text-blue-500 hover:shadow-blue-200'>
                    <MdOutlineDocumentScanner />

                  </button>
                </div>
              </div>
            )}

            {/* sidebar end */}

            {/* Content */}
            <div className={`${!hideSideBar ? 'col-span-4' : 'col-span-11'}`}>
              <div className='p-2 sm:p-4 md:p-8 lg:p-10'>
                <Routes>
                  <Route path='/dashboard/' element={<AuthHome className="" apiPath={apiPath} mainProfile={mainProfile} setLenData={setLenData} />} />
                  <Route path='/dashboard/routine/' element={<DailyRoutine apiPath={apiPath} mainProfile={mainProfile} />} />
                  <Route path='/dashboard/profile/' element={<Profile apiProfile={apiProfile} mainProfile={mainProfile} id={user.user_id} />} />
                  <Route path='/dashboard/practice/' element={<Practice apiPath={apiPath} lenData={lenData} />} />
                  <Route path='/dashboard/article/' element={<Article apiPath={apiPath} int1={mainProfile.interested_area1} int2={mainProfile.interested_area2} />} />
                  <Route path='/dashboard/history/' element={<History apiPath={apiPath} />} />
                </Routes>
              </div>
            </div>
            {/* Content end */}
          </div>
        )

      }

    </div>
  );
}

export default App;
