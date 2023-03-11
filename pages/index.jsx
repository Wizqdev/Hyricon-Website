import Image from 'next/image';
import Head from 'next/head';
import React, { useState, useEffect } from 'react';
import { fetchUserData, config } from '../utils/fetchUserData';
import Loader from '../components/Loader';
import { avatar } from '../utils/config';

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
        <h2 className='title'>About Us</h2>
        <div className='profile'>
          <div className='image-container'>
            <Image src={avatar} layout='fill' />
          </div>
        <div className='profile'>
          <div>
            <p>Hi, We Are</p>
            <h1>{profile.fullname}</h1>
            <p>{profile.about}</p>
            <div className='connect'>
              <a href={profile.email} className='btn btn-hover'>
                Contact
              </a>
              <a
                className='btn btn-hover'
                href='https://github.com/Hyricon-Development/'
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

      {frontend.length > 0 && (
        <section className='section section animate__animated animate__slideInUp'>
          <h2 className='title'>Front-End Tools</h2>
          <div className='skills'>
            {frontend.map((e, i) => {
              return (
                <div className='skill-item' key={i}>
                  <i className={e.icon}></i>
                  <span>{e.tool}</span>
                </div>
              );
            })}
          </div>
        </section>
      )}
      {backend.length > 0 && (
        <section className='section animate__animated animate__slideInUp'>
          <h2 className='title'>Back-End Tools</h2>
          <div className='skills'>
            {backend.map((e, i) => {
              return (
                <div className='skill-item' key={i}>
                  <i className={e.icon}></i>
                  <span>{e.tool}</span>
                </div>
              );
            })}
          </div>
        </section>
      )}

      {devtools.length > 0 && (
        <section className='section section animate__animated animate__slideInUp'>
          <h2 className='title'>Dev Tools</h2>
          <div className='skills'>
            {devtools.map((e, i) => {
              return (
                <div className='skill-item' key={i}>
                  <i className={e.icon}></i>
                  <span>{e.tool}</span>
                </div>
              );
            })}
          </div>
        </section>
      )}
    </>
  );
}
