import React from 'react';
import { useParams } from 'react-router-dom';

const Repository: React.FC = () => {
  const { username, repositoryname } = useParams();

  return (
    <h1>
      Repository: {username}/{repositoryname}
    </h1>
  );
};

export default Repository;
