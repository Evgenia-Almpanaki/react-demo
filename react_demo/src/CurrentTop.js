import { MovieComponent, Sidebar } from "./Shared";

const CurrentTop = () => {

    const movies = [
        {
            title: "Spider-Man: Across the Spider-Verse",
            description:
                "Miles Morales catapults across the multiverse, where he encounters a team of Spider-People charged with protecting its very existence. When the heroes clash on how to handle a new threat, Miles must redefine what it means to be a hero.",
            releaseDate: "May 31, 2023",
            poster: "https://m.media-amazon.com/images/M/MV5BOTIwMGJiYTctZjU1OS00ZDdjLWJhMDgtMDZiYzc5Y2EzOWZiXkEyXkFqcGdeQXVyMTE2Mzg1NTEy._V1_FMjpg_UX1080_.jpg",
            imdbPageURL: "https://www.imdb.com/title/tt9362722",
        },
        {
            title: "Poor Things",
            description:
                "The incredible tale about the fantastical evolution of Bella Baxter; a young woman brought back to life by the brilliant and unorthodox scientist, Dr. Godwin Baxter.",
            releaseDate: "September 1, 2023",
            poster: "https://m.media-amazon.com/images/M/MV5BNGIyYWMzNjktNDE3MC00YWQyLWEyMmEtN2ZmNzZhZDk3NGJlXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_FMjpg_UY2000_.jpg",
            imdbPageURL: "https://www.imdb.com/title/tt14230458",
        },
        {
            title: "Gojira-1.0",
            description:
                "Post war Japan is at its lowest point when a new crisis emerges in the form of a giant monster, baptized in the horrific power of the atomic bomb.",
            releaseDate: "November 1, 2023",
            poster: "https://m.media-amazon.com/images/M/MV5BZTJlZGFiMzAtMjlmMy00ODExLThhNWEtYTVmYTlhYTFhYjNkXkEyXkFqcGdeQXVyMjMwNDcwNjE@._V1_FMjpg_UX730_.jpg",
            imdbPageURL: "https://www.imdb.com/title/tt23289160",
        },
        {
            title: "Oppenheimer",
            description:
                "The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb.",
            releaseDate: "July 11, 2023",
            poster: "https://m.media-amazon.com/images/M/MV5BMDBmYTZjNjUtN2M1MS00MTQ2LTk2ODgtNzc2M2QyZGE5NTVjXkEyXkFqcGdeQXVyNzAwMjU2MTY@._V1_.jpg",
            imdbPageURL: "https://www.imdb.com/title/tt15398776",
        },
        {
            title: "Kuru Otlar Üstüne",
            description:
                "A young teacher hopes to be transferred to Istanbul after four years of mandatory service in a remote village, but is accused of inappropriate contact by two students. After losing hope, a colleague offers him new perspectives on life.",
            releaseDate: "May 19, 2023",
            poster: "https://d27csu38upkiqd.cloudfront.net/eyJidWNrZXQiOiJmZGMtc2l0ZXB1YmxpYy1tZWRpYS1wcm9kIiwia2V5IjoidXBsb2Fkc1wvMjAyM1wvMDVcLzE2MDAxMC5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0Ijo0MzAsImZpdCI6ImNvdmVyIn19fQ==",
            imdbPageURL: "https://www.imdb.com/title/tt13231544",
        },
        {
            title: "The Holdovers",
            description:
                "A cranky history teacher at a remote prep school is forced to remain on campus over the holidays with a troubled student who has no place to go.",
            releaseDate: "August 31, 2023",
            poster: "https://m.media-amazon.com/images/M/MV5BNDc2MzNkMjMtZDY5NC00NmQ0LWI1NjctZjRhNWIzZjc4MGRiXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_FMjpg_UX1080_.jpg",
            imdbPageURL: "https://www.imdb.com/title/tt14849194",
        },
        {
            title: "Past Lives",
            description:
                "Nora and Hae Sung, two deeply connected childhood friends, are wrested apart after Nora's family emigrates from South Korea. Twenty years later, they are reunited for one fateful week as they confront notions of love and destiny.",
            releaseDate: "June 23, 2023",
            poster: "https://m.media-amazon.com/images/M/MV5BOTkzYmMxNTItZDAxNC00NGM0LWIyODMtMWYzMzRkMjIyMTE1XkEyXkFqcGdeQXVyMTAyMjQ3NzQ1._V1_FMjpg_UX972_.jpg",
            imdbPageURL: "https://www.imdb.com/title/tt13238346",
        },
        {
            title: "The Zone of Interest",
            description:
                "The commandant of Auschwitz, Rudolf Höss, and his wife Hedwig, strive to build a dream life for their family in a house and garden next to the camp.",
            releaseDate: "May 19, 2023",
            poster: "https://m.media-amazon.com/images/M/MV5BNjgyYjlhN2MtMGIxYy00NGZlLTk5MTEtMDg3ZDM3OWI0M2NlXkEyXkFqcGdeQXVyMTY3ODkyNDkz._V1_FMjpg_UX1000_.jpg",
            imdbPageURL: "https://www.imdb.com/title/tt7160372",
        },
        {
            title: "The Color Purple",
            description:
                "A woman faces many hardships in her life, but ultimately finds extraordinary strength and hope in the unbreakable bonds of sisterhood.",
            releaseDate: "October 27, 2023",
            poster: "https://m.media-amazon.com/images/M/MV5BYjBkNGE0NGYtYmU5Ny00NjRiLTk5MmYtMWU4NzYxMDE4YWY4XkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_FMjpg_UY4096_.jpg",
            imdbPageURL: "https://www.imdb.com/title/tt1200263/",
        },
        {
            title: "Guardians of the Galaxy Vol. 3",
            description:
                "Still reeling from the loss of Gamora, Peter Quill rallies his team to defend the universe and one of their own - a mission that could mean the end of the Guardians if not successful.",
            releaseDate: "April 19, 2023",
            poster: "https://m.media-amazon.com/images/M/MV5BNGVmMDhlMmMtZjY3ZC00MDQ1LWFjYjMtMzM4YjI0OGZlMzY0XkEyXkFqcGdeQXVyMTE2Mzg1NTEy._V1_FMjpg_UX770_.jpg",
            imdbPageURL: "https://www.imdb.com/title/tt6791350",
        },
    ];

    return (
        <>
            <h1 className="my-2">Top 10 Movies of 2023</h1>
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
                <Sidebar/>
            </div>
        </>
    );
};

export default CurrentTop;
