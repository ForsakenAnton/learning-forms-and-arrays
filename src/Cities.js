import React from 'react';
import City from './City';

export default function Cities(props) {

    let cities = props.cities;

    return (
        <>
            {
                //если у нас обычный массив без объектов и тут мы пишем {...city}, то как получить на стороне City из props значение???
               // cities.map(city => <City {...city} ></City>)
                cities.map(city => <City value={city} key={city}></City>) // так как поле не обьект, то само поле и ключ. Я не сильно умничаю ? :)
            }
        </>
    )
} 