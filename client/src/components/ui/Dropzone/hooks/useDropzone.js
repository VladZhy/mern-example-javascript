import { useMemo } from 'react';
import { useDropzone as useReactDropzone } from 'react-dropzone';

const useDropzone = (type, extensions, onDrop, maxFiles) => {
  const accept = useMemo(() => {
    const accept = {};

    if (type === 'image') {
      accept['image/*'] = extensions;
    }

    return accept;
  }, [type, extensions]);

  const settings = useMemo(() => {
    return {
      accept,
      onDrop,
      maxFiles,
    };
  }, [accept, onDrop, maxFiles]);

  return useReactDropzone(settings);
};

export default useDropzone;
