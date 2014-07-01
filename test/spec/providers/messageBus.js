describe('message bus provider', function(){
    var theProvider;


    beforeEach(function(){
        var fakeModule = angular.module('test.app', function () {});
        fakeModule.config( function (messageBusProvider) {
            theProvider = messageBusProvider;

        });

        module('app','test.app');
    });

    it('should add a protected channel', function(){
        debugger;
        expect(theProvider.getChannels()).toBe({});
    })

})