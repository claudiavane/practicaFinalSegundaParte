import React, { useRef } from 'react';
import { FormGroup } from 'reactstrap';
import { func } from 'prop-types';

const FileUploader = ({ onFileSelectSuccess, onFileSelectError }) => {
  const fileInput = useRef(null);

  const handleFileInput = (e) => {
    console.log(e);
    const file = e.target.files[0];
    if (fileInput.size > 1024) {
      onFileSelectError({ error: 'File size cannot exceed more than 1MB' });
    } else {
      onFileSelectSuccess(file);
    }
  };

  const uploadImage = (e) => {
    e.preventDefault();
    // eslint-disable-next-line no-unused-expressions
    fileInput.current && fileInput.current.click();
  };

  return (
    <FormGroup className="file-uploader">
      <input type="file" onChange={handleFileInput} ref={fileInput} hidden />
      <button type="button" onClick={uploadImage} className="btn btn-primary">
        Submit image
      </button>
    </FormGroup>
  );
};

FileUploader.propTypes = {
  onFileSelectSuccess: func,
  onFileSelectError: func,
};

export default FileUploader;
