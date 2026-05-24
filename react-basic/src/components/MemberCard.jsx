function MemberCard({ name, age, favorite }) {

  return (
    <div className="card">
      <h3>{name}</h3>
      <p>나이: {age}</p>
      <p>좋아하는 것: {favorite}</p>
    </div>
  );

}

export default MemberCard;