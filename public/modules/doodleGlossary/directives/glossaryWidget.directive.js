'use strict';


angular.module('doodleGlossary').directive('glossaryWidget', function () {
    return {
        restrict: 'E',
        templateUrl: 'modules/doodleGlossary/directives/glossaryWidget.directive.html',
        scope: {widgetitem: "="},
        link: function (scp, el, att) {
            scp.checkboxChange = function (glossaryVariable) {
                console.log(glossaryVariable);
                scp.createDoodleWidget('calc','test',true,glossaryVariable);
            }
        }
   };
});