import React, { Component } from "react";

const PortfolioListContent = [
    {
        image: 'image-1',
        category: 'Melody',
        title: 'Tune up with some beats',
        description: 'check out my Jpop drum cover youtube channel',
        link: 'https://www.youtube.com/channel/UCloVxK1TI_2IPd06gbhCC9A'
    },
    {
        image: 'image-2',
        category: 'Gaming',
        title: 'Getting tickets to the big show',
        description: 'gaming footage with friends ',
        link: 'https://www.youtube.com/channel/UCk7KCpQlMcvLEygFM2_13GQ'
    },
  
  
]

class PortfolioList extends Component{
    render(){
        const {column , styevariation } = this.props;
        const list = PortfolioListContent.slice(0 , this.props.item);
        return(
            <React.Fragment> 
                {list.map((value , index) => (
                    <div className={`${column}`} key={index}>
                        <div className={`portfolio ${styevariation}`}>
                            <div className="thumbnail-inner">
                                <div className={`thumbnail ${value.image}`}></div>
                                <div className={`bg-blr-image ${value.image}`}></div>
                            </div>
                            <div className="content">
                                <div className="inner">
                                    <p>{value.category}</p>
                                    <h4><a href={value.link}>{value.title}</a></h4>
                <h5> <span>{value.description}</span> </h5>
                                    <div className="portfolio-button">
                                        <a className="rn-btn" href={value.link}>View Channel</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
               
            </React.Fragment>
        )
    }
}
export default PortfolioList;