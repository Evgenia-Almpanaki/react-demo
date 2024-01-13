import "./Shared.css";
import { topPicks } from "./Home";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";

const MainMenu = () => {
    const mailto = "mailto:example@gmail.com";

    return (
        <div className="container-fluid">
            <div className="collapse navbar-collapse">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <NavHashLink
                            to="/#top"
                            className="px-4 nav-link link-secondary"
                            aria-current="page"
                        >
                            Home
                        </NavHashLink>
                    </li>
                    <li className="nav-item">
                        <NavHashLink
                            to="/allTimeTop#top"
                            className="px-4 nav-link link-secondary"
                        >
                            Top 10 Movies of All Time
                        </NavHashLink>
                    </li>
                    <li className="nav-item">
                        <NavHashLink
                            to="/currentTop#top"
                            className="px-4 nav-link link-secondary"
                            aria-current="page"
                        >
                            Top 10 Movies of 2023
                        </NavHashLink>
                    </li>

                    <li className="nav-item">
                        <Link
                            to="#"
                            className="px-4 nav-link link-secondary"
                            aria-current="page"
                            onClick={(e) => {
                                window.location.href = mailto;
                                e.preventDefault();
                            }}
                        >
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export const MovieComponent = ({
    title,
    description,
    poster,
    releaseDate,
    imdbPage,
    isDark,
}: {
    title: string,
    description: string,
    poster: string,
    releaseDate: string,
    imdbPage: string,
    isDark: boolean,
}) => {
    return (
        <div
            id={getAnchorName(title.substring(3))}
            className={`w-100 p-3 ${isDark ? "bg-dark" : "bg-secondary"}`}
        >
            <div className="p-4">
                <h2>{title}</h2>
                <div className="d-flex py-2">
                    <div className="pe-3">
                        <img width={200} src={poster} alt="poster" />
                    </div>
                    <div className="w-75">
                        <p>Release Date: {releaseDate}</p>
                        <p>{description}</p>
                        <button
                            type="button"
                            className="btn btn-info"
                            onClick={() => window.open(imdbPage, "_blank")}
                        >
                            IMDB
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export const getAnchorName = (movieName: string) => movieName.split(" ")[0]

const TopPicks = () => {
    useGSAP(() => {
        let animatedFrames = document.querySelectorAll(".animated-frame");
        var tl = gsap.timeline({ repeat: -1, repeatRefresh: true });
        animatedFrames.forEach((frame) => changeTopPick(tl, frame));
    }, {});

    const changeTopPick = (tl: any, frame: Node) => {
        tl.to(frame, { opacity: 0, y: "-=120", delay: 5 });
        tl.call(() => document.getElementById("topPicks")?.appendChild(frame));
        tl.to(frame, { opacity: 1, y: "+=120", duration: 0 });
    };

    return (
        <div id="topPicks">
            <h2 className="text-center pb-2">Top Picks</h2>
            {topPicks.map((movie) => {
                return (
                    <div
                        className="d-flex flex-row p-2 animated-frame"
                        key={movie.title}
                    >
                        <img
                            className="w-25 h-fit-content"
                            src={movie.poster}
                            alt="poster"
                        />
                        <div className="px-2">
                            <h5>{movie.title}</h5>
                            <p >{`${movie.description.substring(0, 50)}...`}</p>
                            <NavHashLink smooth to={"/#" + getAnchorName(movie.title)}>More...</NavHashLink>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

const RandomQuote = () => {
    const [randomQuote, setRandomQuote] = useState("");
    let randomQuoteIndex = Math.random();

    useEffect(() => {
        fetch("https://quotesondesign.com/wp-json/wp/v2/posts/?orderby=rand")
            .then((response) => response.json())
            .then((response) => {
                let randomElement =
                    response[Math.floor(randomQuoteIndex * response.length)];
                setRandomQuote(randomElement.content.rendered);
            })
            .catch((error) => console.log(error));
    }, []);

    return (
        <div className="px-2 small">
            <h4>Random Quote</h4>
            <p dangerouslySetInnerHTML={{ __html: randomQuote }}></p>
        </div>
    );
};

export const Sidebar = () => {
    return (
        <div className="sidebar h-100 ml-2 px-2">
            <RandomQuote />
            <hr />
            <TopPicks />
        </div>
    );
};
export default MainMenu;
