import { MovieComponent } from "./Shared";
import SpeedRoundedIcon from "@mui/icons-material/SpeedRounded";
import { Icon } from "@mui/material";
import TaskAltRoundedIcon from "@mui/icons-material/TaskAltRounded";
import AdsClickRoundedIcon from "@mui/icons-material/AdsClickRounded";
import "./Home.css";

export const topPicks = [
    {
        title: "Catch Me If You Can",
        description:
            "Barely 21 yet, Frank is a skilled forger who has passed as a doctor, lawyer and pilot. FBI agent Carl becomes obsessed with tracking down the con man, who only revels in the pursuit.",
        releaseDate: "December 16, 2002",
        poster: "https://m.media-amazon.com/images/M/MV5BMTY5MzYzNjc5NV5BMl5BanBnXkFtZTYwNTUyNTc2._V1_.jpg",
        imdbPageURL: "https://www.imdb.com/title/tt0264464",
    },
    {
        title: "Inception",
        description:
            "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O., but his tragic past may doom the project and his team to disaster.",
        releaseDate: "July 8, 2010",
        poster: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_FMjpg_UX700_.jpg",
        imdbPageURL: "https://www.imdb.com/title/tt1375666",
    },
    {
        title: "The Matrix",
        description:
            "When a beautiful stranger leads computer hacker Neo to a forbidding underworld, he discovers the shocking truth--the life he knows is the elaborate deception of an evil cyber-intelligence.",
        releaseDate: "March 24, 1999",
        poster: "https://m.media-amazon.com/images/M/MV5BNWI4OWYzNTYtNWI4MC00MzllLWE4MzUtMTRiY2IzYmZkNzgyXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UX1000_.jpg",
        imdbPageURL: "https://www.imdb.com/title/tt0133093",
    },
    {
        title: "Memento",
        description:
            "A man with short-term memory loss attempts to track down his wife's murderer.",
        releaseDate: "September 5, 2000",
        poster: "https://m.media-amazon.com/images/M/MV5BYjRjZjUzMTEtMjhjNC00NTllLWE2OGMtYjVlNjYwMDk5MGRjXkEyXkFqcGdeQXVyMzAxNjg3MjQ@._V1_FMjpg_UX800_.jpg",
        imdbPageURL: "https://www.imdb.com/title/tt0209144",
    },
    {
        title: "12 Angry Men",
        description:
            "The jury in a New York City murder trial is frustrated by a single member whose skeptical caution forces them to more carefully consider the evidence before jumping to a hasty verdict.",
        releaseDate: "April 10, 1957",
        poster: "https://m.media-amazon.com/images/M/MV5BMWU4N2FjNzYtNTVkNC00NzQ0LTg0MjAtYTJlMjFhNGUxZDFmXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_FMjpg_UX974_.jpg",
        imdbPageURL: "https://www.imdb.com/title/tt0050083",
    },
];

const Home = () => {
    return (
        <>
            <div className="home-panel w-100 align-items-center justify-content-evenly d-flex flex-row bg-dark mt-4">
                <div className="d-flex flex-column">
                    <Icon
                        component={SpeedRoundedIcon}
                        sx={{ fontSize: 200 }}
                    />
                    <span className="text-center">Speed</span>
                </div>
                <div className="d-flex flex-column">
                    <Icon
                        component={AdsClickRoundedIcon}
                        sx={{ fontSize: 200 }}
                    />
                    <span className="text-center">Accuracy</span>
                </div>
                <div className="d-flex flex-column">
                    <Icon
                        component={TaskAltRoundedIcon}
                        sx={{ fontSize: 200 }}
                    />
                    <span className="text-center">Efficiency</span>
                </div>
            </div>
            <div className="w-100">
                <h2 className="text-center py-4">Our Top Picks</h2>
                {topPicks.map((movie, index) => (
                    <MovieComponent
                        key={movie.title}
                        title={index + 1 + ". " + movie.title}
                        description={movie.description}
                        releaseDate={movie.releaseDate}
                        poster={movie.poster}
                        imdbPage={movie.imdbPageURL}
                        isDark={!(index % 2)}
                    />
                ))}
            </div>
        </>
    );
};

export default Home;
