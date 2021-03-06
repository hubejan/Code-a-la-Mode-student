import React, { Component } from 'react';
import FadeIn from 'react-fade-in';
import PropTypes from 'prop-types';
import Directory from './Directory';
import File from './File';
import { initializationPromise, getAllFiles, mkDirStructure } from '../utils/file-functions';
import { mergeStyleObjects } from '../utils/helpers';
import defaultStyles from '../utils/defaultStyles';

export default class FileTree extends Component {
  constructor() {
    super();
    this.state = {
      files: this.props ? this.props.files : []
    };
    this.setVisibility = this.setVisibility.bind(this);
    this.onFileClick = this.onFileClick.bind(this);
  }

  componentDidMount() {
    if (this.props.socket) {
      this.props.socket.on('treeChanges', files => {
        if (files[0]) {
          this.truncTreePath(files, files[0].filePath.lastIndexOf('/'));
        }
        mkDirStructure(files)
          .then(() => {
            mkDirStructure(files)
            .then(() => {
              this.setState({ files });
            });
          })
          .catch(console.error);
      });
    }

    return this.props.directory && this.props.directory.length &&
      initializationPromise(this.props.directory)
        .then(() => {
          return getAllFiles(this.props.directory)
            .then(files => this.setState({ files }))
            .catch(console.error);
        })
        .catch(error => console.error(error));
  }

  // this function truncates the file paths from
  // '/Users/myUsername/myProject/package.json' to '//package.json'
  truncTreePath(tree, rootIdx) {
    tree.map(file => {
      file.filePath = `/${file.filePath.slice(rootIdx)}`;
      if (file.isDirectory) {
        this.truncTreePath(file.files, rootIdx);
      }
      return file;
    });
  }

  setVisibility(filePath) {
    this.props.toggleVisibility(filePath);
  }

  onFileClick(file) {
    this.props.onFileClick && this.props.onFileClick(file);
  }

  render() {
    const files = this.state.files;

    // Next 6 lines merge any style props passed down with default props.
    // This way no unexpected changes occur as a result of passing down style props.
    const fileTreeStyle = this.props.fileTreeStyle ? mergeStyleObjects(
      defaultStyles.fileTreeStyle, this.props.fileTreeStyle) : defaultStyles.fileTreeStyle;
    const directoryStyle = this.props.directoryStyle ? mergeStyleObjects(
      defaultStyles.directoryStyle, this.props.directoryStyle) : defaultStyles.directoryStyle;
    const fileStyle = this.props.fileStyle ? mergeStyleObjects(
      defaultStyles.fileStyle, this.props.fileStyle) : defaultStyles.fileStyle;

    return (
      files.length > 0 &&
      <ul className="_fileTree" style={fileTreeStyle} >
        {files.map(file => {
          const filePath = file.filePath;
          const fileName = filePath.split('/').slice(-1).join('');
          return file.isDirectory ?
            <FadeIn>
              <li className="_directory" key={`${filePath} Directory`} style={directoryStyle}>
                <div onClick={() => this.setVisibility(file.filePath)} role="menuitem" tabIndex={0}>
                  <Directory
                    className="directory"
                    visible={this.props.isVisible[file.filePath]}
                    theme={this.props.directoryTheme}
                  />
                  {` ${fileName}`}
                </div>
                {this.props.isVisible[file.filePath] &&
                <FileTree
                  files={file.files}
                  directory={file.filePath}
                  onFileClick={this.props.onFileClick}
                  toggleVisibility={this.props.toggleVisibility}
                  directoryTheme={this.props.directoryTheme || 'light'}
                  isVisible={this.props.isVisible}
                  fileTreeStyle={this.props.fileTreeStyle}
                  directoryStyle={this.props.directoryStyle}
                  fileStyle={this.props.fileStyle}
                />}
              </li>
            </FadeIn>
            :
            <FadeIn>
            <li
              className="_file"
              key={filePath}
              role="menuitem"
              onClick={() => this.onFileClick(file)}
              style={fileStyle}
            >
              <File className="file" />{` ${fileName}`}</li></FadeIn>;
        })
        }
      </ul>
    );
  }
}
FileTree.propTypes = {
  onFileClick: PropTypes.func,
  toggleVisibility: PropTypes.func,
  directoryTheme: PropTypes.string,
  isVisible: PropTypes.object,
  fileTreeStyle: PropTypes.object,
  directoryStyle: PropTypes.object,
  fileStyle: PropTypes.object,
  socket: PropTypes.object,
  directory: PropTypes.string,
  files: PropTypes.array
};
