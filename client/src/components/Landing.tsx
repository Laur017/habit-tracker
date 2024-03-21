import Image from '../assets/home-img.jpg';
import { useGoogleLogin} from '@react-oauth/google';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Landing() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate()

  const login = useGoogleLogin({
    onSuccess: (codeResponse) =>setUser(codeResponse),
    onError: (error) => console.log('Login Failed:', error),
  });

  // const logOut = () => {
  //   googleLogout();
  //   setUser(null);
  //   setProfile(null);
  // };

  useEffect(() => {
    user && navigate(`/dashboard/${user.access_token}`)
  }, [user]);


  return (
    <div className="div-landing flex flex-col items-center mt-[2rem]">
      <h2 className="text-[2rem] font-bold">Habit Tracker</h2>
      <div className="flex m-[2rem] items-center justify-center gap-[1rem]">
        <div className="left-landing w-[55%] flex flex-col items-center gap-[1rem]">
          <h4 className="text-[1.1rem] font-semibold">Embark on a journey of self-improvement</h4>
          <p>
            Whether you're striving for personal development, fitness goals, or a more balanced lifestyle,
            our intuitive habit tracking app is designed to empower you every step of the way.
          </p>
          <button className="landing-btn" onClick={login}>
            Let's Start with Google
          </button>
        </div>
        <img src={Image} alt="Habit Tracker" className="w-[40%]" />
      </div>
    </div>
  );
}
