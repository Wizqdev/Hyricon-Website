import Image from 'next/image';
import Head from 'next/head';
import React, { useState, useEffect } from 'react';
import { fetchUserData, config } from '../utils/fetchUserData';
import Loader from '../components/Loader';
import { Prajwal } from '../utils/config';
import { GAMELEGENDX } from '../utils/config';
import { ExoticalCat } from '../utils/config';
import { Manouel } from '../utils/config';
import { MemzDev } from '../utils/config';
import { DHVIT } from '../utils/config';
import { IIIIXI } from '../utils/config';
import { kaya } from '../utils/config';
import { Makus } from '../utils/config';
import { Sandaru } from '../utils/config';
import { Dhananjay } from '../utils/config';
import { Iron } from '../utils/config';

export default function HomePage(props) {
  const [profile, setProfile] = useState({});
  const [frontend, setFrontend] = useState([]);
  const [backend, setBackend] = useState([]);
  const [devtools, setDevTools] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchUserData().then((items) => {
      setProfile(items.profile);
      setFrontend(items.tools.frontend);
      setBackend(items.tools.backend);
      setDevTools(items.tools.devtools);
      setIsLoading(false);
    });
  }, []);

  return (
    <>
      {isLoading && <Loader />}

      <section className='section animate__animated animate__slideInDown'>
        <h2 className='title'>Owners</h2>
        <div className='profile'>
          <div className='image-container'>
            <Image src={Prajwal} layout='fill' />
          </div>
        <div className='profile'>
          <div>
            <p>This Is</p>
            <h1>Prajwal</h1>
            <p>A Semi-Full Stack Developer Who Is Owner Of Hyricon Development</p>
            <div className='connect'>
              <a href='https://prajwaldev.xyz' className='btn btn-hover'>
                Website
              </a>
              <a
                className='btn btn-hover'
                href='https://github.com/Prajwal433/'
                target='_blank'
                rel='noreferrer'
              >
                Github
              </a>
            </div>
          </div>
        </div>
      </div>
      <br/>
      <div className='profile'>
          <div className='profile'>
            <div className='image-container'>
              <Image src={GAMELEGENDX} layout='fill' />
            </div>
          <div>
            <p>This Is</p>
            <h1>GAMELEGENDX</h1>
            <p>A Full Stack Developer Who Is Founder Of Hyricon Development</p>
            <div className='connect'>
              <a href={profile.email} className='btn btn-hover'>
                Contact
              </a>
              <a
                className='btn btn-hover'
                href='https://github.com/Gamelegendx/'
                target='_blank'
                rel='noreferrer'
              >
                Github
              </a>
            </div>
          </div>
        </div>
        </div>
      </section>

      <section className='section animate__animated animate__slideInDown'>
        <h2 className='title'>Leading Developer</h2>
        <div className='profile'>
          <div className='image-container'>
            <Image src={Manouel} layout='fill' />
          </div>
        <div className='profile'>
          <div>
            <p>This Is</p>
            <h1>Manouel</h1>
            <p>A Semi-Full Stack Developer Who Is Owner Of Hyricon Development</p>
            <div className='connect'>
              <a href={profile.email} className='btn btn-hover'>
                Contact
              </a>
              <a
                className='btn btn-hover'
                href='https://github.com/manouel-1/'
                target='_blank'
                rel='noreferrer'
              >
                Github
              </a>
            </div>
          </div>
        </div>
      </div>
      <br/>
      <div className='profile'>
        <div className='image-container'>
          <Image src={ExoticalCat} layout='fill' />
        </div>
      <div className='profile'>
        <div>
          <p>This Is</p>
          <h1>ExoticalCat</h1>
          <p>A Semi-Full Stack Developer Who Is Owner Of Hyricon Development</p>
          <div className='connect'>
            <a href={profile.email} className='btn btn-hover'>
              Contact
            </a>
          </div>
        </div>
      </div>
    </div>
      </section>

      <section className='section animate__animated animate__slideInDown'>
        <h2 className='title'>Developer</h2>
        <div className='profile'>
          <div className='image-container'>
            <Image src={MemzDev} layout='fill' />
          </div>
        <div className='profile'>
          <div>
            <p>This Is</p>
            <h1>MemzDev</h1>
            <p>A Semi-Full Stack Developer Who Is Owner Of Hyricon Development</p>
            <div className='connect'>
              <a href={profile.email} className='btn btn-hover'>
                Contact
              </a>
              <a
                className='btn btn-hover'
                href='https://github.com/UnknownAMD/'
                target='_blank'
                rel='noreferrer'
              >
                Github
              </a>
            </div>
          </div>
        </div>
      </div>
      <br/>
      <div className='profile'>
        <div className='image-container'>
          <Image src={DHVIT} layout='fill' />
        </div>
      <div className='profile'>
        <div>
          <p>This Is</p>
          <h1>DHVIT</h1>
          <p>A Full Stack Backend Developer And Full Stack API Developer And More</p>
          <div className='connect'>
            <a href={profile.email} className='btn btn-hover'>
              Contact
            </a>
            <a
              className='btn btn-hover'
              href='https://github.com/dhvitOP/'
              target='_blank'
              rel='noreferrer'
            >
              Github
            </a>
          </div>
        </div>
      </div>
    </div>
    <br/>
    <div className='profile'>
      <div className='image-container'>
        <Image src={IIIIXI} layout='fill' />
      </div>
    <div className='profile'>
      <div>
        <p>This Is</p>
        <h1>IIIIXI</h1>
        <p>Software developer, UI/UX Designer, Web developer and CEO at Project Razer</p>
        <div className='connect'>
          <a href={profile.email} className='btn btn-hover'>
            Contact
          </a>
          <a
            className='btn btn-hover'
            href='https://github.com/amajayasinghe'
            target='_blank'
            rel='noreferrer'
          >
            Github
          </a>
        </div>
      </div>
    </div>
  </div>
  <br/>
  <div className='profile'>
    <div className='image-container'>
      <Image src={Sandaru} layout='fill' />
    </div>
  <div className='profile'>
    <div>
      <p>This Is</p>
      <h1>Sandaru Tharuneth</h1>
      <p>Software developer, UI/UX Designer, Musical Artist Web developer and Owner of Project Razer</p>
      <div className='connect'>
        <a href='https://sandarutharuneth.com/' className='btn btn-hover'>
          Website
        </a>
        <a
          className='btn btn-hover'
          href='https://github.com/sandarutharuneth'
          target='_blank'
          rel='noreferrer'
        >
          Github
        </a>
      </div>
    </div>
  </div>
</div>
      </section>

    </>
  );
}
