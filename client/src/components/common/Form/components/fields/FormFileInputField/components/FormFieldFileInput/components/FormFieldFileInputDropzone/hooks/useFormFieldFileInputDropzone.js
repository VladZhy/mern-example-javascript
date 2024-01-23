import { useCallback } from 'react';
import IdGenerationService from 'services/IdGenerationService';
import FileConversionService from 'services/FileConversionService';

const useFormFieldFileInputDropzone = (
	fileDetailsList,
	setFileDetailsList,
	updateFieldValues,
	maxFiles
) => {
	const onDrop = useCallback(
		async (acceptedFiles, rejectedFiles) => {
			const newFileDetailsList = await getNewFileDetailsList(
				acceptedFiles,
				rejectedFiles
			);
			const updatedFileDetailsList = getUpdatedFileDetailsList(
				newFileDetailsList,
				fileDetailsList,
				maxFiles
			);

			setFileDetailsList(updatedFileDetailsList);
			updateFieldValues(updatedFileDetailsList);
		},
		[fileDetailsList, maxFiles, setFileDetailsList, updateFieldValues]
	);

	return { onDrop };
};

export default useFormFieldFileInputDropzone;

async function getNewFileDetailsList(acceptedFiles, rejectedFiles) {
	const acceptedFileDetailsList = await getAcceptedFileDetailsList(
		acceptedFiles
	);
	const rejectedFileDetailsList = getRejectedFileDetailsList(rejectedFiles);

	return [...acceptedFileDetailsList, ...rejectedFileDetailsList];
}

async function getAcceptedFileDetailsList(acceptedFiles) {
	const acceptedFileDetailsList = [];

	if (acceptedFiles.length) {
		await Promise.all(
			acceptedFiles.map(async (file) => {
				console.log(file);
				const fileDetailsList = { id: IdGenerationService.generate() };

				try {
					fileDetailsList.file = await FileConversionService.toBase64(file);
				} catch {
					fileDetailsList.errorMessage = 'Failed to process the image';
				}

				acceptedFileDetailsList.push(fileDetailsList);
			})
		);
	}

	return acceptedFileDetailsList;
}

function getRejectedFileDetailsList(rejectedFiles) {
	const rejectedFileDetailsList = [];

	if (rejectedFiles.length) {
		for (const file of rejectedFiles) {
			const fileDetailsList = {
				id: IdGenerationService.generate(),
				errorMessage: file.errors[0].message,
				file: null
			};

			rejectedFileDetailsList.push(fileDetailsList);
		}
	}

	return rejectedFileDetailsList;
}

function getUpdatedFileDetailsList(
	newFileDetailsList,
	currentFileDetailsList,
	maxFiles
) {
	const fileDetailsList = [...newFileDetailsList, ...currentFileDetailsList];

	return fileDetailsList.slice(0, maxFiles);
}
