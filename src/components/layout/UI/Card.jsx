export const Card =({currData}) => {

    const {id , title , body} = currData ;
    // console.log(id);
    // console.log(title);
    // console.log(body);
    
    return (
        <li className="list">
            <div className="container">
                <p>{id}.</p>
                <p>Title : {title}</p>
                <p>News : {body}</p>
            <span className="btn">
                <button className="edit">EDIT</button>
                <button className="delete">DELETE</button>
            </span>
            </div>
        </li>
    )
}