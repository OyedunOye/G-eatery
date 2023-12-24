import React from 'react';
import { FiFacebook, FiInstagram, FiTwitter } from 'react-icons/fi'
import './Footer.css';
import  { FooterOverlay, Newsletter } from '../../components';

const Footer = () => (
  <div className='app__footer section__padding'>
    <FooterOverlay />
    <Newsletter />
  </div>
);

export default Footer;
