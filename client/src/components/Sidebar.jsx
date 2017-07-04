import React from 'react';
import { Link } from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';

const style = {
  margin: 12,
};

const Sidebar = ({ snapshots, selectSnapshot }) => (
    <AppBar title="Snapshots">
      <RaisedButton label="First" style={style} onClick={() => alert('1')} />
      <RaisedButton label="Previous" style={style} onClick={() => alert('2')} />
      <RaisedButton label="Snapshot" style={style} onClick={() => alert('1')} />
      <RaisedButton label="Next" style={style} onClick={() => alert('2')} />
      <RaisedButton label="Last" style={style} onClick={() => alert('/')} />
      <ul className="list-unstyled">
        {snapshots && snapshots.list &&
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
    </AppBar>

);

export default Sidebar;
