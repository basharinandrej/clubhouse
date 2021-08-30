import React from 'react';
import styles from './room.module.sass'

import { RoomInterface } from './RoomTypes';

function Room(props: RoomInterface) {
    const {title} : {title: string} = props

    return (
        <div className={styles.room}>
            <h2>{title}</h2>

        </div>
    );
}

export default Room;
