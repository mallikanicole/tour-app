import React, { useState, useEffect } from 'react';

const Gallery = () => {
    const [tours, setTours] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchTours = async () => {
        setLoading(true);
        try {
            const response = await fetch('https://course-api.com/react-tours-project');
            const data = await response.json();
            setTours(data);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching tours:', error);
            setLoading(false);
        }
    };//fetch data from API

    useEffect(() => {
        fetchTours();
    }, []);

    if (loading) {
        return <h2>Loading...</h2>;
    };//display loading message when loading

    return (
        <div>
            <h1>Tour Gallery</h1>
            <div>
                {tours.map((tour) => (
                    <div key={tour.id}>
                        <h2>{tour.name}</h2>
                        <img src={tour.image} alt={tour.name} style={{ width: '300px' }} />
                        <p>{tour.info}</p>
                        <p>Price: ${tour.price}</p>
                    </div>
                ))}
            </div>
        </div>
    );//use map with key prop to render tour data
};

export default Gallery;
