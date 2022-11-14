import axios from "axios";
import Head from "next/head";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";
// http://localhost:3500/meetups
function NewMeetup() {
  const addNewMeetupHandler = async (entredMeetupData) => {
    console.log(entredMeetupData)
    const response = await axios.post("http://localhost:3500/meetups",entredMeetupData)
    if(response){
        console.log(response.data)
    }
  };

  return (
    <>
    <Head>
      <title>Add a new meetup</title>
      <meta name="description" content="add a new meetup the describe you well"/>
    </Head>
      <NewMeetupForm onAddNewMeetup={addNewMeetupHandler} />
    </>
  );
}

export default NewMeetup;
