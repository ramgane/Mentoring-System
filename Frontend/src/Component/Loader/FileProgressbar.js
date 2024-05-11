import { FileEarmark,Check } from 'react-bootstrap-icons';
import ProgressBar from 'react-bootstrap/ProgressBar';
export const FileUploadComponent = ({ name, filesize, percentage }) => {
    return (
      <div className='mt-2 file-upload'>
        <div className='file-preview'>
          <FileEarmark color='#00A46F' size={12} />
        </div>
        <div className='file-name-container-pw'>
          <div className='file-name-pw'>{name}</div>
          <div className='file-size-pw'>{filesize}</div>
          <div className='progress-bar-div-pw'>
            <div className='progress-bar-pw'> 
            <ProgressBar now={percentage}  />
            </div>
            <div>{percentage} %</div>
          </div>
        </div>
        {percentage === 100 && (
          <div className='success-upload'>
            <Check color='#fff' />
          </div>
        )}
      </div>
    );
  };