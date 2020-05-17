//  I didn't find this data on API side that is why decided to hardcode them here
//  but ideally it should come from API and to be passed from API to Reducer
const mockedData = [
    { id: 1, path: '/path-one', icon: 'info-circle', text: 'info' },
    { id: 2, path: '/path-two', icon: 'heart', text: null },
    { id: 3, path: '/path-three', icon: 'comment', text: null },
    { id: 4, path: '/path-four', icon: 'shopping-bag', text: null },
    { id: 5, path: '/path-five', icon: 'ellipsis-v', text: null }
];

const mockAPI = {
    getTemplateData: () => {
        return new Promise((resolve) => {
            resolve(mockedData);
        });
    },
};

export default mockAPI;
