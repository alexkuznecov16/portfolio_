import './Portfolio.css';

import Calculator_icon from '../../Assets/calculatorappImage.png';
import CountdownTimer_icon from '../../Assets/countdowntimerappImage.png';
import MoviesApp_icon from '../../Assets/moviesappImage.png';
import QuizApp_icon from '../../Assets/quizappImage.png';
import Timer_icon from '../../Assets/timerappImage.png';
import WeatherApp_icon from '../../Assets/weatherappImage.png';
import Kanban_icon from '../../Assets/kanban.png'

const Portfolio = () => {
    const portfolioItems = [
        {
            icon: Kanban_icon,
            title: 'Kanban board',
            description: 'A simple kanban board with local storage saving.',
            date: '09.11.2023',
            url: 'https://github.com/alexkuznecov16/kanban-board',
        },
        {
            icon: MoviesApp_icon,
            title: 'Movies app',
            description: 'Search for your favorite movies, read descriptions.',
            date: '24.10.2023',
            url: 'https://github.com/alexkuznecov16/movies-app',
        },
        {
            icon: WeatherApp_icon,
            title: 'Weather app',
            description: 'A weather application that provides you with up-to-date weather information in your region.',
            date: '23.10.2023',
            url: 'https://github.com/alexkuznecov16/weather-app',
        },
        {
            icon: Calculator_icon,
            title: 'Calculator',
            description: 'A simple calculator for performing basic mathematical operations.',
            date: '23.08.2023',
            url: 'https://github.com/alexkuznecov16/SimpleCalculatorReact',
        },
        {
            icon: QuizApp_icon,
            title: 'Quiz',
            description: 'An application for engaging in exciting quizzes.',
            date: '18.08.2023',
            url: 'https://github.com/alexkuznecov16/SimpleQuiz',
        },
        {
            icon: CountdownTimer_icon,
            title: 'Countdown timer',
            description: 'A countdown timer that helps you keep track of the time until important events.',
            date: '17.08.2023',
            url: 'https://github.com/alexkuznecov16/SimpleCountdownTimer',
        },
        {
            icon: Timer_icon,
            title: 'Timer (Stop-Watch)',
            description: 'A stopwatch for measuring time. Keep track of how much time has passed.',
            date: '15.08.2023',
            url: 'https://github.com/alexkuznecov16/SimpleStopWatch',
        },
    ];

    return (
        <>
            <div id='Portfolio__ID' className='Portfolio'>
                <div className='Portfolio__container container'>
                    <h2>My works</h2>
                    <div className='Portfolio__container-inner'>
                        {portfolioItems.map((item, index) => (
                            <div title='Click to open project' onClick={() => (window.location = item.url)} rel='noopener' className='Portfolio__container-inner-item' key={index}>
                                <img src={item.icon} alt='Poster' />
                                <div className='Portfolio__container-inner-item-info'>
                                    <h3>{item.title}</h3>
                                    <p>{item.description}</p>
                                    <span>{item.date}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Portfolio;
