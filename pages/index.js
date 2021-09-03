import { useEffect, useState } from 'react';
import MeetupList from '../components/meetups/MeetupList';

const DUMMY_MEETUPS = [
    {
        id: 'm1',
        title: 'First Meetup',
        image: '',
        address: 'Some address 5, city',
        description: 'FFirst'
    },
    {
        id: 'm2',
        title: 'Second Meetup',
        image: '',
        address: 'Some address 5, city',
        description: 'Second~~~'
    },
    {
        id: 'm3',
        title: 'Third Meetup',
        image: '',
        address: 'Some address 5, city',
        description: 'Third~~~'
    }
];


function HomePage(props) {
    return <MeetupList meetups={props.meetups} />
}

// will be executed on Server every time
export async function getServerSideProps(context) {
    const req = context.req;
    const res = context.res;
    // fetch data from API
    return {
        props: {
            meetups: DUMMY_MEETUPS
        }
    };
}

// static pre-rendering. will be executed during build
// export async function getStaticProps() {
//     return {
//         props: {
//             meetups: DUMMY_MEETUPS
//         },
//         revalidate: 10 // every 10 seconds server re-renders after deployed
//     }
// }

export default HomePage;