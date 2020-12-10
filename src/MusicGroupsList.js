import React from 'react';
import MusicGroup from './MusicGroup';

export default class MusicGroupsList extends React.Component {

    render() {
        // let musicGroups = this.props.musicGroups;
        // console.log(data);

        return(
            <>
            {
                //{...group} не пользуюсь, так как элемент массива НЕ объект
                this.props.musicGroups.map( group => <MusicGroup group={group} key={group}></MusicGroup>)
            }
            </>
        )
    }
}