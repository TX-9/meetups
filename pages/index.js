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

function HomePage() {
    return <MeetupList meetups={DUMMY_MEETUPS} />
}

export default HomePage;