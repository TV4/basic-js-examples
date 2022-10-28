import {fetchUserId, fetchUser, fetchUserInfo, fetchImage} from 'any';


fetchUserId((userId, err) => {
    if (err) {
        alert('no user id');
    }
    fetchUser(userId, (user, err) => {
        if (err) {
            alert('no user');
        }
        fetchUserInfo(user, (userInfo, err) => {
            if (err) {
                alert('no userinfo');
            }
            fetchImage(userInfo.avatarUrl, (avatarBlob, err) => {
                if(err) {
                    alert('no useravatarblob');
                }
                setImage(avatarBlob);
            });
        });
    });
})




































let pr = new Promise((resolve, reject) => {
    resolve(1);
});






























Promise.resolve(Promise.resolve(1));



pr = new Promise((resolve, reject) => {
    fetch('www.google.com').then((res) => {
        resolve(res);
    })
});





































const handleUser = userId => {
    fetchUser(userId).then(user => {
        fetchUserInfo(user).then((avatarurl => {
            fetchImage(avatarurl).then((imageBlob) => {
                setImage(imageBlob);
            })
        }));
    });
}
fetchUserId()
    .then(handleUser)
    .catch(err => {
        alert(err);
    });





