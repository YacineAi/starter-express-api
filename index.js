const http = require('http');
const httpProxy = require('http-proxy');

const proxy = httpProxy.createProxyServer({});

const proxyServer = http.createServer((req, res) => {
  // Proxy the incoming request to the target server
  proxy.web(req, res, {
    target: 'http://apim.djezzy.dz', // Replace with the target server URL
    changeOrigin: true
  });
});

const PORT = process.env.PORT || 8080;

proxyServer.listen(PORT, () => {
  console.log(`Proxy server listening on port ${PORT}`);
});
