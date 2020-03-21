var proposalApp = angular.module('Proposal', []);

// Define the `PhoneListController` controller on the `phonecatApp` module
proposalApp.controller('ProposalController', function ProposalController($scope) {
  $scope.siteTitle = "Shopify Development";
  $scope.clientName = "Gonzalo Bonini";
  $scope.goals = "Scelerisque enim mi curae erat ultricies lobortis donec velit in per cum consectetur purus a enim platea vestibulum lacinia et elit ante scelerisque vestibulum. At urna condimentum sed vulputate a duis in senectus ullamcorper lacus cubilia consectetur odio proin sociosqu a parturient nam ac blandit praesent aptent. Eros dignissim mus mauris a natoque ad suspendisse nulla a urna in tincidunt tristique enim arcu litora scelerisque eros suspendisse.";
  $scope.feeDesc = "Scelerisque enim mi curae erat ultricies lobortis donec velit in per cum consectetur purus a enim platea vestibulum lacinia et elit ante scelerisque vestibulum. At urna condimentum sed vulputate a duis in senectus ullamcorper lacus cubilia consectetur odio proin sociosqu a parturient nam ac blandit praesent aptent. Eros dignissim mus mauris a natoque ad suspendisse nulla a urna in tincidunt tristique enim arcu litora scelerisque eros suspendisse.";
  $scope.items = [
    {name:'Item 1', desc: 'Ante turpis integer aliquet porttitor.', price: 29.99},
    {name:'Item 2', desc: 'Ante turpis integer aliquet porttitor.', price: 19.99},
    {name:'Item 3', desc: 'Ante turpis integer aliquet porttitor.', price: 69.99}
  ];
  $scope.total = 0;

  $scope.getFeeTotal = function(){
    var total = 0;
    for(var i = 0; i < $scope.items.length; i++){
        var item = $scope.items[i];
        total += item.price;
    }
    $scope.total = total;
    return total;
  }
  $scope.effectiveDate = "15/04/2019";
  $scope.feePercent = "100%";

  $scope.projectDuration = "2 weeks";
});
