import React from "react";
import './posts.css'

function PostProjetos() {
   return(
        <section className="post-container">
            <div className="post1">
                <div className="imagem">
                    <a href="/" className="gb">
                        <h3 className="text"> Move It</h3>
                     </a>
                </div>     
            </div>
            <div className="post2">
                <div className="imagem">
                    <a href="/" className="gb">
                        <h3 className="text"> Weather</h3>
                     </a>
                </div>     
            </div>
            <div className="post3">
                <div className="imagem">
                    <a href="/" className="gb">
                        <h3 className="text"> Roquet.Q</h3>
                     </a>
                </div>     
            </div>

        </section>);
}

export default PostProjetos;