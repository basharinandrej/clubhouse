import React, {useContext} from 'react';
import BackButton from "../../components/Buttons/BackButton/BackButton";
import {Header} from "../../components/Header";
import Room from '../../components/Room/Room';
import Axios from "../../core/axios";


const Conversation = ({currentRoom}) => {

    return (
        <div className={`container`}>
            <Header />

            <BackButton/>
            <Room
                title={`Название комнаты - ${currentRoom.title}`}
            />
        </div>
    )
}

export default Conversation

export async function getServerSideProps(cxt) {
  const {id: idRoom} = cxt.query
  try {
    const {data} = await Axios.get(`/RoomsCard.json`)
    const currentRoom = data.find(room => room.id === idRoom)
    return { props: {
      currentRoom
    }
  }
  } catch (err) {
    console.log('err', err.message)
    return []
  }
}