import './Content.css';

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
                        <button title='Download CV' type='button'>
                            Download CV
                        </button>
                    </div>
                </div>
            </main>
        </>
    );
};

export default Content;
