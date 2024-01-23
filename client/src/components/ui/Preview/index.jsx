import { PreviewFile, PreviewError } from './components';
import { StyledPreviewContainer } from './style';

const Preview = ({ type, fileDetailsList, onDelete, ...props }) => {
	return (
		<StyledPreviewContainer {...props}>
			{fileDetailsList.map((fileDetails) => {
				return fileDetails.file ? (
					<PreviewFile
						key={fileDetails.id}
						type={type}
						file={fileDetails.file}
						onDelete={() => onDelete(fileDetails.id)}
					/>
				) : (
					<PreviewError
						key={fileDetails.id}
						type={type}
						errorMessage={fileDetails.errorMessage}
						onDelete={() => onDelete(fileDetails.id)}
					/>
				);
			})}
		</StyledPreviewContainer>
	);
};

export default Preview;
