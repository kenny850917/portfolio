import React ,{ Component }from "react";
import { FaReact, FaJs, FaNode } from "react-icons/fa";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { DiMongodb, DiMysql, DiPhp } from "react-icons/di";


const ServiceList = [
    {
        icon: <FaReact />,
        title: 'React',
        description: 'React is an open-source, front end, JavaScript library for building user interfaces or UI components. It is maintained by Facebook and a community of individual developers and companies.',
        fullstar: <><AiFillStar/> <AiFillStar/> <AiFillStar/> <AiFillStar/> </>,
        outlinestar: <AiOutlineStar/>
    },
    {
        icon: <FaJs />,
        title: 'Java Script',
        description: 'JavaScript, often abbreviated as JS, is a programming language that conforms to the ECMAScript specification. JavaScript is high-level, often just-in-time compiled, and multi-paradigm.',
        fullstar: <><AiFillStar/> <AiFillStar/> <AiFillStar/> <AiFillStar/> </>,
        outlinestar: <AiOutlineStar/>
    },
    {
        icon: <FaNode />,
        title: 'Node.js',
        description: 'Node.js is an open-source, cross-platform, back end, JavaScript runtime environment that executes JavaScript code outside a web browser.',
        fullstar: <><AiFillStar/> <AiFillStar/> <AiFillStar/>  </>,
        outlinestar: <><AiOutlineStar/> <AiOutlineStar/></>,
    },
    { 
        icon: <DiMongodb />,
        title: 'Mongodb',
        description: 'MongoDB is a cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas.',
        fullstar: <><AiFillStar/> <AiFillStar/> <AiFillStar/>  </>,
        outlinestar: <><AiOutlineStar/> <AiOutlineStar/></>,
    },
    {
        icon: <DiMysql />,
        title: 'MySql',
        description: 'MySQL is an open-source relational database management system. Its name is a combination of "My", the name of co-founder Michael Widenius\'s daughter, and "SQL", the abbreviation for Structured Query Language.',
        fullstar: <><AiFillStar/> <AiFillStar/> <AiFillStar/>  </>,
        outlinestar: <><AiOutlineStar/> <AiOutlineStar/></>,
    },
    { 
        icon: <DiPhp />,
        title: 'PHP',
        description: 'PHP is a general-purpose scripting language especially suited to web development. It was originally created by Danish-Canadian programmer Rasmus Lerdorf in 1994; the PHP reference implementation is now produced by The PHP Group.',
        fullstar: <><AiFillStar/> <AiFillStar/> <AiFillStar/>  </>,
        outlinestar: <><AiOutlineStar/> <AiOutlineStar/></>,
    }
]


class ServiceThree extends Component{
    render(){
        const {column } = this.props;
        const ServiceContent = ServiceList.slice(0 , this.props.item);
        
        return(
            <React.Fragment>
                <div className="row">
                    {ServiceContent.map( (val , i) => (
                        <div className={`${column}`} key={i}>
                            <a href="#hardskill">
                                <div className="service service__style--2">
                                    <div className="icon">
                                        {val.icon}
                                    </div>
                                    <div className="content">
                                        <h3 className="title">{val.title}</h3>
                                        <p>{val.description}</p>
                                      
                                        <p>{val.fullstar} {val.outlinestar}</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    ))}
                </div>
            </React.Fragment>
        )
    }
}
export default ServiceThree;
