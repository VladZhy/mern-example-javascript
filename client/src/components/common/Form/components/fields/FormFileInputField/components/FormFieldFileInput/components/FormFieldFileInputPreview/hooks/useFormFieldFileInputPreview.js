import { useCallback } from 'react';

const useFormFieldFileInputPreview = (
  fileDetailsList,
  setFileDetailsList,
  updateFieldValues
) => {
  const deleteFileDetails = useCallback(
    (id) => {
      const updatedFileDetailsList = fileDetailsList.filter(
        (fileDetails) => fileDetails.id !== id
      );

      setFileDetailsList(updatedFileDetailsList);
      updateFieldValues(updatedFileDetailsList);
    },
    [fileDetailsList, setFileDetailsList, updateFieldValues]
  );

  return { deleteFileDetails };
};

export default useFormFieldFileInputPreview;
