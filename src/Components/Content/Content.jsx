import './Content.css';

import cv_file from '../../Files/RESUME-1.pdf'

const Content = () => {
    return (
        <>
            <main id='Content__ID' className='Content'>
                <div className='Content__container container'>
                    <div className='Content__container-inner'>
                        <h2>Hey, I'm Alex</h2>
                        <h1>
                            <span>Frontend</span> developer
                        </h1>
                        <p>I'm always ready for new challenges and committed to continuous learning to stay up to date with the latest technological trends. My goal is to create websites that not only look great but also provide an excellent user experience.</p>
                        <a href={cv_file} download="Alexander_Kuznecov__CV" target='_blank'>
                        <button title='Download CV' type='button'>
                            Download CV
                        </button>
                        </a>
                    </div>
                </div>
            </main>
        </>
    );
};

export default Content;
