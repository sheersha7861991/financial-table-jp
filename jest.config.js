// jest.config.js
module.exports = {
    preset: 'react-scripts',
    setupFilesAfterEnv: [
        '@testing-library/jest-dom/extend-expect',
        '@testing-library/react/cleanup-after-each',
    ],
};
