// TODO: change site name
const SITE_NAME = 'http://localhost:3000';
const CopyToClipboard = newClip => {
  navigator.permissions.query({name: 'clipboard-write'}).then(result => {
    if (result.state === 'granted' || result.state === 'prompt') {
      navigator.clipboard.writeText(`${SITE_NAME}/${newClip}`).then(
        function () {
          console.log('COPIED');
        },
        function () {
          console.error('COPY FAILED');
        }
      );
    }
  });
};

export default CopyToClipboard;
