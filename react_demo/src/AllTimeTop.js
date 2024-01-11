import { MovieComponent, Sidebar } from "./Shared";

const AllTimeTop = () => {
    
    const movies = [
        {
            title: "The Shawshank Redemption",
            description:
                "Over the course of several years, two convicts form a friendship, seeking consolation and, eventually, redemption through basic compassion.",
            releaseDate: "September 13, 1994",
            poster: "https://m.media-amazon.com/images/M/MV5BNDE3ODcxYzMtY2YzZC00NmNlLWJiNDMtZDViZWM2MzIxZDYwXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg",
            imdbPageURL: "https://www.imdb.com/title/tt0111161",
        },
        {
            title: "The Godfather",
            description:
                "Don Vito Corleone, head of a mafia family, decides to hand over his empire to his youngest son Michael. However, his decision unintentionally puts the lives of his loved ones in grave danger.",
            releaseDate: "March 14, 1972",
            poster: "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UY1982_.jpg",
            imdbPageURL: "https://www.imdb.com/title/tt0068646",
        },
        {
            title: "The Dark Knight",
            description:
                "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
            releaseDate: "July 18, 2008",
            poster: "https://m.media-amazon.com/images/M/MV5BMTIzMDc4MzA2Ml5BMl5BanBnXkFtZTcwODU0MzA3MQ@@._V1_.jpg",
            imdbPageURL: "https://www.imdb.com/title/tt0468569",
        },
        {
            title: "The Godfather Part II",
            description:
                "The early life and career of Vito Corleone in 1920s New York City is portrayed, while his son, Michael, expands and tightens his grip on the family crime syndicate.",
            releaseDate: "December 12, 1974",
            poster: "https://m.media-amazon.com/images/M/MV5BYjUzODIzYTgtZDVhYi00MGI3LWEzMjAtNGQ4NjRhNDNhN2RlXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_FMjpg_UX936_.jpg",
            imdbPageURL: "https://www.imdb.com/title/tt0071562",
        },
        {
            title: "12 Angry Men",
            description:
                "The jury in a New York City murder trial is frustrated by a single member whose skeptical caution forces them to more carefully consider the evidence before jumping to a hasty verdict.",
            releaseDate: "April 10, 1957",
            poster: "https://m.media-amazon.com/images/M/MV5BMWU4N2FjNzYtNTVkNC00NzQ0LTg0MjAtYTJlMjFhNGUxZDFmXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_FMjpg_UX974_.jpg",
            imdbPageURL: "https://www.imdb.com/title/tt0050083",
        },
        {
            title: "Schindler's List",
            description:
                "In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.",
            releaseDate: "December 7, 1993",
            poster: "https://m.media-amazon.com/images/M/MV5BNzczOWJlYTAtMDQ1Yy00MWU5LTk3Y2QtMWEyOGRiMjFkMTJmXkEyXkFqcGdeQXVyNTc5OTMwOTQ@._V1_FMjpg_UX606_.jpg",
            imdbPageURL: "https://www.imdb.com/title/tt0108052",
        },
        {
            title: "The Lord of the Rings: The Return of the King",
            description:
                "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.",
            releaseDate: "December 3, 2003",
            poster: "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UX800_.jpg",
            imdbPageURL: "https://www.imdb.com/title/tt0167260",
        },
        {
            title: "Pulp Fiction",
            description:
                "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
            releaseDate: "May 21, 1994",
            poster: "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UX1055_.jpg",
            imdbPageURL: "https://www.imdb.com/title/tt0110912",
        },
        {
            title: "The Lord of the Rings: The Fellowship of the Ring",
            description:
                "A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.",
            releaseDate: "December 10, 2001",
            poster: "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_FMjpg_UY2936_.jpg",
            imdbPageURL: "https://www.imdb.com/title/tt0120737",
        },
        {
            title: "Inception",
            description:
                "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O., but his tragic past may doom the project and his team to disaster.",
            releaseDate: "July 8, 2010",
            poster: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_FMjpg_UX700_.jpg",
            imdbPageURL: "https://www.imdb.com/title/tt1375666",
        },
    ];

    return (
        <>
            <h1 className="my-2 py-2">Top 10 Movies of All Time</h1>
            <div className="d-flex flex-row">
                <div>
                    {movies.map((movie, index) => (
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
                <Sidebar />
            </div>
        </>
    );
};

export default AllTimeTop;
