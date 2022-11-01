import React from 'react';

import { BsTwitter, BsInstagram, BsLinkedin } from 'react-icons/bs';
import { FaFacebook } from 'react-icons/fa';

const SocialMedia = () => {
    return (
        <div className='app__socials'>
            <div>
                <BsLinkedin />
            </div>
            <div>
                <BsTwitter />
            </div>
            <div>
                <BsInstagram />
            </div>
            <div>
                <FaFacebook />
            </div>
        </div>
    )
}

export default SocialMedia