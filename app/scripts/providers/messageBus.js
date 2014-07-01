angular.module('app').provider('messageBus', function(){
    var channels = ['route'];

    this.setProtectedChannel = function(channel){
        channels.push(channel);
    }
    this.getChannels = function(){
        return channels;
    }
    this.$get = function(){}
});