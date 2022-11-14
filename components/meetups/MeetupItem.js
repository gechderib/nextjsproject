import { useRouter } from "next/router";

const MeetupItem = ({ meetup }) => {
  const router = useRouter()

  const showDetailHandler = () => {
    router.push(`/${meetup.id}`)
  }
  return (
    <section>
      <h2>{meetup.title}</h2>
      <img src={meetup.image} alt={meetup.title} />
      <address>{meetup.address}</address>
      <p>{meetup.description}</p>
      <button onClick={showDetailHandler}>Show detail</button>
    </section>
  );
};

export default MeetupItem;
