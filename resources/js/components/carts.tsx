export default function Cart(props: {Image: string, Title: string, Description: string, Alts: string, Url: string}) {
 return(
    <>
        <div>
            <img src={props.Image} alt={props.Alts} />
            <h3> {props.Title} </h3>
            <p> {props.Description} </p>
            <a href={props.Url}></a>
        </div>
    </>
 );   
}