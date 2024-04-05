import React, { Component } from 'react'


export class NewsItem extends Component {
    
   
    
       
render() {
    let { title, description, imageUrl ,newsUrl,author,date} = this.props;
    return (
        <div>

            <div className="card">
                <img src={!imageUrl?"https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-1948400512.jpg?c=16x9&q=w_800,c_fill":imageUrl} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}.......</p>
                    <p className="card-text"><small className="text-muted">BY {!author?"Unknown": author} on {new Date(date).toGMTString()}</small></p>
                    <a rel ="noreferrer" href={newsUrl}  target="__blank"className="btn btn-sm btn btn-dark">Read More</a>
                </div>

            </div>
        </div>
    )
}
}


export default NewsItem;
