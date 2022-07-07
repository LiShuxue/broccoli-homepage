<h1 align="center">
  Broccoli-homepage
</h1>

<p align="center">
  <img src="https://img.shields.io/badge/node-16.14.0-brightgreen.svg">
  <img src="https://img.shields.io/badge/yarn-1.22.17-brightgreen.svg">
  <img src="https://img.shields.io/badge/react-18.2.0-yellow.svg">
  <img src="https://img.shields.io/badge/typescript-4.7.4-yellow.svg">
  <img src="https://img.shields.io/badge/webpack-5.73.0-yellow.svg">
</p>

## 在线地址

[click here](http://lishuxue.site:8081)

## 目录结构

```
├── .github                 github的actions自动部署脚本
├── .vscode                 vscode的个人偏好配置
├── coverage                单元测试的覆盖率结果
├── dist                    项目构建文件
├── node_modules
├── public
│
├── src
│   ├── api		            后台请求
│   ├── assets		        资源文件
│   ├── components		    公共组件
│   ├── config		        公共配置
│   ├── pages			    页面源码
│   ├── styles		        公共样式
│   ├── types		        ts声明文件
│   ├── utils		        工具库
│   ├── App.tsx		        
│   └── index.tsx	
│		    
├── tests                   单元测试用例和配置
│
├── webpack
│   ├── webpack.base.js	    webpack配置文件-公共部分
│   ├── webpack.dev.js		webpack配置文件-开发环境
│   └── webpack.prod.js		webpack配置文件-生产环境
│
├── .eslintignore           eslint忽略文件
├── .eslintrc.js            eslint配置文件
├── .gitignore              git忽略文件
├── .prettierrc             prettier配置文件
├── babel.config.js         babel配置文件
├── jest.config.js          jest配置文件
├── postcss.config.js       postcss配置文件
├── tsconfig.json           typescript配置文件
├── package.json
├── yarn.lock
└── README.md
```

## 项目启动
### `yarn`

Install the dependency. Node expected version "^12.22.0 || ^14.17.0 || >=16.0.0".\
If you don't want change node version now, you can also use `yarn --ignore-engines` to install dependency with ignore the error.

### `yarn start`

Run the app in the development mode.\
Open [http://localhost:8081](http://localhost:8081) to view it in the browser.

### `yarn build`

Builds the app for production to the `dist` folder.

### `yarn test`

Excute the test file with jest.

### `yarn test-coverage`

Excute the test file with jest, and also generate the coverage info, you can open coverage/lcov-report/index.html in the browser.

### `yarn lint`

Find the problems in your code.

### `yarn lint-fix`

Find and auto fix the problems in your code.
