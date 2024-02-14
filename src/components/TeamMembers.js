// TeamMember.js

function TeamMember({ name, position, bio, imageUrl }) {
  return (
    <div className="team-member">
      <div className="member-image rounded-full h-72  overflow-hidden ">
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <div className="member-info">
        <h3>{name}</h3>
        <p>{position}</p>
        <p>{bio}</p>
      </div>
    </div>
  );
}

export default TeamMember;
