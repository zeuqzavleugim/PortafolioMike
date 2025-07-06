export default function Cart(props: {Image: string, Title: string, Description: string, Alts: string, Url: string}) {
 return(
    <>
        <div className="carts">
            <img src={props.Image} alt={props.Alts} title={props.Alts} loading="lazy" />
            <h2> {props.Title} </h2>
            <p> {props.Description} </p>
            <a href={props.Url} target="_blank" title={props.Title}>Visitar Sitio</a>
        </div>
    </>
 );   
}