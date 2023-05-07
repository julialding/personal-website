
module.exports = {
  async redirects() {
    return [
      {
        source: '/test',
        destination: '/main',
        permanent: true,
      },
    ]
  },
}
