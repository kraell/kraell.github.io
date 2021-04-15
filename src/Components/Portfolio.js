import React, { Component } from 'react';

class Portfolio extends Component {
  render() {

    if(this.props.data){
      // var projects = this.props.data.projects.map(function(projects){
      //   var projectImage = 'images/portfolio/'+projects.image;
      //   return <div key={projects.title} className="columns portfolio-item">
      //             <div className="item-wrap">
      //               <a href={projects.url} title={projects.title}>
      //                 <img alt={projects.title} src={projectImage} />
      //                 <div className="overlay">
      //                   <div className="portfolio-item-meta">
      //                     <h5>{projects.title}</h5>
      //                     <p>{projects.category}</p>
      //                   </div>
      //                 </div>
      //                 <div className="link-icon"><i className="fa fa-link"></i></div>
      //               </a>
      //             </div>
      //           </div>
      // })

      var projects = this.props.data.projects.map(function(projects){
        var projectImage = 'images/portfolio/'+projects.image;
        return <div key={projects.name} className="columns portfolio-item">
                  <div class="item-wrap">
                    <a href={projects.url} title={projects.name} target="_blank" rel="noopener noreferrer">
                      <img className='project' alt={projects.name} src={projectImage} />
                      <div className="overlay">
                        <div className="portfolio-item-meta"></div>
                      </div>
                      <div className="link-icon">
                        <i className="fa fa-link"></i>
                      </div>
                    </a>
                  </div>
                  <h5>{projects.name}</h5>
                  <p>{projects.description}</p>
                </div>
      })
    }

    return (
      <section id="portfolio">

      <div className="row">

         <div className="twelve columns collapsed">

            <h1>Check Out Some of My Works.</h1>

            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                {projects}
            </div>
          </div>
      </div>
   </section>
    );
  }
}

export default Portfolio;
