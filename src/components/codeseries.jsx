
export const Code = () => {
  const name = "queeen of tears";
  const rating = "8.2";
  const summary = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem iusto aut, quidem perspiciatis optio aspernatur minima, odit, ratione laudantium natus vero minus consectetur cumque ex.";
  let age =16;
  // let canwatch = "Not Available";
  // if(age >= 28) canwatch = " Watch Now";

const canwatch = () => {
  if(age >=18) "Watch Now";
  return "Not Available";
};


  const returnGenre = ()=> {
    const genre = "RomCom";
    return genre;
  }

  // if(age<18){
  // return(
  //   <div>
  //   <div><img src="family.webp" alt="family.webp" width="40%"
  //   height="40%"/></div>
  //   <h2>Name : {name}</h2>
  //   <h3>Rating: {5+3.2}</h3>
  //   {/* <h3>Rating: {rating}</h3> */}
  //   <p>{summary} </p>
  //   <p>Genre: {returnGenre()} </p>
  //   <button>Not Available</button>
  //   </div>);}


  return( 
    <div>
    <div><img src="family.webp" alt="family.webp" width="40%"
    height="40%"/></div>
    <h2>Name : {name}</h2>
    <h3>Rating: {5+3.2}</h3>
    {/* <h3>Rating: {rating}</h3> */}
    <p>{summary} </p>
    <p>Genre: {returnGenre()} </p>
    {/* <button>{age>=18? "Watch Now" : "Not Available"}</button> */}
    <button>{canwatch()}</button>
    </div>
  );
}
export const Footer = () => {
    return <p>copy @ thapatechnical</p>
}

// export default Code;