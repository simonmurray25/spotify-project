CREATE TABLE top_10_full(
    index integer,
    year integer,
    rank integer,
    title character varying(100),
    artist character varying(200),
    lyrics text,
    popularity numeric,
    danceability numeric,
    energy numeric,
    tempo numeric,
    duration numeric
);

CREATE TABLE categories_top_40(
    index integer,
    category character varying(50),
    rank integer,
    title character varying(100),
    artist character varying(200)
);
