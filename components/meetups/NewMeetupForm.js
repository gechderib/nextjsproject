import { useState } from "react";
import classes from "./NewMeetupForm.module.css"
const NewMeetupForm = ({onAddNewMeetup}) => {

    const [title, setTitle] = useState("")
    const [image, setImageUrl] = useState("")
    const [address, setAddress] = useState("")
    const [description, setDescription] = useState("")

    const meetupData = {
        title,image, address, description
    }

    return (
    <div className={classes.newMeetup}>
      <form onSubmit={(e)=> {
        e.preventDefault()
        onAddNewMeetup(meetupData)
      }}>
        <label>Title</label><br/>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        <br />
        <label>Image</label><br/>
        <input type="url" value={image} onChange={(e) => setImageUrl(e.target.value)} />
        <br />
        <label>Address</label><br/>
        <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
        <br />
        <label>Description</label><br/>
        <textarea rows={4} type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
        <br />
        <button type="submit">Save Meetup</button>
      </form>
    </div>
  );
};

export default NewMeetupForm;
