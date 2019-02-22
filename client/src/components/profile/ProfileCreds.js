import React, { Component } from 'react';


class ProfileCreds extends Component {
  render() {
    const { experience } = this.props;

    const expItems = experience.map(exp => (
      <li key={exp._id} className="list-group-item">
        <h1 color = "GREY" >{exp.title}</h1>
        
        <p>
          <strong>Artist:</strong> {exp.artist}
        </p>
        <p>
          {exp.description === '' ? null : (
            <span>
              <strong>Link: </strong><p className="lead"><iframe width="400" height="250" src={exp.description} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>
            </span>
          )}
        </p>
        
      </li>
    ));

   
    return (
      <div className="row">
        <div className="col-md-6">
          <h3 className="text-center text-info">Favorite Songs</h3>
          {expItems.length > 0 ? (
            <ul className="list-group">{expItems}</ul>
          ) : (
            <p className="text-center">No Songs Listed</p>
          )}
        </div>

      </div>
    );
  }
}

export default ProfileCreds;
