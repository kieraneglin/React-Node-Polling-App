module.exports = {
	entry: "./app_client.js",
	output: {
		filename: "public/bundle.js"
	},
	module: {
		loaders: [
			{
				exclude: /(node_modules|app_server.js)/,
				loader: 'babel',
        query:
          {
            presets:['react']
          }
			}
		]
	}
};
