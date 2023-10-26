import './Skills.css';

// Import images
import htmlcssjs_icon from '../../Assets/html+css+js.png';
import sass_icon from '../../Assets/Sass.png';
import typescript_icon from '../../Assets/typescript.png';
import react_icon from '../../Assets/React.png';
import webpack_icon from '../../Assets/webpack.png';
import npmyarn_icon from '../../Assets/npm+yarn.png';
import git_icon from '../../Assets/git.png';

const Skills = () => {
    return (
        <>
            <div className='Skills'>
                <div className='Skills__inner'>
                    <div className='Skills__inner-item'>
                        <img src={htmlcssjs_icon} alt='HTML+CSS' />
                    </div>
                    <div className='Skills__inner-item'>
                        <img src={sass_icon} alt='Sass' />
                    </div>
                    <div className='Skills__inner-item'>
                        <img src={typescript_icon} alt='TypeScript' />
                    </div>
                    <div className='Skills__inner-item'>
                        <img src={react_icon} alt='ReactJS' />
                    </div>
                    <div className='Skills__inner-item'>
                        <img src={webpack_icon} alt='Webpack' />
                    </div>
                    <div className='Skills__inner-item'>
                        <img src={npmyarn_icon} alt='NPM+YARN' />
                    </div>
                    <div className='Skills__inner-item'>
                        <img src={git_icon} alt='Git' />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Skills;
