import axios from "axios";
import Head from "next/head";
import MeetupDetail from "../../components/meetups/MeetupDetail";

const MeetupDetails = (props) => {
  return (
    <div>
      <Head>
        <title>{props.meetup.title}</title>
        <meta name="description" content={props.meetup.description}/>
      </Head>
      <MeetupDetail meetup={props.meetup} />
    </div>
  );
};

export async function getStaticPaths() {
  let meetups;
  const response = await axios.get('http://localhost:3500/meetups');
  if (response) {
    meetups = response.data;
  }

  return {
    // false => your path  contain all params
    // true => your path doesn't contain all path it trys to generate a new page wit that url
    fallback: false,
    paths: meetups.map(meetup => ({params: { meetupId: meetup.id.toString()}}))
  };
}

export async function getStaticProps(context) {
  // fetch api data
  const meetupId = context.params.meetupId;
  const response = await axios.get(`http://localhost:3500/meetups/${meetupId}`);
  let meetup;
  if (response) {
    console.log(response.data);
    meetup = response.data;
  }
  console.log(meetupId);
  return {
    props: {
      meetup: {
        image: meetup.image,
        title: meetup.title,
        address: meetup.address,
        description: meetup.description,
        id: meetupId,
      },
    },
  };
}

export default MeetupDetails;

/// getStaticProps, getServerSideProps and getStaticPaths used for pre-rendring when we fetch the data
// description metaTag, 