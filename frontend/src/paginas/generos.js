import { BarraNavegacion } from "../navbar/barra-navegacion";
import { Carousel } from "react-bootstrap";
import { useEffect, useState } from "react";

const Generos = () => {
    const [genres, setGenres] = useState(null);

    useEffect(() => {
        const fetchGenres = async () => {
            const response = await fetch("http://localhost:4000/genres");
            const json = await response.json();

            if (response.ok) {
                setGenres(json);
            }
        };

        fetchGenres();
    }, []);

    return (
        <>
            <BarraNavegacion />
            <Carousel>
                {genres &&
                    genres.map((genre) => (
                        <Carousel.Item key={genre._id}>
                            <img
                                className='d-block w-100'
                                src={genre.img}
                                alt=''
                            />

                            <Carousel.Caption>
                                <h3> {genre.name} </h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                    ))}
            </Carousel>
        </>
    );
};

export default Generos;
