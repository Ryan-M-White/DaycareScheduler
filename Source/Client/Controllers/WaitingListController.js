    angular.module('DaycareApp').controller('WaitingListController', ['$scope', '$http', function($scope, $http){

        $scope.Children = [];
        
        $scope.RefreshDatabase = function() {
            $http.get('/RefreshDatabase')
            .then(function(response) {
                alert("An HTTP request has been sent to the server.\nNow updating DaycareDB.db!");
                // location.reload();
            });
        };

        $scope.LoadWaitingList = function() {
            $http.get('/LoadWaitingList')
            .then(function(response) {
                // alert("HTTP request set, getting data");
                // $scope.Children.push(response.data);

                for(var i = 0; i < response.data.length; i++){
                    $scope.Children.push(response.data[i]);
                }
                debugger;
            });
        };

    // $scope.Children = [
    //     {
    //         ChildName: "Jessica Brown",
    //         DOB: "10/3/20160", 
    //         PhoneNumber: "555-555-5555", 
    //         PrimaryParentName: "John Brown", 
    //         PrimaryParentStatus: "Student", 
    //         SecondaryParentName: "Jane Brown",
    //         SecondaryParentStatus: "Community",
    //         DOA: "10/31/2016",
    //         DesStart: "10/17/2016",
    //         Class: "IN",
    //         Days: "MWF"
    //     },
    // ]

    }]);