const path = require("path");
const webpack = require("webpack");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin"); //去除空格
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerWebpackPlugin  = require("css-minimizer-webpack-plugin");
const TerserPlugin = require('terser-webpack-plugin');
const options = {
	filename: "app.html",
	template: path.resolve(__dirname, "./src/index.html"), //源模板文件
	minify: {
		// 压缩HTML文件
		removeComments: true, // 移除HTML中的注释
		collapseWhitespace: true, // 删除空白符与换行符
	},
	hash: true,//true|false，是否为所有注入的静态资源添加webpack每次编译产生的唯一hash值，添加hash形式如下所
	inject:'head', //把入口的静态资源引入到head中
	//inject:true, //引入入口（entry中）静态资源的东西
	//chunks: 'all',
	title: 'WebpackApp',
}
module.exports = {
			optimization:{    //优化配置
				minimizer:[
					new CssMinimizerWebpackPlugin(),
					new TerserPlugin()
				],
				splitChunks:{  //公共文件抽离
					name: 'app-chunk-vendors',
					chunks:'all'
				}
		 },
			entry: {
				helloWord: "./src/helloWord.js",
				index:"./src/index.js",
				another:"./src/another.js",
			},
			output: {
				path: path.resolve(__dirname, "dist"),
				filename: "script/[name].js",
				clean:true,
				assetModuleFilename:'images/[contenthash][ext]',
				publicPath:'http://localhost:3000/'
			},
			//改变打包后js文件的格式
			devtool:"eval-cheap-module-source-map",

			plugins:[
				new HtmlWebpackPlugin({
					filename: "app.html",
					template: path.resolve(__dirname, "./src/index.html"), //源模板文件
					minify: {
						// 压缩HTML文件
						removeComments: true, // 移除HTML中的注释
						//collapseWhitespace: true, // 删除空白符与换行符
					},
					hash: true,//true|false，是否为所有注入的静态资源添加webpack每次编译产生的唯一hash值，添加hash形式如下所
					inject:'head', //把入口的静态资源引入到head中
					// chunks: 'all',
					title: 'WebpackApp',
				}),
				new MiniCssExtractPlugin({
						 filename:'styles/[name].css'
				})
			],
			devServer:{   //热更新   代理
				 static:'./src',
				 port:8089,
				 proxy:{
					//一旦devServer5000接到/api/xxx的请求，就会把请求转发到另一个服务器3000
					'/api':{
							//转发后的目标地址
							target:'http://localhost:3000',
							// 发送请求时，请求路径重写 /api/xxx ->  /xxx （去掉a/pi）
							pathRewrite: {
									'^/api': ''
							},
							//changeOrigin参数, 是一个布尔值, 设置为true, 本地就会虚拟一个服务器接收你的请求并代你发送该请求,
							changeOrigin:true,
						}
					 }
			}
}

