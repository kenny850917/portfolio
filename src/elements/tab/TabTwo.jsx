import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

class TabsTwo extends Component{
    render(){
        let 
        tab1 = "Main skills",
        tab2 = "Awards",
        tab3 = "Experience",
        tab4 = "Education & Certification";
        const { tabStyle } = this.props
        return(
            <div>
                {/* Start Tabs Area */}
                <div className="tabs-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <Tabs>
                                    <TabList  className={`${tabStyle}`}>
                                        <Tab>{tab1}</Tab>
                                        <Tab>{tab2}</Tab>
                                        <Tab>{tab3}</Tab>
                                        <Tab>{tab4}</Tab>
                                    </TabList>

                                    <TabPanel>
                                        <div className="single-tab-content">
                                            <ul>
                                                <li>
                                                    <a href="/hardskill">Web and interface design <span> - Frontend Development</span></a>
                                                    Step by step, components by components...
                                                </li>
                                                <li>
                                                    <a href="/hardskill">Database structure<span> - Backend Development</span></a>
                                                    It all ends up with optimization, optimization and opti...
                                                </li>
                                                <li>
                                                    <a href="/hardskill">Interaction design <span> - Animation enlightens</span></a>
                                                    Delight users with visualization. 
                                                </li>
                                            </ul>
                                        </div>
                                    </TabPanel>

                                    <TabPanel>
                                       <div className="single-tab-content">
                                           <ul>
                                           {/* <li>
                                                   <a href="/hardskill">Passionate <span>- strive for better</span></a> current
                                               </li> */}
                                               <li>
                                                   <a href="/hardskill">Burnaby South Web design <span>- Top 3</span></a> 2015
                                               </li>
                        
                                           </ul>
                                       </div>
                                    </TabPanel>



                                    <TabPanel>
                                       <div className="single-tab-content">
                                           <ul>
                                               <li>
                                                   <a href="/hardskill">FullStack developer <span> - Self Employed</span></a> 2020 
                                               </li>
                                               <li>
                                                   <a href="/hardskill">FullStack developer - intern<span> - EvolveX</span></a> 2020 
                                               </li>
                                               <li>
                                                   <a href="/hardskill">FullStack developer - intern<span> - UBC</span></a> 2019
                                               </li>
                                               
                                           </ul>
                                       </div>
                                    </TabPanel>

                                    <TabPanel>
                                       <div className="single-tab-content">
                                           <ul>
                                               <li>
                                                   <a href="/hardskill">BSc In Computer Science<span> - University of British Columbia, Canada</span></a> 2015 - 2019
                                               </li>
                                              
                                           </ul>
                                       </div>
                                    </TabPanel>
                                    
                                </Tabs>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Tabs Area */}
            </div>
        )
    }
}



export default TabsTwo;