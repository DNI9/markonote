const CopyToClipboard = async newClip => {
  try {
    await navigator.clipboard.writeText(`${window.location.href}${newClip}`);
    console.log('copied');
  } catch (error) {
    await navigator.permissions.query({name: 'clipboard-write'});
    console.error(error.message);
  }
};

export default CopyToClipboard;
