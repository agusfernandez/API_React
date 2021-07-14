import ClipLoader from "react-spinners/ClipLoader";

const override ={
  display: "block",
  margin: "0 auto",
  borderColor: "red",
}

const Loading= ()=> {
  return (

      <ClipLoader color="red"  css={override} size={150} />
  );
}

export default Loading;