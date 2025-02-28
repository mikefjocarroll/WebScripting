function Avatar({ text }) {
  return <p>{text}</p>;
}

export default function Profile() {
  return (
    <div>
      <Avatar text={"pass prop 1"} />
      <br></br>
      <Avatar text={"pass prop 2"} />
      <br></br>
    </div>
  );
}
