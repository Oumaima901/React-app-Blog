import './post.css'

export default function Post() {
    return (
        <div className="post">
           <img 
           className="postImg"
           src="./assets/img/c3.jpg"
           alt=""/>
           <div className="postInfo">
               <div className="postCatg">
                   <span className="postCat">Nature</span>
                   <span className="postCat">Life</span>
               </div>
               <span className="postTitle">
                   Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
               </span>
               <hr/>
               <span className="postDate">1 hour ago</span>
           </div>
           <p className="postDesc">
               Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi
                reiciendis, harum aliquid assumenda Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                Ratione reiciendis illo consequuntur deleniti mollitia maxime pariatur neque, voluptatum quibusdam quod possimus quisquam in? Saepe, 
                cupiditate autem! Maxime optio non consectetur. asperiores voluptatibus mollitia</p>
        </div>
    )
}

