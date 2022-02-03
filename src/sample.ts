/* 1. expressモジュールをロードし、インスタンス化してappに代入。*/
const express = require("express");
const app = express();

/* 2. listen()メソッドを実行して3000番ポートで待ち受け。*/
const server = app.listen(3000, function(){
    console.log("Node.js is listening to PORT:" + server.address().port);
});

/* 3. 以後、アプリケーション固有の処理 */

// 写真のサンプルデータ
const photoList = [
    {
        id: "001",
        name: "photo001.jpg",
        type: "jpg",
        dataUrl: "http://localhost:3000/data/photo001.jpg"
    },{
        id: "002",
        name: "photo002.jpg",
        type: "jpg",
        dataUrl: "http://localhost:3000/data/photo002.jpg"
    }
]

// 写真リストを取得するAPI
app.get("/api/photo/list", function(req, res, next){
    res.json(photoList);
});

// 写真リストを取得するAPI
app.get("/api/photo/list", function(req, res){
    let photo: {
        id: string;
        name: string;
        type: string;
        dataUrl: string;
    };
    let i: number;
    for(i=0; i<photoList.length; i++) {
        if (photoList[i].id == req.params.photoId){
            photo = photoList[i];
        }
    }
    res.json(photo);
});