
var config = {

   entry: './index.js',
	
   output: {
      path:'./',
      publicPath: '/',
      filename: 'bundle.js',
   },
	
   devServer: {
      inline: true,
      port: 8080
   },
	
   module: {
      loaders: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel',
				
            query: {
               presets: ['es2015', 'react']
            },
         },
         {
            test: /\.css$/,
            exclude: /\.useable\.css$/,
            loader: "style-loader!css-loader"  
         },
         { 
            test: /\.useable\.css$/, 
            loader: "style-loader/useable!css-loader" 
         }
      
      ]
   },

   resolve: {
    extensions: ['', '.js', '.jsx']
  }
}


module.exports = config;
