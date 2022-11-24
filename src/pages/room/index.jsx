import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import React from 'react'
import { useParams } from 'react-router-dom'


const RoomPage = () => {
    const { roomId } = useParams();

const myMeeting = async(element) => {
    const appID = 1270366679 ;
    const serverSecret = "d6ace7c84ccb8bb3dfd1443d55bb435b";
    const kiToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
            appID,
            serverSecret,
            roomId,
            Date.now().toString(),
            'Enter Your Name',
        );
        const zp = ZegoUIKitPrebuilt.create(kiToken)
        zp.joinRoom({
            container:element,
            scenario:{
                mode:ZegoUIKitPrebuilt.VideoConference
            }
        })
}


    return (
        <div className='room-page'>
            <div ref={myMeeting}/>
        </div>
    )
}

export default RoomPage