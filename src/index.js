const Ping = require('libp2p-ping')


exports = module.exports = Libp2p

function Libp2p (swarm, peerRouting, recordStore) {
  var self = this

  if (!(self instanceof Libp2p)) {
    throw new Error('Must be called with new')
  }

  if (!swarm) {
    throw new Error('a swarm must be passed')
  }

  self.swarm = swarm
  self.routing = peerRouting
  self.record = recordStore

  Ping.pingEcho(self.swarm) // Enable this peer to echo Ping requests
}

Libp2p.prototype.ping = function (peerDst) {
  return new Ping(this.swarm, peerDst) // Ping peerDst, peerDst must be a ipfs-peer object
}
