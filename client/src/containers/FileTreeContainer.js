import { connect, Provider } from 'react-redux';
import React, { Component } from 'react';

import FileTree from '../components/FileTree';
import { toggleVisibility } from '../reducers/fileTree-reducer';
import { storeFilePath } from '../action-creators/fileTree-actions';
import store from '../store';

const mapStateToProps = state => ({
  isVisible: state.fileTree.isVisible
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  toggleVisibility: filePath => dispatch(toggleVisibility(filePath)),
  onFileClick: selectedFile => dispatch(storeFilePath(ownProps.socket, selectedFile))
});

const ConnectFileTree = connect(mapStateToProps, mapDispatchToProps)(FileTree);

export default class extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectFileTree {...this.props} />
      </Provider>
    );
  }
}
