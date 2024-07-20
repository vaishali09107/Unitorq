import PropTypes from "prop-types";
import React from 'react';



const WorkDetailsContainer = ({ data }) => {
   
    return (
        <div className="section section-padding">
            <div className="container">
                <div className="row pt--100 pb--80">

                    

                    <div >
                        <div className="work-left work-details mt-6">
                            <div className="work-main-info">
                                <div className="work-content">
                                    <h6 className="title" data-aos="fade-up">ABOUT UNITORQ</h6>

                                    <div className="desc mt-8">
                                        {data.body.map((value, i) => {
                                            return(
                                                <div key={i} className="content mb-5" data-aos="fade-up" dangerouslySetInnerHTML={{__html: value}} />
                                            )
                                        })}

                                       

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

          

               

                <div className="custom-layout-gallery mt-lg-20 mt-12">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-12">
                            <div className="thumbnail" data-aos="fade-up">
                                <img className="w-100" src={`${process.env.PUBLIC_URL}/${data.gallery.imageOne}`} alt="Agency" />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-12 mt-lg-0 mt-md-0 mt-10">
                            <div className="thumbnail" data-aos="fade-up">
                                <img className="w-100" src={`${process.env.PUBLIC_URL}/${data.gallery.imageTwo}`} alt="Agency" />
                            </div>
                        </div>

                        
                    </div>
                </div>


            </div>
        </div>
    )
}

WorkDetailsContainer.propTypes = {
    data: PropTypes.object
};

export default WorkDetailsContainer;
