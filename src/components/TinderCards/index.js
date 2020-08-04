import React, { useState, useEffect } from 'react';
import TinderCard from 'react-tinder-card';
import './index.css';

import database from '../../firebase';

const TinderCards = () => {
    const [people, setPeople] = useState([]);

    useEffect(() => {
        const unsubscribe =database
            .collection('people')
            .onSnapshot((snapshot) =>
                setPeople(snapshot.docs.map(doc => doc.data()))
            );

        return () => {
            unsubscribe();
        }
    }, []);

    return (
        <div>
            <div className="tindercards_container">
                {
                    people.map((person) => {
                        return (
                            <TinderCard
                                key={person.name}
                                className="swipe"
                                preventSwipe={['up', 'down']}
                            >
                                <div className="card" style={{ backgroundImage: `url(${person.url})` }}>
                                    <h3>{person.name}</h3>
                                </div>
                            </TinderCard>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default TinderCards;