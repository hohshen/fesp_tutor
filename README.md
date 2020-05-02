# Environment settings
1. `npm init`   初始化node project
2. `npm install --save-dev typescript` install typescript
3. `tsc --init`  初始化node typescript
4. `"outDir": "./dist","rootDir": "./src",`   (tsconfig.json)設定code dir  & compile dir
5. 建立src資料夾放code

# Compile
1. `tsc`  `node dist/app.js` 直接compile,之後自己去dist用node開啟
2. `npx ts-node src/app` 直接compile in memory
3. `npm install tsc-watch --save-dev` `tsc-watch --onSuccess "node ./dist/app.js"` hot reload

# IOC modules
1. `npm install reflect-metadata inversify --save-dev` 安裝ioc module
2. (tsconfig.json)啟用Decorators
  ```json
  "experimentalDecorators": true,
  "emitDecoratorMetadata": true,
  "types": ["reflect-metadata"],
  "lib": [ "es6","dom"],  
  ```
3. 取消 `"strict": true,`

# Reference
[ref1](https://zhuanlan.zhihu.com/p/33492169)   
[ref2](https://github.com/inversify/InversifyJS)
 
 