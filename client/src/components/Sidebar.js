import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = ({ snapshots, selectSnapshot }) => (
    <sidebar>
      <h3>Snapshots</h3>
      <ul className="list-unstyled">
        {snapshots.list &&
          snapshots.list.map((snapshot) => {
            return (
              <li key={snapshot.id} className="category-item menu-item">
                <Link onClick={ () => selectSnapshot(snapshot)}>{snapshot.name}</Link>
              </li>
            );
          })
        }
      </ul>      
      <hr />
    </sidebar>
);

export default Sidebar;
