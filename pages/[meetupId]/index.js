import { Fragment } from "react";
import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetails() {

    return <MeetupDetail image='' title='t' address='a' description='a'/>
}

export async function getStaticPaths() {
    return {
        fallback: false,
        paths: [
            { params: {
                meetupId: 'm1',
            }
        }
        ]
    }
}

export async function getStaticProps(context) {
    const meetupId = context.params.meetupId;

    console.log(meetupId);

    return {
        props: {
            meetupData:  {
                image: '',
                id: meetupId,
                title: 't',
                address: 'a',
                description: 'd'
            }
        }
    }
}

export default MeetupDetails;