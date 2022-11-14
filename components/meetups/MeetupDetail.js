const MeetupDetail = ({meetup}) => {
  return (
    <div>
      <img
        src={meetup.image}
        alt="first image"
      />
      <h1>{meetup.title}</h1>
      <address>{meetup.address}</address>
      <p>{meetup.description}</p>
    </div>
  );
};

export default MeetupDetail;
