import MeetupItem from "./MeetupItem";
import classes from "./MeetupList.module.css"
function MeetupList({ meetups }) {
  return (
    <div className={classes.meetuplist}>
      {meetups.map((meetup) => (
        <MeetupItem key={meetup.id} meetup={meetup} />
      ))}
    </div>
  );
}

export default MeetupList;
