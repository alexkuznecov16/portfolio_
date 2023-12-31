import './Contacts.css';

import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contacts = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_4k0jv09', 'template_l0nnav9', form.current, 'n01yKVaJep3s299ib').then(
            (result) => {
                console.log(result);
            },
            (error) => {
                console.log(error.text);
            },
        );
    };

    function notificationAboutSending() {
        const input1 = document.getElementById('inputName');
        const input2 = document.getElementById('inputEmail');
        const input3 = document.getElementById('inputText');
        if (input1.value != '' && input2.value != '' && input3.value != '') {
            input1.value = '';
            input2.value = '';
            input3.value = '';
            alert('Your message has been sent!');
        } else {
            return;
        }
    }

    return (
        <>
            <div id='Contacts__ID' className='Contacts'>
                <div className='Contacts__container container'>
                    <div className='Contacts__container-inner'>
                        <iframe
                            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d139196.2935990186!2d23.55736846136626!3d56.96692449366089!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46eedd07e8a104d3%3A0x78537e586c6c16df!2z0K7RgNC80LDQu9Cw!5e0!3m2!1sru!2slv!4v1698312253163!5m2!1sru!2slv'
                            width='400'
                            height='450'
                            style={{ border: 0 }}
                            allowfullscreen=''
                            loading='lazy'
                            referrerpolicy='no-referrer-when-downgrade'
                        ></iframe>
                        <form ref={form} onSubmit={sendEmail} className='Contacts__container-inner-form'>
                            <label>Name</label>
                            <input id='inputName' placeholder='Your name' required type='text' name='user_name' />
                            <label>Email</label>
                            <input id='inputEmail' placeholder='Your eMail' required type='email' name='user_email' />
                            <label>Message</label>
                            <textarea id='inputText' placeholder='Your message' rows={10} cols={40} required name='message' />
                            <button onClick={() => notificationAboutSending()} type='submit' value='Send'>
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contacts;
