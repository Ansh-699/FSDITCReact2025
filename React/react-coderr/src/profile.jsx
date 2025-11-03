function Profile(props) {
  return (
    <div className="profile-card">
      <h2>{props.name}</h2>
      <p>Class: {props.class}</p>
      <p>Roll No: {props.rollno}</p>
    </div>
  );
}

export default Profile;
