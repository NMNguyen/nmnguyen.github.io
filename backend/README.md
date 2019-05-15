*Lưu ý: backend đang sử dụng app `cloudjet-work` là app production.* https://console.firebase.google.com/u/0/project/cloudjet-work/functions

# Installation

```
$ npm install -g firebase-tools
$ firebase login
```

# Structure

- `.firebaserc`: một tập tin ẩn giúp bạn nhanh chóng chuyển đổi giữa các dự án với lệnh firebase use.
- `firebase.json`: mô tả các thuộc tính cho dự án của bạn.
- `functions/`: thư mục này chứa tất cả các code cho các hàm của bạn.
- `functions/package.json`: một tập tin package của NPM mô tả Cloud Functions của bạn.
- `functions/index.js`: mã nguồn chính cho code Cloud Functions của bạn.
- `functions/node_modules/`: thư mục chứa tất cả các phụ thuộc NPM đã cài đặt của bạn.
 
# How to deploy

```
$ firebase deploy --only functions
```

# Some documents

- Samples: https://github.com/firebase/functions-samples
- https://viblo.asia/p/tim-hieu-cloud-functions-for-firebase-bJzKmgbkl9N
- https://code.tutsplus.com/vi/tutorials/serverless-apps-with-firebase-cloud-functions--cms-28557
- https://stackoverflow.com/questions/42774807/cloud-functions-for-firebase-getaddrinfo-enotfound