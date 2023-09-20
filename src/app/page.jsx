"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import ReactTypingEffect from 'react-typing-effect';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

const WelcomeBase = () => {

  const particlesInit = async (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(main);
  };
  
  const [name, setName] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [redirected, setRedirected] = useState(false);

  const router = useRouter();

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleRedirect = async () => {
    setIsLoading(true);
    localStorage.setItem('userName', name);

    try {
      await router.push('/home');
      setRedirected(true);
    } catch (error) {
      console.error('Error redirecting:', error);
      setIsLoading(false);
    }
  };

  const isNameValid = name.trim() !== '';



  return (
    <div className='relative min-h-screen'>
      <Particles
        id="tsparticles"
        init={particlesInit}

        options={{
          "fullScreen": {
              "enable": true,
              "zIndex": 1
          },
          "particles": {
              "number": {
                  "value": 10,
                  "density": {
                      "enable": false,
                      "value_area": 800
                  }
              },
              "color": {
                  "value": "#fff"
              },
              "shape": {
                  "type": "star",
                  "options": {
                      "sides": 5
                  }
              },
              "opacity": {
                  "value": 0.8,
                  "random": false,
                  "anim": {
                      "enable": false,
                      "speed": 1,
                      "opacity_min": 0.1,
                      "sync": false
                  }
              },
              "size": {
                  "value": 4,
                  "random": false,
                  "anim": {
                      "enable": false,
                      "speed": 40,
                      "size_min": 0.1,
                      "sync": false
                  }
              },
              "rotate": {
                  "value": 0,
                  "random": true,
                  "direction": "clockwise",
                  "animation": {
                      "enable": true,
                      "speed": 5,
                      "sync": false
                  }
              },
              "line_linked": {
                  "enable": true,
                  "distance": 600,
                  "color": "#ffffff",
                  "opacity": 0.4,
                  "width": 2
              },
              "move": {
                  "enable": true,
                  "speed": 2,
                  "direction": "none",
                  "random": false,
                  "straight": false,
                  "out_mode": "out",
                  "attract": {
                      "enable": false,
                      "rotateX": 600,
                      "rotateY": 1200
                  }
              }
          },
          "interactivity": {
              "events": {
                  "onhover": {
                      "enable": true,
                      "mode": ["grab"]
                  },
                  "onclick": {
                      "enable": false,
                      "mode": "bubble"
                  },
                  "resize": true
              },
              "modes": {
                  "grab": {
                      "distance": 400,
                      "line_linked": {
                          "opacity": 1
                      }
                  },
                  "bubble": {
                      "distance": 400,
                      "size": 40,
                      "duration": 2,
                      "opacity": 8,
                      "speed": 3
                  },
                  "repulse": {
                      "distance": 200
                  },
                  "push": {
                      "particles_nb": 4
                  },
                  "remove": {
                      "particles_nb": 2
                  }
              }
          },
          "retina_detect": true,
          "background": {
              "color": "#00000",
              "image": "",
              "position": "50% 50%",
              "repeat": "no-repeat",
              "size": "cover"
          }
        }
      }
      />


      <div className="flex flex-col items-center justify-center min-h-screen sticky z-[1]">
        <div className='text-[40px] mb-2 text-center font-poppins-reguler'>
          <ReactTypingEffect speed={100} text={['Hello there , before we get started. what is your name ?']} />
        </div>
        <form className="mb-4">
          <input type="text" placeholder="Type here" value={name}
            onChange={handleNameChange} className="input input-bordered input-warning w-full max-w-xs" />
        </form>
        <div className="flex flex-col items-center">
          {isNameValid && !redirected && (
            <div>
              <button
                onClick={handleRedirect}
                className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700"
              >
                Let's Go
              </button>
            </div>
          )}
          {isLoading && (
            <div className="text-white my-2">Loading...</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default WelcomeBase;