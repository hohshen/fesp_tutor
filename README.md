# stream、buffer
by: hohshen
github:https://github.com/hohshen/fesp_streambuffer

---

## stream、buffer
- stream、buffer 間的關係
- Buffer to console
- stream為何需要用到buffer
- stream+buffer 
- stream video
- 參考資料


---

## stream、buffer 間的關係

- stream:在讀取時，可以同時輸出


- buffer:可以說是一個檔案的暫存區
![](https://i.imgur.com/w4YMMaA.png)

---

## Buffer to console
###### tags: 01、02

---

## stream何時需要用到buffer

- 何時需要用到buffer:
    - 當網路讀取速度與輸出速度不對等時
    - e.g. 
        - 在一個影音平台，網路每秒可以接收5秒畫面的量。
        - 播放時就算用兩倍速，一秒內可以看兩秒。
        - 一秒內 讀取 5s 輸出 2s 還有3s
        - 而多餘的3s可以存在buffer內，當網路不穩斷網時可以先使用buffer內的接收量輸出


---

## stream+buffer 

- 讀取完一個buffer才寫入一次
- 一般stream createReadStream、createWriteStream
- ![](https://i.imgur.com/nGv10zB.png)
###### tags: 03、04、05

---

## stream+buffer 
- Stream pip
- ![](https://i.imgur.com/oEz1zji.png)

---

## stream video
###### tags: 06、07


---


## 參考資料
* https://scar.tw/article/2013/05/30/observe-and-using-node-js-stream-event/
* https://carlos-studio.com/2017/08/14/node-js-buffer-%E6%A8%A1%E7%B5%84%E8%99%95%E7%90%86/
* https://www.eebreakdown.com/2016/10/nodejs-streams.html
* https://www.youtube.com/watch?v=o9fiZmnpvRY
* https://www.youtube.com/watch?v=qexy4Ph66JE
* https://www.youtube.com/watch?v=GlybFFMXXmQ

---

### Thank you! :sheep: 

You can find me on

- GitHub
- Facebook
- or email me
