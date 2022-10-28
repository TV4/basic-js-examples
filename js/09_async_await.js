const fn = async () => {
    const res = await Promise.resolve();
    return res;
};


const userId = await getUserId();
const user = await getUser( userId);
const avatarUrl = await userAvatarUrl(user);
const imgBlob = getImage(avatarUrl);
setImageBlob(imgBlob);


(async () => {
    const userId = await fetch('getUserId');
    const user = await fetch('getUser' + userId);
    const avatarUrl = await fetch("userAvatarUrl" + user);
    setAvatarurl(avatarUrl);
})();
const c = 1;
