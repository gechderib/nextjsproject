import axios from "axios";
import Head from "next/head";
import MeetupList from "../components/meetups/MeetupList";

// static generation and server-side-rendering
const HomePage = (props) => {  
  return <div>
    <Head>
      <title>Nextjs tutorial</title>
      <meta name="description" content="this is a brand application with next js"></meta>
    </Head>
      <MeetupList meetups={props.meetups}/>
  </div>
}

// ... data is regenerated for every requests
// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;
//   console.log(req + res)
//   // fetch data from the api
//   return {
//     props:{
//       meetups:DUMMY_DATA
//     }
//   }
// }


///.... data is cached and reused
export async function getStaticProps(){
  // fetching data from the api 
  let meetups;
  const response = await axios.get("http://localhost:3500/meetups");
  if(response){
    meetups = response.data
  }
  // 
  return {
    props:{
      meetups:meetups
    },
    revalidate:1
  }
}
export default HomePage;