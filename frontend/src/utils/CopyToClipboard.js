// TODO: change site name
const SITE_NAME = 'http://localhost:3000';
const CopyToClipboard = async newClip => {
  try {
    await navigator.clipboard.writeText(`${SITE_NAME}/${newClip}`);
    console.log('copied');
  } catch (error) {
    const {state} = await navigator.permissions.query({
      name: 'clipboard-write',
    });
    console.log(error.message);
  }
};

export default CopyToClipboard;
