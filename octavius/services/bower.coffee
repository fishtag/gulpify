Service = require "#{__base}/core/service"
Bower = require 'bower'

class BowerService extends Service
  events:
    'install': 'install'
    'prune': 'prune'

  initialize: ->
    @start()

  install: (callback) ->
    callback() unless fileExists(__bower)
    Bower.commands.install()
      .on 'end', (result) ->
        callback result

  prune: (callback) ->
    callback() unless fileExists(__bower)
    Bower.commands
      .prune()
      .on 'end', (result) ->
        callback result

module.exports = BowerService