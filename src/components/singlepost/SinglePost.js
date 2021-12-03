import './singlepost.css';

export default function SinglePost() {
    return (
        <div className="singlepost">
          <div className="singlePostWrapper">
          <img 
           className="singlePostImg"
           src="./assets/img/c3.jpg"
           alt=""/>
           <h1 className="singlePostTitle">Lorem ipsum dolor sit amet
           <div className="singlePostEdit">
           <i className=" singlePostIcon fas fa-edit"></i>
           <i className=" singlePostIcon fas fa-trash-alt"></i>
           </div>
           </h1>
           <div className="singlePostInfo">
               <span className="singlePostAuthor">
                   Author: <b>Oumaima</b>
               </span>
               <span className="singlePostDate">
                   1hour ago
               </span>
           </div>
           <p className="singlePostDesc">Lorem ipsum dolor sit amet consectetur, 
               Lorem ipsum dolor sit amet consectetur, 
               adipisicing elit. Quas, eaque eligendi quo
                laudantium similique esse hic. Deleniti reprehenderit
                 odit libero, saepe et ab temporibus nobis. 
               Deleniti quis numquam sequi quidem!
               Lorem ipsum dolor sit amet consectetur adipisicing el
               it. Aut eos fugit quisquam reiciendis atque s
               ed ex maiores adipisci iste velit fuga eligendi numquam, odio explicabo 
               totam consequatur nihil eius. Molestias.
               adipisicing elit. Odio esse, facere voluptas at maxime sunt distinctio ea, quas delectus rem dolore blanditiis voluptatem error,
                aut tempore suscipit accusantium labore fuga.</p>
          </div>
        </div>
    )
}
